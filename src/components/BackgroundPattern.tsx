const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Tan/beige glow boxes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 opacity-6 rounded-3xl blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-200 opacity-4 rounded-3xl blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-100 opacity-3 rounded-3xl blur-3xl" />
      
      <svg
        className="w-full h-full absolute inset-0"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#222831" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1a1f26" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#dfd0b8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#222831" stopOpacity="0.03" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main background */}
        <rect width="1200" height="800" fill="url(#grad1)" />

        {/* Top-left dark box cluster */}
        <g opacity="0.15">
          <rect x="20" y="20" width="180" height="180" fill="#dfd0b8" fillOpacity="0.1" stroke="#dfd0b8" strokeWidth="2" />
          <rect x="50" y="50" width="140" height="140" fill="#dfd0b8" fillOpacity="0.06" stroke="#dfd0b8" strokeWidth="1.5" />
          <rect x="75" y="75" width="100" height="100" fill="#948979" fillOpacity="0.08" stroke="#dfd0b8" strokeWidth="1" />
        </g>

        {/* Top-right dark box */}
        <g opacity="0.12">
          <rect x="950" y="40" width="220" height="150" fill="#dfd0b8" fillOpacity="0.08" stroke="#dfd0b8" strokeWidth="2" />
          <line x1="1000" y1="40" x2="1000" y2="190" stroke="#dfd0b8" strokeWidth="1" opacity="0.7" />
          <line x1="1050" y1="40" x2="1050" y2="190" stroke="#948979" strokeWidth="1" opacity="0.5" />
        </g>

        {/* Center geometric dark structure */}
        <g opacity="0.13" filter="url(#glow)">
          <rect x="480" y="280" width="240" height="240" fill="none" stroke="#dfd0b8" strokeWidth="2" />
          <rect x="510" y="310" width="180" height="180" fill="none" stroke="#948979" strokeWidth="1.5" />
          <line x1="480" y1="400" x2="720" y2="400" stroke="#dfd0b8" strokeWidth="2" opacity="0.8" />
          <line x1="600" y1="280" x2="600" y2="520" stroke="#dfd0b8" strokeWidth="1.5" opacity="0.7" />
        </g>

        {/* Bottom-left dark boxes */}
        <g opacity="0.14">
          <rect x="10" y="620" width="150" height="150" fill="#dfd0b8" fillOpacity="0.08" stroke="#dfd0b8" strokeWidth="2" />
          <rect x="40" y="650" width="100" height="100" fill="#948979" fillOpacity="0.06" stroke="#dfd0b8" strokeWidth="1" />
          <rect x="60" y="670" width="60" height="60" fill="none" stroke="#dfd0b8" strokeWidth="1.5" />
        </g>

        {/* Bottom-right dark box */}
        <g opacity="0.12">
          <rect x="1000" y="600" width="190" height="190" fill="#dfd0b8" fillOpacity="0.06" stroke="#dfd0b8" strokeWidth="2" />
          <circle cx="1095" cy="695" r="50" fill="none" stroke="#dfd0b8" strokeWidth="1.5" opacity="0.7" />
        </g>

        {/* Accent lines throughout */}
        <g opacity="0.1" stroke="#948979" strokeWidth="1.5">
          <line x1="300" y1="0" x2="300" y2="250" />
          <line x1="900" y1="550" x2="900" y2="800" />
          <line x1="0" y1="350" x2="180" y2="350" />
          <line x1="1100" y1="250" x2="1200" y2="250" />
        </g>

        {/* Tan accent lines */}
        <g opacity="0.12" stroke="#dfd0b8" strokeWidth="1">
          <line x1="200" y1="100" x2="350" y2="200" />
          <line x1="800" y1="150" x2="950" y2="280" />
          <line x1="150" y1="700" x2="300" y2="750" />
        </g>

        {/* Radial elements */}
        <circle cx="150" cy="450" r="40" fill="none" stroke="#948979" strokeWidth="1.5" opacity="0.1" />
        <circle cx="160" cy="460" r="25" fill="none" stroke="#dfd0b8" strokeWidth="1" opacity="0.08" />

        <circle cx="1050" cy="150" r="50" fill="none" stroke="#948979" strokeWidth="1.5" opacity="0.12" />
        <circle cx="1070" cy="170" r="30" fill="none" stroke="#dfd0b8" strokeWidth="1" opacity="0.09" />
      </svg>
    </div>
  );
};
};

export default BackgroundPattern;
