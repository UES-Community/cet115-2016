'use client'

import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { FileText } from 'lucide-react'
import MyPDFReport from './pdf-report'

interface Transaction {
  id: string
  description: string
  amount: number
  type: 'income' | 'expense'
  category: string
  date: string
}

export default function PDFButton({
  transactions,
  kpis,
}: {
  transactions: Transaction[]
  kpis: { totalIncome: number; totalExpense: number; netProfit: number }
}) {
  return (
    <PDFDownloadLink
      document={<MyPDFReport transactions={transactions} kpis={kpis} />}
      fileName={`Reporte_Financiero_${new Date().toISOString().split('T')[0]}.pdf`}
    >
      {({ loading }) => (
        <span className="flex items-center gap-2 bg-[#862fe7] text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-[#5f259e] transition-colors shadow-sm cursor-pointer">
          <FileText className="w-4 h-4 text-white" />
          {loading ? 'Generando PDF...' : 'Reporte PDF'}
        </span>
      )}
    </PDFDownloadLink>
  )
}
