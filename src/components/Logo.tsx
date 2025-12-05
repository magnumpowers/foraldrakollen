interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 56, text: 'text-2xl' },
  }

  const { icon, text } = sizes[size]

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo Icon - Shield with parent and child silhouette */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Shield background */}
        <path
          d="M24 4L6 12V22C6 33.1 13.68 43.32 24 46C34.32 43.32 42 33.1 42 22V12L24 4Z"
          fill="url(#shield-gradient)"
        />

        {/* Inner shield highlight */}
        <path
          d="M24 7L9 13.5V22C9 31.39 15.42 39.94 24 42.7C32.58 39.94 39 31.39 39 22V13.5L24 7Z"
          fill="url(#inner-gradient)"
          opacity="0.3"
        />

        {/* Parent figure */}
        <circle cx="20" cy="18" r="4" fill="white" />
        <path
          d="M14 32C14 27.5817 17.134 24 21 24H19C22.866 24 26 27.5817 26 32V34H14V32Z"
          fill="white"
        />

        {/* Child figure */}
        <circle cx="30" cy="21" r="3" fill="white" opacity="0.9" />
        <path
          d="M25 34C25 30.6863 27.2386 28 30 28C32.7614 28 35 30.6863 35 34V35H25V34Z"
          fill="white"
          opacity="0.9"
        />

        {/* Connection arc (representing protection/oversight) */}
        <path
          d="M22 17C22 17 25 14 30 16"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Checkmark accent */}
        <path
          d="M34 12L36 14L40 10"
          stroke="#E8836B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <defs>
          <linearGradient id="shield-gradient" x1="24" y1="4" x2="24" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5AABAB" />
            <stop offset="1" stopColor="#3D8585" />
          </linearGradient>
          <linearGradient id="inner-gradient" x1="24" y1="7" x2="24" y2="42.7" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      {showText && (
        <span className={`font-display font-bold ${text} text-primary-700`}>
          Föräldrakollen
        </span>
      )}
    </div>
  )
}

// Standalone icon for favicon etc
export function LogoIcon({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4L6 12V22C6 33.1 13.68 43.32 24 46C34.32 43.32 42 33.1 42 22V12L24 4Z"
        fill="url(#shield-gradient-icon)"
      />
      <path
        d="M24 7L9 13.5V22C9 31.39 15.42 39.94 24 42.7C32.58 39.94 39 31.39 39 22V13.5L24 7Z"
        fill="url(#inner-gradient-icon)"
        opacity="0.3"
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
        d="M22 17C22 17 25 14 30 16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M34 12L36 14L40 10"
        stroke="#E8836B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="shield-gradient-icon" x1="24" y1="4" x2="24" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5AABAB" />
          <stop offset="1" stopColor="#3D8585" />
        </linearGradient>
        <linearGradient id="inner-gradient-icon" x1="24" y1="7" x2="24" y2="42.7" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
