import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
				dash: 'dash 2s linear infinite',
				draw: 'draw 2s linear infinite',
				morph: 'morph 3s ease-in-out infinite',
				flicker: 'flicker 1s infinite',
				'electric-border': 'electricBorder 2s infinite linear',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
				dash: {
					'0%': { strokeDashoffset: '0' },
					'100%': { strokeDashoffset: '16' }, // Значение зависит от длины твоего даш-эффекта
				},
				draw: {
					'0%': { strokeDasharray: '0, 3000', strokeDashoffset: '3000' }, // Линия полностью скрыта
					'100%': { strokeDasharray: '3000, 3000', strokeDashoffset: '0' }, // Линия полностью видна
				},
				morph: {
					'0%': { x: '358', y: '101', width: '272', height: '42', rx: '4' },
					'50%': { x: '300', y: '80', width: '300', height: '100', rx: '20' },
					'100%': { x: '358', y: '101', width: '272', height: '42', rx: '4' },
				},
				flicker: {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '1' },
				},
				electricBorder: {
					'0%': { 'clip-path': 'inset(0 100% 0 0)' },
					'25%': { 'clip-path': 'inset(0 0 0 0)' },
					'50%': { 'clip-path': 'inset(100% 0 0 0)' },
					'75%': { 'clip-path': 'inset(0 0 100% 0)' },
					'100%': { 'clip-path': 'inset(0 100% 0 0)' },
				},
			},
			cursor: {
				'svg-zap': 'url("/zap.svg") 16 16, auto'
			},
			colors: {
				'brand': '#005FB8',
				'second-brand': '#e7f5ff',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
