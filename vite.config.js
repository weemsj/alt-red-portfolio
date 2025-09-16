import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Project Pages, set base: '/<REPO_NAME>/'.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? 'weemsj/alt-red-portfolio/' : '/',
=======
  base: mode === 'production' ? '/alt-red-portfolio/' : '/',
>>>>>>> Stashed changes
}))
