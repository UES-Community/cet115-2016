'use client'

import { useState } from 'react'
import { BookOpen, CheckCircle, ChevronDown, Lightbulb } from 'lucide-react'
import type { TheorySection } from '@/lib/units-data'

type Props = {
  sections: TheorySection[]
}

export function UnitTheory({ sections }: Props) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    // Open first section by default
    const initial: Record<string, boolean> = {}
    if (sections && sections.length > 0) {
      initial[sections[0].id] = true
    }
    return initial
  })

  if (!sections || sections.length === 0) {
    return (
      <div className="p-8 text-center text-[#6b7589] font-sans bg-[#f1f5f9] rounded-2xl">
        No hay contenido teórico detallado registrado para esta unidad.
      </div>
    )
  }

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="flex flex-col gap-6 font-sans">
      <div className="flex items-center gap-3 bg-[#ebdafd] text-[#862fe7] p-4 rounded-2xl">
        <BookOpen className="w-6 h-6 shrink-0" />
        <div>
          <h3 className="font-display font-semibold text-[#111827] text-sm">
            Guía Teórica de Estudio
          </h3>
          <p className="text-xs text-[#3f4654] mt-0.5">
            Explora los conceptos fundamentales, leyes, estándares e historia detallada de este tema.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {sections.map((sec, idx) => {
          const isOpen = !!openSections[sec.id]

          return (
            <div
              key={sec.id}
              className="bg-white rounded-2xl border border-[#d8e0ea] overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleSection(sec.id)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-[#faf5ff] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#f1f5f9] text-[#862fe7] font-mono font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-[#111827] text-base">
                      {sec.title}
                    </h4>
                    {sec.subtitle && (
                      <p className="text-xs text-[#6b7589] mt-0.5">{sec.subtitle}</p>
                    )}
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#6b7589] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#862fe7]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="p-5 border-t border-[#d8e0ea] bg-white flex flex-col gap-5">
                  <div className="prose prose-slate max-w-none text-sm text-[#3f4654] leading-relaxed whitespace-pre-line">
                    {sec.content}
                  </div>

                  {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                    <div className="bg-[#faf5ff] p-4 rounded-xl border border-[#ad6df4]/30 flex flex-col gap-2.5">
                      <div className="flex items-center gap-2 text-[#862fe7] font-semibold text-xs uppercase tracking-wider">
                        <Lightbulb className="w-4 h-4" /> Puntos Clave para el Examen
                      </div>
                      <ul className="flex flex-col gap-2">
                        {sec.keyTakeaways.map((takeaway, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2 text-xs text-[#111827]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#862fe7] shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
