const stats = [
  { value: '6', label: 'Unidades Temáticas', suffix: '' },
  { value: '5', label: 'Librerías Especializadas', suffix: '+' },
  { value: '48', label: 'Horas de Aprendizaje', suffix: 'h' },
  { value: '100', label: 'Ejercicios Prácticos', suffix: '+' },
]

export function StatsSection() {
  return (
    <section className="bg-white py-16 border-y border-[#d8e0ea]">
      <div className="mx-auto max-w-[1200px] px-6">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1">
              <dt className="sr-only">{stat.label}</dt>
              <dd
                className="font-display font-semibold text-[#862fe7]"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.025em' }}
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                {stat.value}
                <span className="text-[#ad6df4]">{stat.suffix}</span>
              </dd>
              <p className="font-sans text-sm text-[#6b7589] font-medium">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
