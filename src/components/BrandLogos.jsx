import React from 'react';

export function BrandLogo({ type, className = "w-28 h-28", size = 100 }) {
  switch (type) {
    case 'nike':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
          <path d="M21.707 5.293c-.225-.225-.561-.29-.854-.167L3.483 12.355c-.347.146-.532.529-.441.897.091.368.423.633.803.642 3.123.076 7.424 1.157 11.238 4.793 2.112 2.013 3.659 4.316 4.606 6.864.088.238.315.395.568.395.051 0 .102-.006.153-.02.301-.081.503-.357.493-.67-.202-6.271-2.91-11.458-7.832-14.996 4.721 1.053 8.356-.37 9.176-.73.298-.13.484-.428.455-.753-.028-.325-.251-.595-.572-.674-.691-.17-1.121-.24-1.226-.255 1.545-.589 2.062-1.393 2.083-1.429.173-.298.113-.678-.112-.903z" />
        </svg>
      );
    case 'apple':
      return (
        <svg viewBox="0 0 170 170" width={size} height={size} fill="currentColor" className={className}>
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.75-11.64-14.14-5.33-8.38-9.61-18.04-12.83-28.97-3.23-10.93-4.84-21.67-4.84-32.22 0-14.48 3.59-26.68 10.78-36.6 7.18-9.92 16.38-14.97 27.6-15.15 4.89 0 10.37 1.34 16.44 4.01 6.07 2.68 10.05 4.08 11.95 4.22 1.52-.27 5.76-1.74 12.72-4.41 6.96-2.67 12.63-3.88 17.02-3.62 12.28.64 22.18 5.3 29.7 13.98-10.76 6.53-16.03 15.54-15.82 27.04.22 9.04 3.75 16.63 10.6 22.78 6.85 6.15 14.88 9.57 24.08 10.27-2.17 6.42-4.84 12.8-8.01 19.14zM119.22 33.15c0-6.74 2.45-13.1 7.35-19.07 4.9-5.98 11.03-9.98 18.39-12.01.22 1.41.33 2.72.33 3.91 0 6.63-2.61 13.15-7.83 19.57-5.22 6.41-11.41 10.22-18.57 11.41-.22-1.3-.4-2.57-.4-3.81z" />
        </svg>
      );
    case 'mcdonalds':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <path d="M10 88C10 50 25 15 40 15C48 15 50 35 50 50C50 35 52 15 60 15C75 15 90 50 90 88H76C76 56 68 30 60 30C52 30 50 60 50 78H46C46 60 44 30 36 30C28 30 24 56 24 88H10Z" fill="#FFC72C" />
        </svg>
      );
    case 'starbucks':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <circle cx="50" cy="50" r="46" fill="#00704A" />
          <circle cx="50" cy="50" r="41" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M50 22L53 30H61L54.5 35L57 43L50 38L43 43L45.5 35L39 30H47Z" fill="#FFFFFF" />
          <path d="M42 48C42 48 46 54 50 54C54 54 58 48 58 48C58 48 62 58 50 66C38 58 42 48 42 48Z" fill="#FFFFFF" />
          <path d="M28 50C28 66 38 78 50 78C62 78 72 66 72 50C68 56 60 62 50 62C40 62 32 56 28 50Z" fill="#FFFFFF" />
          <circle cx="45" cy="50" r="2" fill="#00704A" />
          <circle cx="55" cy="50" r="2" fill="#00704A" />
        </svg>
      );
    case 'spotify':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <circle cx="50" cy="50" r="48" fill="#1DB954" />
          <path d="M28 38C44 33 64 34 74 40" stroke="#121212" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M31 49C44 45 61 46 70 51" stroke="#121212" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M33 60C43 57 56 57 65 62" stroke="#121212" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'netflix':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <path d="M24 15H36V85H24Z" fill="#B81D24" />
          <path d="M64 15H76V85H64Z" fill="#B81D24" />
          <path d="M24 15L66 85H76L34 15H24Z" fill="#E50914" />
        </svg>
      );
    case 'google':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <path d="M92 51C92 48 91.7 45.4 91.2 43H50V58H73.5C72.5 63.3 69.5 67.8 65 70.8V81.4H79C87.2 73.8 92 63.4 92 51Z" fill="#4285F4" />
          <path d="M50 93.7C61.8 93.7 71.7 89.8 79 81.4L65 70.8C61.2 73.4 56.1 75 50 75C38.6 75 28.9 67.3 25.5 56.9H11.1V68C18.3 82.3 33 93.7 50 93.7Z" fill="#34A853" />
          <path d="M25.5 56.9C24.6 54.3 24.1 51.5 24.1 48.6C24.1 45.7 24.6 42.9 25.5 40.3V29.2H11.1C8.2 35 6.6 41.6 6.6 48.6C6.6 55.6 8.2 62.2 11.1 68L25.5 56.9Z" fill="#FBBC05" />
          <path d="M50 22.2C56.4 22.2 62.2 24.4 66.7 28.7L79.3 16.1C71.7 9 61.8 4.5 50 4.5C33 4.5 18.3 15.9 11.1 30.2L25.5 41.3C28.9 30.9 38.6 22.2 50 22.2Z" fill="#EA4335" />
        </svg>
      );
    case 'adidas':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} fill="currentColor" className={className}>
          <polygon points="12,78 28,78 36,60 20,60" />
          <polygon points="36,78 52,78 66,45 50,45" />
          <polygon points="60,78 76,78 96,30 80,30" />
        </svg>
      );
    case 'coca_cola':
      return (
        <svg viewBox="0 0 120 70" width={size * 1.4} height={size * 0.8} className={className}>
          <rect width="120" height="70" rx="14" fill="#F40009" />
          <text x="60" y="44" fontFamily="'Brush Script MT', cursive, serif" fontSize="26" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontStyle="italic">
            Coca-Cola
          </text>
        </svg>
      );
    case 'tesla':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} fill="currentColor" className={className}>
          <path d="M50 15C32 15 18 20 12 24L18 31C24 28 35 25 50 25C65 25 76 28 82 31L88 24C82 20 68 15 50 15Z" fill="#E82127" />
          <path d="M46 36L42 85H58L54 36C62 37 72 40 76 43L80 36C74 32 63 29 46 36Z" fill="#E82127" />
        </svg>
      );
    case 'ikea':
      return (
        <svg viewBox="0 0 120 60" width={size * 1.5} height={size * 0.75} className={className}>
          <rect width="120" height="60" rx="8" fill="#0058A9" />
          <ellipse cx="60" cy="30" rx="54" ry="24" fill="#FFDB00" />
          <text x="60" y="38" fontFamily="Arial Black, Impact, sans-serif" fontSize="24" fontWeight="900" fill="#0058A9" textAnchor="middle" letterSpacing="1">
            IKEA
          </text>
        </svg>
      );
    case 'target':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <circle cx="50" cy="50" r="45" fill="#CC0000" />
          <circle cx="50" cy="50" r="30" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="15" fill="#CC0000" />
        </svg>
      );
    case 'redbull':
      return (
        <svg viewBox="0 0 120 80" width={size * 1.3} height={size * 0.9} className={className}>
          <circle cx="60" cy="40" r="28" fill="#FFD100" />
          <path d="M25 45C35 30 50 32 60 42C52 48 40 50 25 45Z" fill="#C60C30" />
          <path d="M95 45C85 30 70 32 60 42C68 48 80 50 95 45Z" fill="#C60C30" />
          <polygon points="60,32 55,20 65,20" fill="#C60C30" />
        </svg>
      );
    case 'lego':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <rect x="5" y="5" width="90" height="90" rx="16" fill="#D11013" stroke="#FFD500" strokeWidth="6" />
          <text x="50" y="62" fontFamily="Arial Black, Impact, sans-serif" fontSize="28" fontWeight="900" fill="#FFD500" textAnchor="middle" fontStyle="italic" stroke="#000" strokeWidth="2">
            LEGO
          </text>
        </svg>
      );
    case 'fedex':
      return (
        <svg viewBox="0 0 120 60" width={size * 1.5} height={size * 0.75} className={className}>
          <text x="20" y="44" fontFamily="Arial Black, Impact, sans-serif" fontSize="36" fontWeight="900" fill="#4D148C">
            Fed
          </text>
          <text x="68" y="44" fontFamily="Arial Black, Impact, sans-serif" fontSize="36" fontWeight="900" fill="#FF6600">
            Ex
          </text>
        </svg>
      );
    case 'airbnb':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <path d="M50 12C36 12 28 22 28 36C28 54 44 74 50 86C56 74 72 54 72 36C72 22 64 12 50 12ZM50 44C45 44 41 40 41 35C41 30 45 26 50 26C55 26 59 30 59 35C59 40 55 44 50 44Z" fill="#FF5A5F" />
        </svg>
      );
    case 'amazon':
      return (
        <svg viewBox="0 0 120 70" width={size * 1.3} height={size * 0.8} className={className}>
          <text x="18" y="40" fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="bold" fill="currentColor">
            amazon
          </text>
          <path d="M22 48C45 62 78 62 100 48" fill="none" stroke="#FF9900" strokeWidth="5" strokeLinecap="round" />
          <path d="M96 44L103 48L95 53Z" fill="#FF9900" />
        </svg>
      );
    case 'bmw':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <circle cx="50" cy="50" r="46" fill="#000000" stroke="#C0C0C0" strokeWidth="3" />
          <circle cx="50" cy="50" r="32" fill="#FFFFFF" />
          <path d="M50 18A32 32 0 0 1 82 50H50Z" fill="#0066B1" />
          <path d="M50 50H18A32 32 0 0 1 50 18Z" fill="#FFFFFF" />
          <path d="M50 50V82A32 32 0 0 1 18 50Z" fill="#0066B1" />
          <path d="M50 50H82A32 32 0 0 1 50 82Z" fill="#FFFFFF" />
          <text x="50" y="14" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">M</text>
          <text x="30" y="17" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">B</text>
          <text x="70" y="17" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">W</text>
        </svg>
      );
    case 'burger_king':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <circle cx="50" cy="50" r="46" fill="#FBE398" stroke="#D62300" strokeWidth="5" />
          <rect x="20" y="44" width="60" height="12" rx="4" fill="#D62300" />
          <text x="50" y="38" fontFamily="Arial Black, Impact, sans-serif" fontSize="16" fontWeight="900" fill="#D62300" textAnchor="middle">BURGER</text>
          <text x="50" y="72" fontFamily="Arial Black, Impact, sans-serif" fontSize="16" fontWeight="900" fill="#D62300" textAnchor="middle">KING</text>
        </svg>
      );
    case 'disney':
      return (
        <svg viewBox="0 0 120 70" width={size * 1.4} height={size * 0.8} className={className}>
          <text x="60" y="46" fontFamily="'Brush Script MT', cursive, serif" fontSize="38" fontWeight="bold" fill="currentColor" textAnchor="middle">
            Disney
          </text>
        </svg>
      );
    case 'zara':
      return (
        <svg viewBox="0 0 120 50" width={size * 1.5} height={size * 0.65} className={className}>
          <text x="60" y="38" fontFamily="'Didot', 'Playfair Display', serif" fontSize="34" fontWeight="bold" letterSpacing="4" fill="currentColor" textAnchor="middle">
            ZARA
          </text>
        </svg>
      );
    default:
      return (
        <div className={`flex items-center justify-center font-bold text-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-2xl text-white ${className}`}>
          🏷️
        </div>
      );
  }
}
