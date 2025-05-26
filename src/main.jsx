import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes.jsx'
import { RouterProvider } from 'react-router'
import { ThemeProvier } from './context/theme/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvier>
      <RouterProvider router={router} />
    </ThemeProvier>
  </StrictMode>,
)
