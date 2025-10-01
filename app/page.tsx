import { NewLaunchesHero } from "@/components/new-launches-hero"
import { NewLaunchesCatalog } from "@/components/new-launches-catalog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <NewLaunchesHero />
      <NewLaunchesCatalog />
      <Footer />
    </main>
    
  )
}
