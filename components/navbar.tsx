'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, BookOpen, Sparkles, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const units = [
  { label: 'Unidad I', href: '/unidad/1', description: 'Fundamentos del Comercio Electrónico' },
  { label: 'Unidad II', href: '/unidad/2', description: 'Modelos de Negocio Digital' },
  { label: 'Unidad III', href: '/unidad/3', description: 'Plataformas y Tecnología' },
  { label: 'Unidad IV', href: '/unidad/4', description: 'Marketing y Ventas Online' },
  { label: 'Unidad V', href: '/unidad/5', description: 'Finanzas y Pagos Digitales' },
  { label: 'Unidad VI', href: '/unidad/6', description: 'Logística y Operaciones' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-sm border-b border-[#d8e0ea]">
      <nav
        className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between gap-8"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 group"
          aria-label="CET115 inicio"
        >
          <div className="w-8 h-8 rounded-lg bg-[#862fe7] flex items-center justify-center shadow-[rgba(134,47,231,0.3)_0px_4px_12px]">
            <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
          </div>
          <span className="font-display font-semibold text-[#111827] text-lg tracking-tight leading-none">
            CET<span className="text-[#862fe7]">115</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {units.map((unit) => (
            <li key={unit.href}>
              <Link
                href={unit.href}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm font-medium font-sans transition-colors',
                  pathname === unit.href
                    ? 'text-[#862fe7] bg-[#ebdafd]'
                    : 'text-[#3f4654] hover:text-[#862fe7] hover:bg-[#f1f5f9]'
                )}
              >
                {unit.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/recursos"
            className="flex items-center gap-1.5 text-sm font-medium text-[#3f4654] hover:text-[#862fe7] transition-colors px-3 py-1.5"
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            Recursos
          </Link>
          <Link
            href="/simulador"
            className="flex items-center gap-1.5 text-sm font-medium text-[#3f4654] hover:text-[#862fe7] transition-colors px-3 py-1.5"
          >
            <TrendingUp className="w-4 h-4" aria-hidden="true" />
            Simulador
          </Link>
          <Link
            href="/unidad/1"
            className="flex items-center gap-1.5 bg-[#862fe7] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#5f259e] transition-colors shadow-[rgba(11,61,121,0.16)_0px_0px_0px_1px_inset]"
          >
            Comenzar
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-[#3f4654] hover:bg-[#f1f5f9] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#d8e0ea] bg-white">
          <ul className="px-4 py-3 flex flex-col gap-1" role="list">
            {units.map((unit) => (
              <li key={unit.href}>
                <Link
                  href={unit.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex flex-col px-4 py-3 rounded-xl transition-colors',
                    pathname === unit.href
                      ? 'bg-[#ebdafd] text-[#862fe7]'
                      : 'hover:bg-[#f1f5f9] text-[#111827]'
                  )}
                >
                  <span className="text-sm font-semibold">{unit.label}</span>
                  <span className="text-xs text-[#6b7589] mt-0.5">{unit.description}</span>
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-[#d8e0ea] mt-1 flex flex-col gap-1">
              <Link
                href="/recursos"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-[#3f4654] hover:bg-[#f1f5f9] transition-colors"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Recursos
              </Link>
              <Link
                href="/simulador"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-[#3f4654] hover:bg-[#f1f5f9] transition-colors"
              >
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                Simulador Financiero
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
