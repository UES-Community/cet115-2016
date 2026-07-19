import Link from 'next/link'
import {
  Globe,
  Store,
  Cpu,
  TrendingUp,
  CreditCard,
  Package,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'

const units = [
  {
    number: 'I',
    title: 'Fundamentos del Comercio Electrónico',
    description:
      'Conceptos clave, evolución histórica, tipos de e-commerce y su impacto en la economía global.',
    icon: Globe,
    href: '/unidad/1',
    accent: '#862fe7',
    bg: '#ebdafd',
  },
  {
    number: 'II',
    title: 'Modelos de Negocio Digital',
    description:
      'B2B, B2C, C2C, SaaS y plataformas. Análisis de modelos exitosos y estrategias de monetización.',
    icon: Store,
    href: '/unidad/2',
    accent: '#5f259e',
    bg: '#f3e8ff',
  },
  {
    number: 'III',
    title: 'Plataformas y Tecnología',
    description:
      'CMS, ERP, CRM y herramientas de automatización. Arquitecturas de sistemas para e-commerce.',
    icon: Cpu,
    href: '/unidad/3',
    accent: '#ad6df4',
    bg: '#faf5ff',
  },
  {
    number: 'IV',
    title: 'Marketing y Ventas Online',
    description:
      'SEO, SEM, redes sociales, email marketing y analítica. Embudos de conversión y retención.',
    icon: TrendingUp,
    href: '/unidad/4',
    accent: '#dc5f05',
    bg: '#fff7ed',
  },
  {
    number: 'V',
    title: 'Finanzas y Pagos Digitales',
    description:
      'Pasarelas de pago, criptomonedas, análisis financiero, KPIs y gestión del flujo de caja.',
    icon: CreditCard,
    href: '/unidad/5',
    accent: '#862fe7',
    bg: '#ebdafd',
  },
  {
    number: 'VI',
    title: 'Logística y Operaciones',
    description:
      'Cadena de suministro, fulfillment, última milla, gestión de inventario y atención al cliente.',
    icon: Package,
    href: '/unidad/6',
    accent: '#5f259e',
    bg: '#f3e8ff',
  },
  {
    number: 'VII',
    title: 'Cuestiones Éticas, Sociales y Políticas',
    description:
      'Privacidad de datos (GDPR), propiedad intelectual, gobernanza regulatoria y ética UX.',
    icon: ShieldCheck,
    href: '/unidad/7',
    accent: '#dc5f05',
    bg: '#fff7ed',
  },
]

export function UnitsGrid() {
  return (
    <section className="bg-[#f1f5f9] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#862fe7] mb-3">
            PLAN DE ESTUDIOS
          </p>
          <h2
            className="font-display font-semibold text-[#111827] text-balance"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2rem)', letterSpacing: '-0.025em' }}
          >
            Siete unidades de aprendizaje
          </h2>
          <p className="mt-3 font-sans text-[#6b7589] text-base max-w-xl mx-auto">
            Un recorrido completo por los fundamentos del comercio electrónico moderno,
            desde conceptos hasta operaciones financieras, logísticas y regulación ética.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {units.map((unit) => {
            const Icon = unit.icon
            return (
              <Link
                key={unit.number}
                href={unit.href}
                className="group bg-white rounded-3xl p-6 border border-[#d8e0ea] hover:border-[#ad6df4] hover:shadow-[0_8px_32px_rgba(134,47,231,0.1)] transition-all duration-200 flex flex-col gap-4"
              >
                {/* Icon + number */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ background: unit.bg }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: unit.accent }}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className="font-display font-semibold text-3xl"
                    style={{ color: unit.accent, opacity: 0.2, letterSpacing: '-0.025em' }}
                    aria-hidden="true"
                  >
                    {unit.number}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="font-display font-semibold text-[#111827] text-lg leading-tight tracking-tight">
                    Unidad {unit.number}
                  </h3>
                  <p className="font-sans text-sm font-medium text-[#3f4654] leading-snug">
                    {unit.title}
                  </p>
                  <p className="font-sans text-sm text-[#6b7589] leading-relaxed">
                    {unit.description}
                  </p>
                </div>

                {/* CTA */}
                <div
                  className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: unit.accent }}
                >
                  <span>Explorar unidad</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
