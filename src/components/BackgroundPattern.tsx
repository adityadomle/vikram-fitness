const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-gradient-to-br from-[#3E5F44] via-[#3E5F44] to-[#2d4532]">
      {/* Subtle light green glow elements - minimal for mobile */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#93DA97] opacity-5 rounded-3xl blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-[#E8FFD7] opacity-4 rounded-3xl blur-3xl" />
      <div className="hidden md:block absolute top-1/2 left-1/3 w-72 h-72 bg-[#5E936C] opacity-3 rounded-3xl blur-3xl" />

      <svg
        className="w-full h-full absolute inset-0"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3E5F44" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#2d4532" stopOpacity="0.02" />
          </linearGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93DA97" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3E5F44" stopOpacity="0.02" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main background overlay */}
        <rect width="1200" height="800" fill="url(#grad1)" />

        {/* Top-left minimalist box cluster - simplified for mobile */}
        <g opacity="0.12" className="box-cluster">
          <rect x="20" y="20" width="120" height="120" fill="none" stroke="#93DA97" strokeWidth="1.5" />
          <rect x="50" y="50" width="80" height="80" fill="none" stroke="#E8FFD7" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Top-right box - hidden on mobile in effect due to simplicity */}
        <g opacity="0.1">
          <rect x="1000" y="40" width="160" height="100" fill="none" stroke="#93DA97" strokeWidth="1.5" />
          <line x1="1040" y1="40" x2="1040" y2="140" stroke="#E8FFD7" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Center geometric structure - minimalist */}
        <g opacity="0.08" filter="url(#glow)">
          <rect x="500" y="320" width="200" height="200" fill="none" stroke="#93DA97" strokeWidth="1.5" />
          <rect x="530" y="350" width="140" height="140" fill="none" stroke="#5E936C" strokeWidth="1" />
          <line x1="500" y1="420" x2="700" y2="420" stroke="#E8FFD7" strokeWidth="1.2" opacity="0.6" />
          <line x1="600" y1="320" x2="600" y2="520" stroke="#E8FFD7" strokeWidth="1" opacity="0.5" />
        </g>

        {/* Bottom-left boxes - minimal */}
        <g opacity="0.1">
          <rect x="10" y="660" width="100" height="100" fill="none" stroke="#93DA97" strokeWidth="1.5" />
          <rect x="30" y="680" width="60" height="60" fill="none" stroke="#E8FFD7" strokeWidth="1" />
        </g>

        {/* Bottom-right box with circle - subtle */}
        <g opacity="0.09">
          <rect x="1040" y="620" width="140" height="140" fill="none" stroke="#93DA97" strokeWidth="1.5" />
          <circle cx="1110" cy="690" r="35" fill="none" stroke="#E8FFD7" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Minimal accent lines - reduced for cleaner look */}
        <g opacity="0.06" stroke="#93DA97" strokeWidth="1">
          <line x1="300" y1="0" x2="300" y2="200" className="hidden md:block" />
          <line x1="900" y1="600" x2="900" y2="800" className="hidden md:block" />
          <line x1="0" y1="400" x2="120" y2="400" />
          <line x1="1100" y1="200" x2="1200" y2="200" />
        </g>

        {/* Light accent lines - very subtle */}
        <g opacity="0.08" stroke="#E8FFD7" strokeWidth="0.8">
          <line x1="200" y1="150" x2="280" y2="220" className="hidden lg:block" />
          <line x1="850" y1="180" x2="920" y2="260" className="hidden lg:block" />
        </g>

        {/* Minimalist radial elements */}
        <circle cx="150" cy="450" r="30" fill="none" stroke="#93DA97" strokeWidth="1" opacity="0.08" className="hidden md:block" />
        <circle cx="160" cy="460" r="18" fill="none" stroke="#E8FFD7" strokeWidth="0.8" opacity="0.06" className="hidden md:block" />

        <circle cx="1050" cy="150" r="35" fill="none" stroke="#93DA97" strokeWidth="1" opacity="0.09" className="hidden lg:block" />
        <circle cx="1065" cy="165" r="20" fill="none" stroke="#E8FFD7" strokeWidth="0.8" opacity="0.06" className="hidden lg:block" />
      </svg>
    </div>
  );
};

export default BackgroundPattern;
