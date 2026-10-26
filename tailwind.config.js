/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // DESIGN.md Dark Theme (primary)
        background: "#121317",
        "on-background": "#e3e2e7",
        surface: "#121317",
        "on-surface": "#e3e2e7",
        "surface-dim": "#121317",
        "surface-container-lowest": "#0d0e12",
        "surface-container-low": "#1a1b1f",
        "surface-container": "#1e1f23",
        "surface-container-high": "#292a2e",
        "surface-container-highest": "#343539",
        "surface-variant": "#343539",
        "surface-bright": "#38393d",
        "on-surface-variant": "#c7c6ca",
        outline: "#909094",
        "outline-variant": "#46474a",
        // Accent (green) - used for buttons, active states
        primary: "#4ade80",
        "on-primary": "#121317",
        "primary-container": "#1a3a2a",
        "on-primary-container": "#4ade80",
        // Secondary (gold) - used for caution/unverified
        secondary: "#e9c349",
        "on-secondary": "#121317",
        "secondary-container": "#ae8d10",
        "on-secondary-container": "#3c2f00",
        // Tertiary (red) - high risk, critical
        tertiary: "#f87171",
        "on-tertiary": "#121317",
        "tertiary-container": "#7f1d1d",
        "on-tertiary-container": "#fca5a5",
        // Error
        error: "#f87171",
        "on-error": "#121317",
        "error-container": "#7f1d1d",
        "on-error-container": "#fca5a5",
        // Inverse
        "inverse-surface": "#e3e2e7",
        "inverse-on-surface": "#121317",
        "inverse-primary": "#1a3a2a",
      },
      fontFamily: {
        headline: ['"Hanken Grotesk"', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        label: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'headline-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-md': ['1.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        'headline-sm': ['1rem', { lineHeight: '1.4', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['0.875rem', { lineHeight: '1.6' }], // 14px base
        'body-sm': ['0.8125rem', { lineHeight: '1.5' }],
        'label-md': ['0.75rem', { lineHeight: '1.4', fontWeight: '600' }], // 12px
        'label-sm': ['0.6875rem', { lineHeight: '1.3', fontWeight: '500' }], // 11px
      },
      boxShadow: {
        // Hard shadows per DESIGN.md
        tactile: '0 4px 0 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'tactile-btn': '0 6px 0 0 rgb(58 128 68), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
        'tactile-btn-pressed': '0 2px 0 0 rgb(58 128 68)',
        // Container shadows
        container: '0 4px 0 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
      transitionTimingFunction: {
        'tactile': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'tactile': '100ms',
      },
    },
  },
  plugins: [],
}