'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw, Award, HelpCircle } from 'lucide-react'
import type { QuizQuestion } from '@/lib/units-data'

type Props = {
  questions: QuizQuestion[]
  unitTitle: string
}

export function UnitQuiz({ questions, unitTitle }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  if (!questions || questions.length === 0) {
    return (
      <div className="p-8 text-center text-[#6b7589] font-sans bg-[#f1f5f9] rounded-2xl">
        No hay preguntas de autoevaluación disponibles para esta unidad.
      </div>
    )
  }

  const handleSelectOption = (optionIndex: number) => {
    if (showResults) return
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    setSelectedAnswers({})
    setCurrentQuestion(0)
    setShowResults(false)
  }

  const calculateScore = () => {
    let score = 0
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctOptionIndex) {
        score++
      }
    })
    return score
  }

  const score = calculateScore()
  const percentage = Math.round((score / questions.length) * 100)

  if (showResults) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-[#d8e0ea] shadow-sm flex flex-col items-center text-center gap-6">
        <div className="w-16 h-16 rounded-full bg-[#ebdafd] text-[#862fe7] flex items-center justify-center">
          <Award className="w-10 h-10" />
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-[#111827]">
            ¡Autoevaluación Completada!
          </h3>
          <p className="text-[#6b7589] text-sm mt-1">
            Has respondido las preguntas de la {unitTitle}
          </p>
        </div>

        <div className="bg-[#f1f5f9] p-6 rounded-2xl w-full max-w-md flex flex-col items-center">
          <span className="text-4xl font-extrabold text-[#862fe7] font-display">
            {score} / {questions.length}
          </span>
          <span className="text-sm text-[#6b7589] mt-1 font-medium">
            Puntuación: {percentage}%
          </span>
          <div className="w-full bg-[#d8e0ea] h-3 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-[#862fe7] h-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Question Review List */}
        <div className="w-full text-left flex flex-col gap-4 mt-2">
          <h4 className="font-semibold text-sm text-[#111827] uppercase tracking-wider">
            Revisión de respuestas:
          </h4>
          {questions.map((q, idx) => {
            const selected = selectedAnswers[idx]
            const isCorrect = selected === q.correctOptionIndex
            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl border ${
                  isCorrect
                    ? 'border-emerald-200 bg-emerald-50/50'
                    : 'border-rose-200 bg-rose-50/50'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-sm text-[#111827]">
                      {idx + 1}. {q.question}
                    </p>
                    <p className="text-xs text-[#6b7589] mt-1">
                      <span className="font-semibold">Tu respuesta:</span>{' '}
                      {selected !== undefined ? q.options[selected] : 'Sin responder'}
                    </p>
                    {!isCorrect && (
                      <p className="text-xs text-emerald-700 font-medium mt-0.5">
                        <span className="font-semibold">Respuesta correcta:</span>{' '}
                        {q.options[q.correctOptionIndex]}
                      </p>
                    )}
                    <p className="text-xs text-[#3f4654] italic mt-2 bg-white/60 p-2 rounded border border-black/5">
                      💡 {q.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#862fe7] text-white font-medium text-sm rounded-xl hover:bg-[#5f259e] transition-colors shadow-sm cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" /> Reiniciar Autoevaluación
        </button>
      </div>
    )
  }

  const q = questions[currentQuestion]
  const selectedOption = selectedAnswers[currentQuestion]

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#d8e0ea] shadow-sm flex flex-col gap-6">
      <div className="flex items-center justify-between border-b border-[#d8e0ea] pb-4">
        <div className="flex items-center gap-2 text-[#862fe7] font-semibold text-sm">
          <HelpCircle className="w-4 h-4" />
          Pregunta {currentQuestion + 1} de {questions.length}
        </div>
        <span className="text-xs font-mono bg-[#ebdafd] text-[#862fe7] px-2.5 py-1 rounded-md font-semibold">
          Progreso: {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
        </span>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-[#111827] leading-snug">
          {q.question}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {q.options.map((option, idx) => {
          const isSelected = selectedOption === idx
          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              className={`p-4 text-left rounded-xl border text-sm transition-all cursor-pointer flex items-center justify-between ${
                isSelected
                  ? 'border-[#862fe7] bg-[#faf5ff] text-[#862fe7] font-medium shadow-sm'
                  : 'border-[#d8e0ea] bg-white text-[#3f4654] hover:border-[#ad6df4] hover:bg-[#f1f5f9]'
              }`}
            >
              <span>{option}</span>
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  isSelected ? 'border-[#862fe7] bg-[#862fe7]' : 'border-[#d8e0ea]'
                }`}
              >
                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-between border-t border-[#d8e0ea] pt-4">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="px-4 py-2 text-sm text-[#6b7589] hover:text-[#111827] disabled:opacity-40 disabled:cursor-not-allowed font-medium"
        >
          Anterior
        </button>

        <button
          onClick={handleNext}
          disabled={selectedOption === undefined}
          className="px-5 py-2.5 bg-[#862fe7] text-white text-sm font-semibold rounded-xl hover:bg-[#5f259e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm cursor-pointer"
        >
          {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  )
}
