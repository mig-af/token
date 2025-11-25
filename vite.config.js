import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts:[

      'hawjq-34-176-120-66.a.free.pinggy.link'

    ]
  },
  
})
