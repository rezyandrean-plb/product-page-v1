import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

const newLaunches = [
  {
    id: 1,
    title: "The Residences at Marina Bay",
    summary:
      "Ultra-luxury waterfront living with panoramic city views and world-class amenities in the heart of Singapore's financial district.",
    image: "/luxury-singapore-marina-bay-residential-tower.jpg",
    launchDate: "March 2024",
    previewDate: "February 15, 2024",
    location: "Marina Bay",
    status: "Preview Available",
  },
  {
    id: 2,
    title: "Orchard Heights Collection",
    summary:
      "Sophisticated urban residences featuring contemporary design and premium finishes, steps away from Singapore's premier shopping district.",
    image: "/modern-singapore-orchard-road-luxury-apartments.jpg",
    launchDate: "April 2024",
    previewDate: "March 8, 2024",
    location: "Orchard Road",
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "Sentosa Cove Villas",
    summary:
      "Exclusive waterfront villas offering resort-style living with private marina access and unobstructed sea views.",
    image: "/sentosa-cove-luxury-waterfront-villas-singapore.jpg",
    launchDate: "May 2024",
    previewDate: "April 12, 2024",
    location: "Sentosa Cove",
    status: "Registration Open",
  },
  {
    id: 4,
    title: "Bukit Timah Garden Estates",
    summary:
      "Tranquil landed properties surrounded by lush greenery, combining privacy and accessibility in Singapore's prestigious district.",
    image: "/bukit-timah-luxury-landed-property-garden-singapor.jpg",
    launchDate: "June 2024",
    previewDate: "May 20, 2024",
    location: "Bukit Timah",
    status: "Early Interest",
  },
]

export function NewLaunchesCatalog() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-12 mb-16">
          {newLaunches.map((launch, index) => (
            <div
              key={launch.id}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 min-h-[400px] group hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={launch.image || "/placeholder.svg?height=400&width=1200"}
                  alt={launch.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center min-h-[400px]">
                <div className="flex-1 p-12 lg:p-16">
                  <div className="max-w-2xl">
                    {/* Status Badge */}
                    <div className="mb-6">
                      <span
                        className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full ${
                          launch.status === "Preview Available" || launch.status === "Registration Open"
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/10 text-white border border-white/20"
                        }`}
                      >
                        {launch.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight leading-tight">
                      {launch.title}
                    </h2>

                    {/* Location */}
                    <div className="flex items-center text-white/80 mb-6">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">{launch.location}</span>
                    </div>

                    {/* Summary */}
                    <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">{launch.summary}</p>

                    {/* Dates */}
                    <div className="flex flex-col sm:flex-row gap-6 mb-8">
                      <div>
                        <span className="text-white/60 text-sm block mb-1">Preview Date</span>
                        <span className="text-white font-medium text-lg">{launch.previewDate}</span>
                      </div>
                      <div>
                        <span className="text-white/60 text-sm block mb-1">Launch Date</span>
                        <span className="text-white font-medium text-lg">{launch.launchDate}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-full border-2 border-transparent hover:border-primary/20 transition-all duration-300"
                    >
                      Register Interest
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Right side - Featured property image (visible on larger screens) */}
                <div className="hidden lg:block w-96 h-full relative">
                  <div className="absolute inset-4 rounded-xl overflow-hidden">
                    <img
                      src={launch.image || "/placeholder.svg?height=400&width=384"}
                      alt={launch.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-card border border-border rounded-lg">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground mb-1">Explore More Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Discover additional luxury developments and investment opportunities
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
              View All Properties
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
