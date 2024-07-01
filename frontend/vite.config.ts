import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.resolve(), "src"),
    },
  },
  server: {
    port: 3000, // Change this to your desired port number
    host: true 
  }
})


