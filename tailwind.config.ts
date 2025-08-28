import type { Config } from 'tailwindcss';
import { colors, typography, spacing, borderRadius, boxShadow } from './src/lib/tokens';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: typography.fontFamily,
      // fontSize: typography.fontSize, // TODO: Fix typing issues
      spacing,
      borderRadius,
      boxShadow,
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    // Custom plugin to generate CSS variables from tokens
    function({ addBase }: { addBase: any }) {
      addBase({
        ':root': {
          '--color-background': colors.background,
          '--color-text': colors.text,
          '--color-primary': colors.primary,
          '--color-accent': colors.accent,
          '--color-success': colors.success,
          '--color-warning': colors.warning,
          '--color-error': colors.error,
          '--color-focus': colors.focus,
        },
      });
    },
  ],
};

export default config;

