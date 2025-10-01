import Image from "next/image"

const footerLinks = {
  column1: [
    { href: "/model", label: "KW Income Model" },
    { href: "/events", label: "Events" },
    { href: "/press", label: "Press" },
    { href: "/about-us", label: "About Us" },
  ],
  column2: [
    { href: "/tools", label: "Tools & Resources" },
    { href: "/contact", label: "Contact" },
    { href: "/join", label: "Join KW Singapore" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-black text-white">
      <div className="container mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <Image
            src="/kwsingapore-logo.webp"
            alt="KW Logo"
            width={32}
            height={16}
            loading="lazy"
            className="w-20 h-auto"
          />
          <p className="text-sm text-gray-300">
            Realtors to Real Estate Entrepreneurs
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-300">
            <div className="space-y-2">
              {footerLinks.column1.map((link) => (
                <span key={link.href} className="block">
                  {link.label}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              {footerLinks.column2.map((link) => (
                <span key={link.href} className="block">
                  {link.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Contact</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <a href="mailto:hello@kwsingapore.com" className="hover:text-white">
                Email: hello@kwsingapore.com
              </a>
            </p>
            <p>
              <a href="https://wa.me/6587996569" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Phone: +65 8799 6569
              </a>
            </p>
            <p>
              <a rel="noopener noreferrer" className="hover:text-white">
                Address: Oxley Bizhub 2, 62 Ubi Road 1 #01-19 <br /> Singapore 408734
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-6 mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} KW Singapore Real Estate Pte. Ltd. | All rights reserved.</p>
        <p className="mt-1">CEA License Number: L3011034Z</p>
      </div>
    </footer>
  )
}
