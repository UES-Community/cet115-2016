import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { UnitDetailContent } from '@/components/unit-detail-content'
import { unitsData } from '@/lib/units-data'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return ['1', '2', '3', '4', '5', '6', '7'].map((id) => ({ id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const unit = unitsData[id]
  if (!unit) return {}
  return {
    title: `Unidad ${unit.romanNumeral}: ${unit.title} — CET115-2016`,
    description: unit.description,
  }
}

export default async function UnitPage({ params }: Props) {
  const { id } = await params
  const unit = unitsData[id]
  if (!unit) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <UnitDetailContent unit={unit} />
      </main>
      <Footer />
    </div>
  )
}
