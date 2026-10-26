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
        "on-background": "rgb(var(--c-on-background) / <alpha-value>)",
        surface: "#121317",
        "on-surface": "rgb(var(--c-on-surface) / <alpha-value>)",
        "surface-dim": "rgb(var(--c-surface-dim) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--c-surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--c-surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--c-surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--c-surface-container-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--c-surface-container-highest) / <alpha-value>)",
        "surface-variant": "rgb(var(--c-surface-variant) / <alpha-value>)",
        "surface-bright": "rgb(var(--c-surface-bright) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--c-on-surface-variant) / <alpha-value>)",
        outline: "#909094",
        "outline-variant": "rgb(var(--c-outline-variant) / <alpha-value>)",
        // Accent (green) - used for buttons, active states
        primary: "#4ade80",
        "on-primary": "rgb(var(--c-on-primary) / <alpha-value>)",
        "primary-container": "rgb(var(--c-primary-container) / <alpha-value>)",
        "on-primary-container": "rgb(var(--c-on-primary-container) / <alpha-value>)",
        // Secondary (gold) - used for caution/unverified
        secondary: "#e9c349",
        "on-secondary": "rgb(var(--c-on-secondary) / <alpha-value>)",
        "secondary-container": "rgb(var(--c-secondary-container) / <alpha-value>)",
        "on-secondary-container": "rgb(var(--c-on-secondary-container) / <alpha-value>)",
        // Tertiary (red) - high risk, critical
        tertiary: "#f87171",
        "on-tertiary": "rgb(var(--c-on-tertiary) / <alpha-value>)",
        "tertiary-container": "rgb(var(--c-tertiary-container) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--c-on-tertiary-container) / <alpha-value>)",
        // Error
        error: "#f87171",
        "on-error": "rgb(var(--c-on-error) / <alpha-value>)",
        "error-container": "rgb(var(--c-error-container) / <alpha-value>)",
        "on-error-container": "rgb(var(--c-on-error-container) / <alpha-value>)",
        // Inverse
        "inverse-surface": "rgb(var(--c-inverse-surface) / <alpha-value>)",
        "inverse-on-surface": "rgb(var(--c-inverse-on-surface) / <alpha-value>)",
        "inverse-primary": "rgb(var(--c-inverse-primary) / <alpha-value>)",
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