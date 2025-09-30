import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">KW</div>
              <div className="text-sm text-muted-foreground">SINGAPORE</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                KW Income Model
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Press
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Tools & Resources
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            Join KW Singapore
          </Button>
        </nav>
      </div>
    </header>
  )
}
