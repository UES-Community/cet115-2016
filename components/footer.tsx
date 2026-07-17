import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="flex items-center gap-2" aria-label="CET115 inicio">
              <div className="w-8 h-8 rounded-lg bg-[#862fe7] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-display font-semibold text-lg tracking-tight">
                CET<span className="text-[#ad6df4]">115</span>-2016
              </span>
            </Link>
            <p className="font-sans text-sm text-[#6b7589] leading-relaxed">
              Plataforma educativa para la materia Comercio Electrónico.
              Categoría: Gestión, Finanzas y Administración.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Navegación del pie de página">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#6b7589] mb-3">
              Unidades
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <li key={n}>
                  <Link
                    href={`/unidad/${n}`}
                    className="font-sans text-sm text-[#d8e0ea] hover:text-[#ad6df4] transition-colors"
                  >
                    Unidad {n === 1 ? 'I' : n === 2 ? 'II' : n === 3 ? 'III' : n === 4 ? 'IV' : n === 5 ? 'V' : 'VI'}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-[#3f4654] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-xs text-[#6b7589]">
            © 2026 CET115-2016 · Comercio Electrónico
          </p>
          <p className="font-sans text-xs text-[#6b7589]">
            Gestión · Finanzas · Administración
          </p>
        </div>
      </div>
    </footer>
  )
}
