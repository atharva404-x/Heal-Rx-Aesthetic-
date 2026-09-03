/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg-primary)',
          'bg-alt': 'var(--bg-secondary)',
          'bg-tertiary': 'var(--bg-tertiary)',
          surface: 'var(--surface)',
          'surface-elevated': 'var(--surface-elevated)',
          'surface-muted': 'var(--surface-muted)',
          fg: 'var(--fg-primary)',
          'fg-secondary': 'var(--fg-secondary)',
          'fg-muted': 'var(--fg-muted)',
          'fg-subtle': 'var(--fg-subtle)',
          border: 'var(--border)',
          'border-subtle': 'var(--border-subtle)',
          'border-highlight': 'var(--border-highlight)',
          accent: 'var(--accent)',
          'accent-light': 'var(--accent-light)',
          'accent-hover': 'var(--accent-hover)',
          'accent-surface': 'var(--accent-surface)',
          'accent-fg': 'var(--accent-foreground)',
          'btn-primary-bg': 'var(--btn-primary-bg)',
          'btn-primary-fg': 'var(--btn-primary-fg)',
          'btn-secondary-bg': 'var(--btn-secondary-bg)',
          'btn-secondary-fg': 'var(--btn-secondary-fg)',
        },
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F3EFEA',
          300: '#EBE5DC',
          400: '#DED5C7',
        },
        charcoal: {
          50: '#F5F5F4',
          100: '#E7E5E4',
          200: '#D6D3D1',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#2E2C2A',
          800: '#1F1E1C',
          900: '#141312',
          950: '#0C0B0A',
        },
        gold: {
          50: '#F9F6F0',
          100: '#F2EADF',
          200: '#E4D3BC',
          300: '#D4BC98',
          400: '#B89B72',
          500: '#9E7E5A',
          600: '#846645',
          700: '#684E33',
          800: '#4D3823',
          900: '#332415',
        },
        stone: {
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#5F5B55',
          700: '#4A4642',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.22em',
        'tight-luxury': '-0.02em',
      },
      boxShadow: {
        'luxury-sm': 'var(--shadow-sm)',
        'luxury': 'var(--shadow-md)',
        'luxury-lg': 'var(--shadow-lg)',
        'glow-gold': 'var(--shadow-glow)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
