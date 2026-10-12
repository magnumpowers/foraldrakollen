import Link from 'next/link'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-paper-dark border-t border-rule mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Logo size="lg" />
            </Link>
            <p className="text-warm-500 max-w-md leading-relaxed">
              Guider för föräldrar som vill hjälpa sina barn att vara trygga på nätet.
              Gratis och utan reklam.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-navy-900">Guider</h3>
            <ul className="space-y-3">
              {[
                { href: '/guider#skarmtid', label: 'Skärmtid' },
                { href: '/guider#algoritmer', label: 'Algoritmer' },
                { href: '/guider#meddelanden', label: 'Okända kontakter' },
                { href: '/guider#plats', label: 'Platstjänster' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-warm-500 hover:text-navy-700 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-navy-900">Resurser</h3>
            <ul className="space-y-3">
              {[
                { href: '/men-alla-andra', label: '„Men alla andra…”' },
                { href: '/forskning', label: 'Forskning' },
                { href: '/risker', label: 'Risker online' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-warm-500 hover:text-navy-700 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://mediemyndigheten.se" target="_blank" rel="noopener noreferrer" className="text-warm-500 hover:text-navy-700 transition-colors">
                  Mediemyndigheten
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-rule">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-400 text-sm">
              &copy; {new Date().getFullYear()} Föräldrakollen
            </p>
            <p className="text-warm-500 text-sm">
              Ett projekt av Magnus Paues och Fredrik Hanefalk, <a href="https://veckans.ai" className="underline underline-offset-2 hover:text-ink">Veckans AI</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
