import Link from 'next/link'
import { Heart } from 'lucide-react'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-primary-800 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-2.5">
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M24 4L6 12V22C6 33.1 13.68 43.32 24 46C34.32 43.32 42 33.1 42 22V12L24 4Z"
                    fill="#5AABAB"
                  />
                  <path
                    d="M24 7L9 13.5V22C9 31.39 15.42 39.94 24 42.7C32.58 39.94 39 31.39 39 22V13.5L24 7Z"
                    fill="white"
                    opacity="0.2"
                  />
                  <circle cx="20" cy="18" r="4" fill="white" />
                  <path
                    d="M14 32C14 27.5817 17.134 24 21 24H19C22.866 24 26 27.5817 26 32V34H14V32Z"
                    fill="white"
                  />
                  <circle cx="30" cy="21" r="3" fill="white" opacity="0.9" />
                  <path
                    d="M25 34C25 30.6863 27.2386 28 30 28C32.7614 28 35 30.6863 35 34V35H25V34Z"
                    fill="white"
                    opacity="0.9"
                  />
                  <path
                    d="M34 12L36 14L40 10"
                    stroke="#E8836B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-display font-bold text-xl text-white">
                  Föräldrakollen
                </span>
              </div>
            </Link>
            <p className="text-primary-200 max-w-md">
              Vi hjälper föräldrar att skydda sina barn på nätet med forskningsbaserade
              guider och praktiska verktyg. Tillsammans skapar vi en tryggare digital värld.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Guider</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guider#skarmtid" className="text-primary-200 hover:text-white transition-colors">
                  Skärmtid
                </Link>
              </li>
              <li>
                <Link href="/guider#algoritmer" className="text-primary-200 hover:text-white transition-colors">
                  Algoritmer
                </Link>
              </li>
              <li>
                <Link href="/guider#meddelanden" className="text-primary-200 hover:text-white transition-colors">
                  Okända kontakter
                </Link>
              </li>
              <li>
                <Link href="/guider#plats" className="text-primary-200 hover:text-white transition-colors">
                  Platstjänster
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Resurser</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/forskning" className="text-primary-200 hover:text-white transition-colors">
                  Forskning
                </Link>
              </li>
              <li>
                <Link href="/risker" className="text-primary-200 hover:text-white transition-colors">
                  Risker online
                </Link>
              </li>
              <li>
                <a
                  href="https://mediemyndigheten.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Mediemyndigheten
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-300 text-sm">
              © {new Date().getFullYear()} Föräldrakollen. Alla rättigheter förbehållna.
            </p>
            <p className="text-primary-300 text-sm flex items-center gap-1">
              Gjord med <Heart className="w-4 h-4 text-coral-400" /> för svenska föräldrar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
