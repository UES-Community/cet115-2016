'use client'

import React, { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import * as XLSX from 'xlsx'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
  SortingState,
} from '@tanstack/react-table'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  FileSpreadsheet,
  FileText,
  Plus,
  Search,
  ArrowUpDown,
} from 'lucide-react'

// --- ZOD & REACT-HOOK-FORM CONFIG ---
const transactionSchema = z.object({
  description: z
    .string()
    .min(3, { message: 'La descripción debe tener al menos 3 caracteres.' }),
  amount: z.coerce
    .number()
    .positive({ message: 'El monto debe ser un número positivo.' }),
  type: z.enum(['income', 'expense']),
  category: z.string().min(1, { message: 'Debe seleccionar una categoría.' }),
  date: z.string().min(1, { message: 'Debe ingresar una fecha.' }),
})

type TransactionFormValues = z.infer<typeof transactionSchema>

interface Transaction {
  id: string
  description: string
  amount: number
  type: 'income' | 'expense'
  category: string
  date: string
}

// --- DYNAMIC PDF LOADING FOR SSR SAFETY ---
const PDFButton = dynamic(
  () => import('@/components/pdf-button'),
  { ssr: false }
)

// Initial dummy data
const initialTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Ventas de productos - Orden #5102',
    amount: 1520.5,
    type: 'income',
    category: 'Ventas',
    date: '2026-07-01',
  },
  {
    id: '2',
    description: 'Publicidad en Meta Ads',
    amount: 350.0,
    type: 'expense',
    category: 'Marketing',
    date: '2026-07-03',
  },
  {
    id: '3',
    description: 'Comisiones de Pasarela (Stripe)',
    amount: 60.8,
    type: 'expense',
    category: 'Finanzas',
    date: '2026-07-05',
  },
  {
    id: '4',
    description: 'Ventas de productos - Orden #5103',
    amount: 890.0,
    type: 'income',
    category: 'Ventas',
    date: '2026-07-08',
  },
  {
    id: '5',
    description: 'Hosting VPS & CDN (Cloudflare)',
    amount: 45.0,
    type: 'expense',
    category: 'Hosting/Tecnología',
    date: '2026-07-10',
  },
  {
    id: '6',
    description: 'Envío de paquetes DHL Express',
    amount: 180.25,
    type: 'expense',
    category: 'Logística',
    date: '2026-07-12',
  },
  {
    id: '7',
    description: 'Ventas de suscripción mensual',
    amount: 450.0,
    type: 'income',
    category: 'Suscripciones',
    date: '2026-07-14',
  },
]

export default function SimuladorPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions)
  const [isMounted, setIsMounted] = useState(false)
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // --- FORM STATE ---
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      description: '',
      amount: 0,
      type: 'income',
      category: 'Ventas',
      date: new Date().toISOString().split('T')[0],
    },
  })

  const watchType = watch('type')

  const categoryOptions = useMemo(() => {
    if (watchType === 'income') {
      return ['Ventas', 'Suscripciones', 'Inversiones', 'Otros Ingresos']
    } else {
      return ['Marketing', 'Hosting/Tecnología', 'Logística', 'Finanzas', 'Otros Egresos']
    }
  }, [watchType])

  const onSubmit = (data: TransactionFormValues) => {
    const newTransaction: Transaction = {
      id: String(Date.now()),
      ...data,
    }
    setTransactions((prev) => [newTransaction, ...prev])
    reset({
      description: '',
      amount: 0,
      type: data.type,
      category: data.type === 'income' ? 'Ventas' : 'Marketing',
      date: new Date().toISOString().split('T')[0],
    })
  }

  // --- FINANCIAL CALCULATIONS ---
  const kpis = useMemo(() => {
    let totalIncome = 0
    let totalExpense = 0
    transactions.forEach((t) => {
      if (t.type === 'income') totalIncome += t.amount
      else totalExpense += t.amount
    })
    return {
      totalIncome,
      totalExpense,
      netProfit: totalIncome - totalExpense,
    }
  }, [transactions])

  // --- RECHARTS DATA PREPARATION ---
  // Aggregate daily transactions for line chart
  const timelineChartData = useMemo(() => {
    const datesMap: Record<string, { date: string; ingresos: number; egresos: number }> = {}
    transactions.forEach((t) => {
      if (!datesMap[t.date]) {
        datesMap[t.date] = { date: t.date, ingresos: 0, egresos: 0 }
      }
      if (t.type === 'income') {
        datesMap[t.date].ingresos += t.amount
      } else {
        datesMap[t.date].egresos += t.amount
      }
    })
    return Object.values(datesMap).sort((a, b) => a.date.localeCompare(b.date))
  }, [transactions])

  // Aggregate by category for pie chart
  const categoryChartData = useMemo(() => {
    const categoriesMap: Record<string, { name: string; value: number }> = {}
    transactions.forEach((t) => {
      if (!categoriesMap[t.category]) {
        categoriesMap[t.category] = { name: t.category, value: 0 }
      }
      categoriesMap[t.category].value += t.amount
    })
    return Object.values(categoriesMap)
  }, [transactions])

  const COLORS = ['#862fe7', '#5f259e', '#ad6df4', '#dc5f05', '#f43f5e', '#10b981', '#3b82f6']

  // --- TANSTACK TABLE CONFIG ---
  const columnHelper = createColumnHelper<Transaction>()

  const columns = useMemo(
    () => [
      columnHelper.accessor('date', {
        header: ({ column }) => (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="flex items-center gap-1 hover:text-[#862fe7] transition-colors cursor-pointer"
          >
            Fecha
            <ArrowUpDown className="w-3.5 h-3.5" />
          </button>
        ),
        cell: (info) => <span className="font-mono text-sm">{info.getValue()}</span>,
      }),
      columnHelper.accessor('description', {
        header: 'Descripción',
        cell: (info) => <span className="font-sans font-medium">{info.getValue()}</span>,
      }),
      columnHelper.accessor('category', {
        header: 'Categoría',
        cell: (info) => (
          <span className="font-sans px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#f1f5f9] text-[#3f4654]">
            {info.getValue()}
          </span>
        ),
      }),
      columnHelper.accessor('type', {
        header: 'Tipo',
        cell: (info) => {
          const type = info.getValue()
          return (
            <span
              className={`font-sans px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                type === 'income' ? 'bg-[#dcfce7] text-[#15803d]' : 'bg-[#fee2e2] text-[#b91c1c]'
              }`}
            >
              {type === 'income' ? 'Ingreso' : 'Egreso'}
            </span>
          )
        },
      }),
      columnHelper.accessor('amount', {
        header: ({ column }) => (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="flex items-center gap-1 ml-auto hover:text-[#862fe7] transition-colors cursor-pointer"
          >
            Monto
            <ArrowUpDown className="w-3.5 h-3.5" />
          </button>
        ),
        cell: (info) => {
          const type = info.row.original.type
          const value = info.getValue()
          return (
            <div
              className={`font-sans text-right font-bold ${
                type === 'income' ? 'text-[#15803d]' : 'text-[#b91c1c]'
              }`}
            >
              {type === 'income' ? '+' : '-'}${value.toFixed(2)}
            </div>
          )
        },
      }),
    ],
    []
  )

  const table = useReactTable({
    data: transactions,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  // --- SHEETJS EXPORT FUNCTION ---
  const exportToExcel = () => {
    const wsData = transactions.map((t) => ({
      ID: t.id,
      Fecha: t.date,
      Descripción: t.description,
      Categoría: t.category,
      Tipo: t.type === 'income' ? 'Ingreso' : 'Egreso',
      Monto: t.amount,
    }))

    const wsSummary = [
      { Métrica: 'Total Ingresos', Valor: kpis.totalIncome },
      { Métrica: 'Total Egresos', Valor: kpis.totalExpense },
      { Métrica: 'Flujo Neto (Ganancias)', Valor: kpis.netProfit },
    ]

    const wb = XLSX.utils.book_new()
    const wsTrans = XLSX.utils.json_to_sheet(wsData)
    const wsSum = XLSX.utils.json_to_sheet(wsSummary)

    XLSX.utils.book_append_sheet(wb, wsTrans, 'Transacciones')
    XLSX.utils.book_append_sheet(wb, wsSum, 'Resumen Financiero')

    XLSX.writeFile(wb, 'Reporte_Financiero_CET115.xlsx')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />

      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-10">
        {/* Header Section */}
        <section className="mb-10">
          <nav aria-label="Migas de pan" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-[#6b7589] font-sans">
              <li>
                <Link href="/" className="hover:text-[#862fe7] transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#111827] font-medium" aria-current="page">
                Simulador Financiero
              </li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-[0.1em] bg-[#ebdafd] text-[#862fe7] mb-3">
                Simulación Interactiva
              </span>
              <h1 className="font-display font-semibold text-[#111827] text-3xl tracking-tight lg:text-4xl">
                Simulador Financiero & Dashboard KPIs
              </h1>
              <p className="mt-2 font-sans text-[#6b7589] text-base max-w-2xl leading-relaxed">
                Ejemplo real de integración de las 5 librerías requeridas por la materia para
                el análisis financiero, flujos de efectivo, reportes y contabilidad digital.
              </p>
            </div>
            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={exportToExcel}
                className="flex items-center gap-2 bg-white text-[#3f4654] font-semibold text-sm px-4 py-2.5 rounded-xl border border-[#d8e0ea] hover:bg-[#f1f5f9] transition-colors shadow-sm cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#15803d]" />
                Exportar Excel
              </button>

              {isMounted && (
                <PDFButton transactions={transactions} kpis={kpis} />
              )}
            </div>
          </div>
        </section>

        {/* KPIs Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-[#d8e0ea] shadow-sm flex items-center justify-between">
            <div>
              <p className="font-sans text-xs font-semibold text-[#6b7589] uppercase tracking-wider mb-1">
                Ingresos Totales
              </p>
              <h3 className="font-sans font-bold text-2xl text-[#111827]">
                ${kpis.totalIncome.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#15803d]" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#d8e0ea] shadow-sm flex items-center justify-between">
            <div>
              <p className="font-sans text-xs font-semibold text-[#6b7589] uppercase tracking-wider mb-1">
                Egresos Totales
              </p>
              <h3 className="font-sans font-bold text-2xl text-[#111827]">
                ${kpis.totalExpense.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-[#b91c1c]" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#d8e0ea] shadow-sm flex items-center justify-between">
            <div>
              <p className="font-sans text-xs font-semibold text-[#6b7589] uppercase tracking-wider mb-1">
                Flujo Neto (Ganancia)
              </p>
              <h3
                className={`font-sans font-bold text-2xl ${
                  kpis.netProfit >= 0 ? 'text-[#15803d]' : 'text-[#b91c1c]'
                }`}
              >
                ${kpis.netProfit.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
              </h3>
            </div>
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                kpis.netProfit >= 0 ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <DollarSign
                className={`w-6 h-6 ${kpis.netProfit >= 0 ? 'text-[#15803d]' : 'text-[#b91c1c]'}`}
              />
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <div className="bg-white rounded-2xl p-6 border border-[#d8e0ea] shadow-sm lg:col-span-2">
            <h2 className="font-display font-semibold text-[#111827] text-lg mb-4">
              Evolución de Flujo de Caja Diario
            </h2>
            <div className="h-[300px]">
              {isMounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timelineChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#94a3b8" fontSize={11} />
                    <YAxis stroke="#94a3b8" fontSize={11} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ingresos" name="Ingresos ($)" fill="#10b981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="egresos" name="Egresos ($)" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Side Chart */}
          <div className="bg-white rounded-2xl p-6 border border-[#d8e0ea] shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="font-display font-semibold text-[#111827] text-lg mb-4">
                Montos por Categoría
              </h2>
              <div className="h-[200px] flex items-center justify-center">
                {isMounted && categoryChartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${Number(value).toFixed(2)}`} />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-sm text-[#6b7589]">Sin datos disponibles</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {categoryChartData.map((entry, idx) => (
                <span
                  key={entry.name}
                  className="inline-flex items-center gap-1.5 text-xs text-[#3f4654]"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                  />
                  {entry.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Transaction management grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form - Add Transaction */}
          <div className="bg-white rounded-2xl p-6 border border-[#d8e0ea] shadow-sm h-fit">
            <h2 className="font-display font-semibold text-[#111827] text-lg mb-4 flex items-center gap-2">
              <Plus className="w-5 h-5 text-[#862fe7]" />
              Nueva Transacción
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-[#3f4654] uppercase tracking-wider mb-1">
                  Descripción
                </label>
                <input
                  type="text"
                  placeholder="Ej: Meta Ads, Venta #5104"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e0ea] text-sm focus:outline-none focus:border-[#862fe7] focus:ring-1 focus:ring-[#862fe7] transition-all"
                  {...register('description')}
                />
                {errors.description && (
                  <p className="text-xs text-red-500 mt-1">{errors.description.message}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3f4654] uppercase tracking-wider mb-1">
                    Tipo
                  </label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e0ea] text-sm bg-white focus:outline-none focus:border-[#862fe7] focus:ring-1 focus:ring-[#862fe7] transition-all"
                    {...register('type')}
                  >
                    <option value="income">Ingreso (+)</option>
                    <option value="expense">Egreso (-)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3f4654] uppercase tracking-wider mb-1">
                    Monto ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e0ea] text-sm focus:outline-none focus:border-[#862fe7] focus:ring-1 focus:ring-[#862fe7] transition-all"
                    {...register('amount')}
                  />
                  {errors.amount && (
                    <p className="text-xs text-red-500 mt-1">{errors.amount.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3f4654] uppercase tracking-wider mb-1">
                    Categoría
                  </label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e0ea] text-sm bg-white focus:outline-none focus:border-[#862fe7] focus:ring-1 focus:ring-[#862fe7] transition-all"
                    {...register('category')}
                  >
                    {categoryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3f4654] uppercase tracking-wider mb-1">
                    Fecha
                  </label>
                  <input
                    type="date"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e0ea] text-sm focus:outline-none focus:border-[#862fe7] focus:ring-1 focus:ring-[#862fe7] transition-all"
                    {...register('date')}
                  />
                  {errors.date && (
                    <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#862fe7] text-white font-semibold text-sm rounded-xl hover:bg-[#5f259e] transition-colors shadow-sm cursor-pointer mt-2"
              >
                Agregar Transacción
              </button>
            </form>
          </div>

          {/* TanStack Table - Log */}
          <div className="bg-white rounded-2xl p-6 border border-[#d8e0ea] shadow-sm lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="font-display font-semibold text-[#111827] text-lg">
                  Libro de Diario Financiero
                </h2>

                {/* Table Search */}
                <div className="relative">
                  <Search className="w-4 h-4 text-[#94a3b8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Buscar transacción..."
                    className="pl-9 pr-4 py-2 rounded-xl border border-[#d8e0ea] text-xs w-full sm:w-[220px] focus:outline-none focus:border-[#862fe7] transition-all"
                  />
                </div>
              </div>

              {/* Responsive table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id} className="border-b border-[#d8e0ea] bg-[#f8fafc]">
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="p-3 text-xs font-bold text-[#3f4654] uppercase tracking-wider first:rounded-l-xl last:rounded-r-xl"
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(header.column.columnDef.header, header.getContext())}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.length > 0 ? (
                      table.getRowModel().rows.map((row) => (
                        <tr
                          key={row.id}
                          className="border-b border-[#d8e0ea] hover:bg-[#faf5ff] transition-colors"
                        >
                          {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="p-3 text-sm text-[#111827]">
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                          ))}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={columns.length} className="p-6 text-center text-sm text-[#6b7589]">
                          No se encontraron transacciones registradas.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Pagination */}
            <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-[#d8e0ea]">
              <span className="text-xs text-[#6b7589]">
                Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount() || 1}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-[#d8e0ea] text-[#3f4654] disabled:opacity-40 disabled:pointer-events-none hover:bg-[#f1f5f9] transition-colors cursor-pointer"
                >
                  Anterior
                </button>
                <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-[#d8e0ea] text-[#3f4654] disabled:opacity-40 disabled:pointer-events-none hover:bg-[#f1f5f9] transition-colors cursor-pointer"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
