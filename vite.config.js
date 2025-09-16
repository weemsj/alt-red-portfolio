import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Project Pages, set base: '/<REPO_NAME>/'.
export default defineConfig({
  plugins: [react()],
  base: '/alt-red-portfolio/' // change to '/alt-red-portfolio/' if using Project Pages at /<username>/<repo>
})
