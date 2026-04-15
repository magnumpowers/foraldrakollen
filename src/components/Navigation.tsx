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
  { href: '/men-alla-andra', label: '"Men alla andra..."' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-warm-100">
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
              className="ml-3 px-6 py-2.5 bg-navy-800 text-white rounded-full text-sm font-semibold hover:bg-navy-700 transition-all"
            >
              Kom igång
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-warm-500 hover:bg-warm-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-warm-100">
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
                className="mt-2 px-5 py-3 bg-navy-800 text-white rounded-2xl font-semibold hover:bg-navy-700 transition-colors text-center"
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
