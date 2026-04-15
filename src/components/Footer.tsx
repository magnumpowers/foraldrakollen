import Link from 'next/link'
import { Heart } from 'lucide-react'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-navy-800 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Logo size="lg" />
            </Link>
            <p className="text-navy-200 max-w-md leading-relaxed">
              Vi hjälper föräldrar att skydda sina barn på nätet med forskningsbaserade
              guider och praktiska verktyg. Tillsammans skapar vi en tryggare digital värld.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Guider</h3>
            <ul className="space-y-3">
              {[
                { href: '/guider#skarmtid', label: 'Skärmtid' },
                { href: '/guider#algoritmer', label: 'Algoritmer' },
                { href: '/guider#meddelanden', label: 'Okända kontakter' },
                { href: '/guider#plats', label: 'Platstjänster' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Resurser</h3>
            <ul className="space-y-3">
              {[
                { href: '/men-alla-andra', label: '"Men alla andra..."' },
                { href: '/forskning', label: 'Forskning' },
                { href: '/risker', label: 'Risker online' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://mediemyndigheten.se" target="_blank" rel="noopener noreferrer" className="text-navy-300 hover:text-white transition-colors">
                  Mediemyndigheten
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm">
              &copy; {new Date().getFullYear()} Föräldrakollen
            </p>
            <p className="text-navy-400 text-sm flex items-center gap-1.5">
              Gjord med <Heart className="w-4 h-4 text-coral-400" /> för svenska föräldrar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
