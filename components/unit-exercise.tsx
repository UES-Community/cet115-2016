'use client'

import { useState } from 'react'
import { Sparkles, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'
import type { InteractiveExercise } from '@/lib/units-data'

type Props = {
  exercise?: InteractiveExercise
}

export function UnitExercise({ exercise }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)

  if (!exercise) {
    return (
      <div className="p-8 text-center text-[#6b7589] font-sans bg-[#f1f5f9] rounded-2xl">
        No hay ejercicio práctico configurado para esta unidad.
      </div>
    )
  }

  const items = exercise.data?.items || []

  const handleSelect = (index: number, choice: string) => {
    if (submitted) return
    setAnswers((prev) => ({
      ...prev,
      [index]: choice,
    }))
  }

  const checkResults = () => {
    setSubmitted(true)
  }

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  const correctCount = items.reduce((acc: number, item: any, idx: number) => {
    return answers[idx] === item.correctCategory ? acc + 1 : acc
  }, 0)

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#d8e0ea] shadow-sm flex flex-col gap-6 font-sans">
      <div className="flex items-center gap-3 bg-[#faf5ff] p-4 rounded-xl border border-[#ad6df4]/30">
        <Sparkles className="w-6 h-6 text-[#862fe7] shrink-0" />
        <div>
          <h3 className="font-display font-semibold text-[#111827] text-base">
            {exercise.title}
          </h3>
          <p className="text-xs text-[#6b7589] mt-0.5">{exercise.description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item: any, idx: number) => {
          const userChoice = answers[idx]
          const isCorrect = submitted && userChoice === item.correctCategory
          const isWrong = submitted && userChoice !== item.correctCategory

          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-200 bg-emerald-50/40'
                    : 'border-rose-200 bg-rose-50/40'
                  : 'border-[#d8e0ea] bg-[#f1f5f9]/50'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="font-semibold text-sm text-[#111827]">
                    {idx + 1}. {item.scenario}
                  </span>
                  <p className="text-xs text-[#6b7589] mt-1">{item.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  {exercise.data.options.map((option: string) => {
                    const selected = userChoice === option
                    return (
                      <button
                        key={option}
                        onClick={() => handleSelect(idx, option)}
                        disabled={submitted}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          selected
                            ? 'bg-[#862fe7] text-white shadow-sm'
                            : 'bg-white border border-[#d8e0ea] text-[#3f4654] hover:bg-[#faf5ff] hover:border-[#ad6df4]'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>

              {submitted && (
                <div className="mt-3 pt-3 border-t border-black/5 flex items-center gap-2 text-xs">
                  {isCorrect ? (
                    <span className="text-emerald-700 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Correcto ({item.correctCategory}): {item.explanation}
                    </span>
                  ) : (
                    <span className="text-rose-700 font-medium flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> Incorrecto. La opción adecuada es {item.correctCategory}: {item.explanation}
                    </span>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between pt-2">
        {submitted ? (
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-semibold text-[#111827]">
              Puntuación Práctica: {correctCount} / {items.length}
            </span>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#f1f5f9] text-[#111827] text-xs font-semibold rounded-xl hover:bg-[#d8e0ea] transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reintentar
            </button>
          </div>
        ) : (
          <button
            onClick={checkResults}
            disabled={Object.keys(answers).length < items.length}
            className="w-full py-3 bg-[#862fe7] text-white text-sm font-semibold rounded-xl hover:bg-[#5f259e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-sm"
          >
            Verificar Respuestas Prácticas
          </button>
        )}
      </div>
    </div>
  )
}
