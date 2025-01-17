const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "water-blue": {
      "50": "#E3F2FD",
      "100": "#C2E3FA",
      "200": "#84C8F6",
      "300": "#3DA7F0",
      "400": "#1395EC",
      "500": "#1186D5",
      "600": "#0D65A1",
      "700": "#0A5689",
      "800": "#0A4B76",
      "900": "#073250",
    },
    "electric-purple": {
      "50": "#F2E0FF",
      "100": "#E3BDFF",
      "200": "#C77AFF",
      "300": "#A62EFF",
      "400": "#9200FF",
      "500": "#A327FF",
      "600": "#6400AD",
      "700": "#550094",
      "800": "#490080",
      "900": "#320057",
    },
    "wedgewood": {
      "50": "#F0F4F8",
      "100": "#D9E3ED",
      "200": "#B9CCDF",
      "300": "#97B3CE",
      "400": "#7499BE",
      "500": "#507DAA",
      "600": "#3F6388",
      "700": "#314D68",
      "800": "#253B50",
      "900": "#1A2938",
    },
    "rose-madder": {
      "50": "#FCEDEE",
      "100": "#F9D5D7",
      "200": "#F3ABB0",
      "300": "#ED8188",
      "400": "#E75761",
      "500": "#E12D39",
      "600": "#B4242E",
      "700": "#871B22",
      "800": "#5A1217",
      "900": "#2D090B",
    },
    "school-bus-yellow": {
      "50": "#FFFBEB",
      "100": "#FEF3C7",
      "200": "#FDE68A",
      "300": "#FCD34D",
      "400": "#FBBF24",
      "500": "#F59E0B",
      "600": "#D97706",
      "700": "#B45309",
      "800": "#92400E",
      "900": "#78350F",
    },
    "green-teal": {
      "50": "#ECFDF5",
      "100": "#D1FAE5",
      "200": "#A7F3D0",
      "300": "#6EE7B7",
      "400": "#34D399",
      "500": "#10B981",
      "600": "#059669",
      "700": "#047857",
      "800": "#065F46",
      "900": "#064E3B",
    },
  },
}

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './js/**/*.js',
      '../lib/*_web/**/*.*ex'
    ],
    safelist: [
      '-top-1.5',
      'top-1',
      'left-3',
      'top-6',
      'h-5',
      'left-2.5',
      'top-3',
      'h-7',
      'bg-secondary-600',
      'text-white',
      'bg-white',
      'text-gray-600'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      colors: {
        primary: colors["water-blue"],
        secondary: colors["electric-purple"],
        neutral: colors["wedgewood"],
        "supporting-red": colors["rose-madder"],
        "supporting-yellow": colors["school-bus-yellow"],
        "supporting-green": colors["green-teal"]
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    boxShadow: {
      "base": "0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06)",
      "lg": "0px 4px 6px 0px rgba(0,0,0,0.05), 0px 10px 15px 0px rgba(0,0,0,0.1)",
      "md": "0px 4px 6px 0px rgba(0,0,0,0.1), 0px 2px 4px 0px rgba(0,0,0,0.06)",
      "xl": "0px 10px 10px 0px rgba(0,0,0,0.04), 0px 20px 25px 0px rgba(0,0,0,0.1)",
      "2xl": "0px 25px 50px 0px rgba(0,0,0,0.25)",
      "inner": "inset 0px 2px 4px 0px rgba(0,0,0,0.06)"
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
