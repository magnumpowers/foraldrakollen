interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
}

const sizes = {
  sm: 28,
  md: 40,
  lg: 52,
  xl: 64,
  hero: 80,
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const h = sizes[size]
  return (
    <div className={`flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Föräldrakollen.nu"
        height={h}
        className="flex-shrink-0"
        style={{ height: h, width: 'auto' }}
      />
    </div>
  )
}
