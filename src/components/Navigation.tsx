'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const navItems = [
  { href: '/', label: 'Hem' },
  { href: '/guider', label: 'Guider' },
  { href: '/forskning', label: 'Forskning' },
  { href: '/risker', label: 'Risker' },
  { href: '/om', label: 'Om oss' },
  { href: '/men-alla-andra', label: '„Men alla andra…”' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-paper/95 backdrop-blur sticky top-0 z-50 border-b border-rule">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="group">
            <Logo size="lg" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium underline-offset-[10px] decoration-2 transition-colors ${
                  pathname === item.href
                    ? 'text-ink underline decoration-coral-500'
                    : 'text-warm-600 hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/guider"
              className="ml-4 px-5 py-2.5 bg-ink text-paper rounded-md text-sm font-semibold hover:bg-navy-700 transition-colors"
            >
              Kom igång
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-ink hover:bg-paper-dark"
            aria-label={isOpen ? "Stäng menyn" : "Öppna menyn"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-rule">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-2xl font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-navy-700 bg-navy-50 font-semibold'
                      : 'text-warm-500 hover:text-navy-700 hover:bg-warm-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/guider"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-5 py-3 bg-ink text-paper rounded-md font-semibold hover:bg-navy-700 transition-colors text-center"
              >
                Kom igång
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
