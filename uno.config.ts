import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
} from "unocss"

export default defineConfig({
  presets: [
    presetAttributify(), // required if using attributify mode
    presetUno(), // required
    presetTypography(),
  ],
  theme: {
    colors: {
      main: "rgb(128, 179,162)",
    },
  },
  shortcuts: {
    "project-item":
      "px-4 py-3 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20",
  },
})
