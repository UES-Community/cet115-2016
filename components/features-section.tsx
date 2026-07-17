import { BarChart3, FileSpreadsheet, TableProperties, FileText, ClipboardCheck } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Dashboards con Recharts',
    description:
      'KPIs financieros, estados de resultados y flujos de caja visualizados con gráficas interactivas de barras, líneas y área.',
    tag: 'recharts',
    accent: '#862fe7',
    bg: '#ebdafd',
  },
  {
    icon: FileSpreadsheet,
    title: 'Exportación a Excel',
    description:
      'Importa y exporta plantillas contables, libros diarios y reportes financieros en formato .xlsx con SheetJS.',
    tag: 'xlsx',
    accent: '#5f259e',
    bg: '#f3e8ff',
  },
  {
    icon: TableProperties,
    title: 'Grillas de Datos',
    description:
      'Tablas con ordenación, filtrado y paginación eficiente para manejar grandes volúmenes de transacciones con TanStack Table.',
    tag: '@tanstack/react-table',
    accent: '#ad6df4',
    bg: '#faf5ff',
  },
  {
    icon: ClipboardCheck,
    title: 'Formularios Validados',
    description:
      'Formularios robustos con React Hook Form y esquemas de validación automática con Zod para datos contables.',
    tag: 'react-hook-form + zod',
    accent: '#dc5f05',
    bg: '#fff7ed',
  },
  {
    icon: FileText,
    title: 'Reportes en PDF',
    description:
      'Genera dictámenes de auditoría, informes gerenciales y estados financieros en PDF listos para descargar con @react-pdf/renderer.',
    tag: '@react-pdf/renderer',
    accent: '#862fe7',
    bg: '#ebdafd',
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-[#ebdafd] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: text */}
          <div className="lg:w-[380px] shrink-0">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#111827] mb-3">
              HERRAMIENTAS INCLUIDAS
            </p>
            <h2
              className="font-display font-semibold text-[#111827] text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.025em' }}
            >
              Todo lo que necesitas para gestión financiera digital
            </h2>
            <p className="mt-4 font-sans text-[#3f4654] text-base leading-relaxed">
              Cada unidad viene equipada con herramientas profesionales que replican
              el entorno real de trabajo en finanzas y administración de empresas.
            </p>
            <a
              href="/unidad/5"
              className="mt-6 inline-flex items-center gap-2 bg-[#111827] text-white font-semibold text-base px-6 py-3 rounded-xl hover:bg-[#3f4654] transition-colors"
            >
              Ver Unidad Finanzas →
            </a>
          </div>

          {/* Right: feature cards */}
          <div className="flex-1 flex flex-col gap-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.tag}
                  className="bg-white rounded-2xl p-5 border border-[#d8e0ea] flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: feature.bg }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: feature.accent }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-sans font-semibold text-[#111827] text-sm">
                        {feature.title}
                      </h3>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-full"
                        style={{ background: feature.bg, color: feature.accent }}
                      >
                        {feature.tag}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-[#6b7589] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
