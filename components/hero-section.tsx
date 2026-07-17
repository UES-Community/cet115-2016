import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24">
      {/* Gradient orbs — decorative, behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-[-100px] left-1/2 -translate-x-[60%] w-[700px] h-[700px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(152,26,249,0.18) 0%, rgba(134,47,231,0.12) 30%, rgba(255,255,255,0) 70%)',
          }}
        />
        <div
          className="absolute top-[60px] right-[-100px] w-[500px] h-[500px]"
          style={{
            background:
              'linear-gradient(214deg, rgba(255,255,255,0), rgba(255,52,143,0.15) 30%, rgba(255,255,255,0) 65%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#862fe7] mb-4">
          COMERCIO ELECTRÓNICO · CET115-2016
        </p>

        {/* Headline */}
        <h1
          className="font-display font-semibold text-[#111827] text-balance max-w-3xl"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
          }}
        >
          Gestión, Finanzas y{' '}
          <span className="text-[#862fe7]">Administración</span>{' '}
          en el Entorno Digital
        </h1>

        {/* Subheading */}
        <p className="mt-6 font-sans text-lg text-[#6b7589] leading-relaxed max-w-2xl">
          Una plataforma educativa completa con dashboards financieros, análisis de datos,
          formularios validados y generación de reportes PDF para la materia CET115-2016.
        </p>

        {/* CTA Row */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            href="/unidad/1"
            className="inline-flex items-center gap-2 bg-[#862fe7] text-white font-semibold text-base px-6 py-3 rounded-xl hover:bg-[#5f259e] transition-colors shadow-[rgba(11,61,121,0.16)_0px_0px_0px_1px_inset]"
          >
            Comenzar Unidad I
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/recursos"
            className="inline-flex items-center gap-2 bg-transparent border border-[#111827] text-[#111827] font-medium text-base px-6 py-3 rounded-xl hover:bg-[#f1f5f9] transition-colors"
          >
            Ver Recursos
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center gap-3">
          {/* Avatar stack */}
          <div className="flex items-center">
            {['D', 'M', 'A', 'R'].map((letter, i) => (
              <div
                key={letter}
                className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                style={{
                  marginLeft: i === 0 ? 0 : '-10px',
                  zIndex: 4 - i,
                  background: ['#862fe7', '#5f259e', '#ad6df4', '#dc5f05'][i],
                }}
                aria-hidden="true"
              >
                {letter}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5" aria-label="5 estrellas">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-[#111827]">
              Materia semestral · 6 unidades temáticas
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
