'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight, CheckCircle2, Wrench, Target } from 'lucide-react'
import type { UnitData } from '@/lib/units-data'

type Props = {
  unit: UnitData
}

export function UnitDetailContent({ unit }: Props) {
  const prevId = unit.number > 1 ? String(unit.number - 1) : null
  const nextId = unit.number < 6 ? String(unit.number + 1) : null

  return (
    <>
      {/* Hero band */}
      <section className="bg-[#f1f5f9] py-14 border-b border-[#d8e0ea]">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Breadcrumb */}
          <nav aria-label="Migas de pan" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-[#6b7589] font-sans">
              <li>
                <Link href="/" className="hover:text-[#862fe7] transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#111827] font-medium" aria-current="page">
                Unidad {unit.romanNumeral}
              </li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-[0.1em]"
                  style={{ background: unit.bg, color: unit.accent }}
                >
                  Unidad {unit.romanNumeral}
                </span>
              </div>
              <h1
                className="font-display font-semibold text-[#111827] text-balance"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.2,
                }}
              >
                {unit.title}
              </h1>
              <p className="mt-3 font-sans text-base text-[#6b7589] leading-relaxed max-w-2xl">
                {unit.description}
              </p>
            </div>

            {/* Giant number */}
            <div
              className="font-display font-semibold text-9xl lg:text-[160px] leading-none opacity-10 select-none shrink-0"
              style={{ color: unit.accent, letterSpacing: '-0.025em' }}
              aria-hidden="true"
            >
              {unit.romanNumeral}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Topics — 2/3 */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2
              className="font-display font-semibold text-[#111827]"
              style={{ fontSize: '1.375rem', letterSpacing: '-0.025em' }}
            >
              Temas de la Unidad
            </h2>
            <ol className="flex flex-col gap-4" role="list">
              {unit.topics.map((topic, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-[#d8e0ea] bg-white hover:border-[#ad6df4] hover:bg-[#faf5ff] transition-colors"
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-sans shrink-0 mt-0.5"
                    style={{ background: unit.bg, color: unit.accent }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-sans font-semibold text-[#111827] text-sm">
                      {topic.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6b7589] leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Sidebar — 1/3 */}
          <aside className="flex flex-col gap-6">
            {/* Outcomes */}
            <div className="bg-[#f1f5f9] rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#862fe7]" aria-hidden="true" />
                <h2 className="font-sans font-semibold text-[#111827] text-sm uppercase tracking-wide">
                  Objetivos
                </h2>
              </div>
              <ul className="flex flex-col gap-3" role="list">
                {unit.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: unit.accent }}
                      aria-hidden="true"
                    />
                    <span className="font-sans text-sm text-[#3f4654] leading-relaxed">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-2xl p-5 border border-[#d8e0ea] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#862fe7]" aria-hidden="true" />
                <h2 className="font-sans font-semibold text-[#111827] text-sm uppercase tracking-wide">
                  Herramientas
                </h2>
              </div>
              <ul className="flex flex-col gap-2" role="list">
                {unit.tools.map((tool, i) => (
                  <li
                    key={i}
                    className="font-mono text-xs px-3 py-2 rounded-xl"
                    style={{ background: unit.bg, color: unit.accent }}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="/"
              className="w-full text-center font-sans font-semibold text-sm px-5 py-3 rounded-xl border border-[#d8e0ea] text-[#3f4654] hover:bg-[#f1f5f9] transition-colors"
            >
              Ver todas las unidades
            </Link>
          </aside>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-[#f1f5f9] border-t border-[#d8e0ea] py-8">
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between gap-4">
          {prevId ? (
            <Link
              href={`/unidad/${prevId}`}
              className="flex items-center gap-2 font-sans text-sm font-medium text-[#3f4654] hover:text-[#862fe7] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              Unidad anterior
            </Link>
          ) : (
            <div />
          )}
          {nextId ? (
            <Link
              href={`/unidad/${nextId}`}
              className="flex items-center gap-2 bg-[#862fe7] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#5f259e] transition-colors shadow-[rgba(11,61,121,0.16)_0px_0px_0px_1px_inset]"
            >
              Siguiente unidad
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2 bg-[#862fe7] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#5f259e] transition-colors"
            >
              Ver programa completo
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
