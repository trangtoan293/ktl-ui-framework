const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1440px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				'50': '#EFF6FF',
  				'100': '#DBEAFE',
  				'500': '#3B82D4',
  				'600': '#2563B0',
  				'700': '#1E4D8C',
  				'800': '#153666',
  				'900': '#0C2340',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			success: {
  				'50': '#F0FDF4',
  				'200': '#bbf7d0',
  				'600': '#16A34A',
  				'700': '#15803d',
  				DEFAULT: '#16A34A'
  			},
  			warning: {
  				'50': '#FFFBEB',
  				'200': '#fef08a',
  				'600': '#D97706',
  				'700': '#b45309',
  				DEFAULT: '#D97706'
  			},
  			danger: {
  				'50': '#FEF2F2',
  				'200': '#fecaca',
  				'600': '#DC2626',
  				'700': '#b91c1c',
  				DEFAULT: '#DC2626'
  			},
  			info: {
  				'50': '#EFF6FF',
  				'200': '#bfdbfe',
  				'600': '#2563EB',
  				'700': '#1d4ed8',
  				DEFAULT: '#2563EB'
  			},
  			ai: {
  				'100': '#EDE9FE',
  				'200': '#ddd6fe',
  				'600': '#7C3AED',
  				'700': '#6d28d9',
  				DEFAULT: '#7C3AED'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			sans: [
  				'Be Vietnam Pro',
                    ...fontFamily.sans
                ],
  			mono: [
  				'JetBrains Mono',
                    ...fontFamily.mono
                ]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
