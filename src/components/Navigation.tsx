'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const navItems = [
  { href: '/', label: 'Hem' },
  { href: '/guider', label: 'Guider' },
  { href: '/forskning', label: 'Forskning' },
  { href: '/risker', label: 'Risker' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-xl text-gray-600 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/guider"
              className="ml-4 px-5 py-2.5 bg-coral-400 text-white rounded-xl font-semibold hover:bg-coral-500 transition-colors shadow-sm hover:shadow-md"
            >
              Kom igång
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-sand-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sand-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-600 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/guider"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-5 py-3 bg-coral-400 text-white rounded-xl font-semibold hover:bg-coral-500 transition-colors text-center"
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
