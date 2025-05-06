const Logo = () => {
  return (
    <div className="relative group">
      <svg
        width="100"
        height="40"
        viewBox="0 0 100 40"
        className="transition-all duration-300"
      >
        {/* Left Angle Bracket < */}
        <path
          d="M15,10 L5,20 L15,30"
          stroke="#64ffda"
          strokeWidth="2.5"
          fill="none"
          className="transition-all duration-300"
        />

        {/* First C */}
        <path
          d="M32,8 C25,8 20,13 20,20 C20,27 25,32 32,32 C37,32 41,29 43,25"
          stroke="#8892b0"
          strokeWidth="3"
          fill="none"
          className="transition-all duration-300 group-hover:stroke-darkerSlate"
        />

        {/* Second C */}
        <path
          d="M60,8 C53,8 48,13 48,20 C48,27 53,32 60,32 C65,32 69,29 71,25"
          stroke="#8892b0"
          strokeWidth="3"
          fill="none"
          className="transition-all duration-300 group-hover:stroke-darkerSlate"
        />

        {/* Vertical Bar | (with animation) */}
        <path
          d="M78,10 L78,30"
          stroke="#64ffda"
          strokeWidth="2.5"
          className="transition-all duration-300 animate-pulse"
        />

        {/* Right Angle Bracket > */}
        <path
          d="M85,10 L95,20 L85,30"
          stroke="#64ffda"
          strokeWidth="2.5"
          fill="none"
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
};

export default Logo;
