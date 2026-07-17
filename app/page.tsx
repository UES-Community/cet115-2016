import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { UnitsGrid } from '@/components/units-grid'
import { FeaturesSection } from '@/components/features-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <UnitsGrid />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
