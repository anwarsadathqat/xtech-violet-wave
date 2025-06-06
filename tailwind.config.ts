
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
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
				xtech: {
					dark: '#0A0A1B', // Deep navy background
					'dark-purple': '#1A1F2C',
					purple: '#6F56E8',
					blue: '#00CFFF',
					light: '#B3B3B3', // Improved from #AAAAAA for better contrast
					'light-gray': '#CCCCCC' // Improved from #AAAAAA for better contrast
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				geist: ['Inter', 'sans-serif'] // Using Inter as a fallback for Geist
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				glow: {
					'0%': { filter: 'drop-shadow(0 0 5px rgba(111,86,232,0.6))' },
					'50%': { filter: 'drop-shadow(0 0 15px rgba(111,86,232,0.8))' },
					'100%': { filter: 'drop-shadow(0 0 5px rgba(111,86,232,0.6))' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(calc(-100% + 100vw))' }
				},
				grid: {
					'0%': { transform: 'translateZ(0)' },
					'50%': { transform: 'translateZ(40px)', opacity: '0.8' },
					'100%': { transform: 'translateZ(0)' }
				},
				dataFlow: {
					'0%': { transform: 'translateX(0)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateX(calc(100% + 10px))', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'glow': 'glow 3s ease-in-out infinite',
				'pulse': 'pulse 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'marquee': 'marquee 25s linear infinite',
				'grid': 'grid 12s ease-in-out infinite',
				'data-flow': 'dataFlow 4s linear infinite'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(45deg, #6F56E8, #00CFFF)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
