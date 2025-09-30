"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/model", label: "KW Income Model" },
  { href: "/events", label: "Events" },
  { href: "/press", label: "Press" },
  { href: "/about-us", label: "About Us" },
  { href: "/tools", label: "Tools & Resources" },
  { href: "/contact", label: "Contact" },
]

const joinNavItem = { href: "/join", label: "Join KW Singapore" }

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/kwsingapore-logo.webp"
            alt="KW Logo"
            width={150}
            height={50}
            priority
            loading="eager"
            fetchPriority="high"
            className="h-8 w-auto lg:h-10"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 lg:gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              id="nav-link"
              className="text-sm font-semibold transition-colors duration-300 rounded px-2 py-2 relative group text-white"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href={joinNavItem.href}
            id="nav-link"
            className="text-sm font-semibold transition-colors duration-300 rounded px-3 py-2 bg-red-600 text-white hover:bg-red-700"
          >
            {joinNavItem.label}
          </Link>
        </nav>
        {/* Mobile Toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          isMobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-6 pb-4 pt-2 bg-black/95 backdrop-blur">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-semibold text-white/90 hover:text-white px-2 py-2 rounded"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={joinNavItem.href}
              className="mt-2 inline-flex justify-center items-center text-sm font-semibold rounded px-3 py-2 bg-red-600 text-white hover:bg-red-700"
              onClick={() => setIsMobileOpen(false)}
            >
              {joinNavItem.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
