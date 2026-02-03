/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette IMAAD - Basée sur wireframe client
        // Couleurs principales extraites du wireframe
        'petrol': {
          DEFAULT: '#0b1f3a',  // --blue-900 du wireframe (Deep Navy)
          light: '#1a3358',
          dark: '#061528',
        },
        'gold': {
          DEFAULT: '#c7a14a',  // --gold du wireframe (Or doré)
          light: '#d4b366',
          dark: '#a68937',
        },
        'blue': {
          DEFAULT: '#1d4ed8',  // --blue-600 du wireframe (Bleu électrique)
          light: '#3b82f6',
          dark: '#1e40af',
        },
        'arch-grey': {
          DEFAULT: '#f7f7f8',  // --bg du wireframe (Fond clair)
          light: '#ffffff',
          dark: '#e5e7eb',
        },
        'muted': {
          DEFAULT: '#6b7280',  // --muted du wireframe (Gris texte)
          light: '#9ca3af',
          dark: '#4b5563',
        },
        'charcoal': {
          DEFAULT: '#111111',  // Texte principal
          light: '#2D3748',
          dark: '#000000',
        },
        // Legacy aliases pour compatibilité
        'bleu-nuit': '#0b1f3a',
        'or': '#c7a14a',
        'ivory': '#f7f7f8',
      },
      fontFamily: {
        // Polices du wireframe client
        'poppins': ['Poppins', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        // Legacy aliases
        'michroma': ['Poppins', 'sans-serif'],
        'inter': ['Open Sans', 'sans-serif'],
        'playfair': ['Poppins', 'sans-serif'],
        'montserrat': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['2.5rem', { lineHeight: '1.1', letterSpacing: '0.03em' }],
        'display': ['2rem', { lineHeight: '1.2', letterSpacing: '0.03em' }],
        'heading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.03em' }],
        'subheading': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'nav': '100px',
        'nav-scrolled': '70px',
      },
      height: {
        'screen-nav': 'calc(100vh - 100px)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'reveal-up': 'revealUp 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'line-expand': 'lineExpand 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)', clipPath: 'inset(100% 0 0 0)' },
          '100%': { opacity: '1', transform: 'translateY(0)', clipPath: 'inset(0 0 0 0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.6)' },
        },
        lineExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      boxShadow: {
        'industrial': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 229, 255, 0.4)',
        'inner-dark': 'inset 0 2px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
