import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import {
  BarChart3,
  FileSpreadsheet,
  TableProperties,
  FileText,
  ClipboardCheck,
  ExternalLink,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recursos — CET115-2016 Comercio Electrónico',
  description: 'Librerías, documentación y herramientas para la materia CET115-2016.',
}

const resources = [
  {
    icon: BarChart3,
    name: 'Recharts',
    version: '3.x',
    description:
      'Librería de gráficas para React basada en D3. Usada para dashboards de KPIs, estados financieros y flujos de caja.',
    url: 'https://recharts.org',
    tag: 'Visualización',
    accent: '#862fe7',
    bg: '#ebdafd',
  },
  {
    icon: FileSpreadsheet,
    name: 'SheetJS (xlsx)',
    version: '0.18.x',
    description:
      'Parser y writer para formatos de spreadsheet. Permite importar y exportar reportes y plantillas contables a Excel.',
    url: 'https://sheetjs.com',
    tag: 'Excel I/O',
    accent: '#5f259e',
    bg: '#f3e8ff',
  },
  {
    icon: TableProperties,
    name: 'TanStack Table',
    version: '8.x',
    description:
      'Solución headless para tablas y grillas de datos. Soporta ordenación, filtrado y paginación de grandes conjuntos de datos.',
    url: 'https://tanstack.com/table',
    tag: 'Tablas',
    accent: '#ad6df4',
    bg: '#faf5ff',
  },
  {
    icon: ClipboardCheck,
    name: 'React Hook Form + Zod',
    version: '7.x + 4.x',
    description:
      'Gestión de formularios con validación automática de esquemas. Ideal para formularios contables y de registro de transacciones.',
    url: 'https://react-hook-form.com',
    tag: 'Formularios',
    accent: '#dc5f05',
    bg: '#fff7ed',
  },
  {
    icon: FileText,
    name: '@react-pdf/renderer',
    version: '4.x',
    description:
      'Renderizado de documentos PDF desde React. Genera informes, dictámenes de auditoría y reportes gerenciales descargables.',
    url: 'https://react-pdf.org',
    tag: 'PDF',
    accent: '#862fe7',
    bg: '#ebdafd',
  },
]

export default function RecursosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[#f1f5f9] py-14 border-b border-[#d8e0ea]">
          <div className="mx-auto max-w-[1200px] px-6">
            <nav aria-label="Migas de pan" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-[#6b7589] font-sans">
                <li>
                  <Link href="/" className="hover:text-[#862fe7] transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#111827] font-medium" aria-current="page">
                  Recursos
                </li>
              </ol>
            </nav>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#862fe7] mb-3">
              BIBLIOTECAS Y DOCUMENTACIÓN
            </p>
            <h1
              className="font-display font-semibold text-[#111827]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.025em' }}
            >
              Recursos de la Materia
            </h1>
            <p className="mt-3 font-sans text-[#6b7589] text-base max-w-xl leading-relaxed">
              Documentación oficial y guías de las cinco librerías especializadas instaladas
              en el proyecto para la materia CET115-2016.
            </p>
          </div>
        </section>

        {/* Resources grid */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {resources.map((res) => {
                const Icon = res.icon
                return (
                  <article
                    key={res.name}
                    className="bg-white rounded-3xl p-6 border border-[#d8e0ea] flex flex-col gap-4 hover:border-[#ad6df4] hover:shadow-[0_8px_32px_rgba(134,47,231,0.08)] transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{ background: res.bg }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: res.accent }}
                          aria-hidden="true"
                        />
                      </div>
                      <span
                        className="font-sans text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ background: res.bg, color: res.accent }}
                      >
                        {res.tag}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <h2 className="font-display font-semibold text-[#111827] text-lg tracking-tight">
                          {res.name}
                        </h2>
                        <span className="font-mono text-xs text-[#6b7589]">{res.version}</span>
                      </div>
                      <p className="font-sans text-sm text-[#6b7589] leading-relaxed">
                        {res.description}
                      </p>
                    </div>

                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center gap-1.5 text-sm font-semibold transition-colors"
                      style={{ color: res.accent }}
                      aria-label={`Ver documentación de ${res.name} (abre en nueva pestaña)`}
                    >
                      Ver documentación
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
