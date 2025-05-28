import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // importa o BrowserRouter
import './index.css'
import App from '../paginasApp/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* envolve o App com o BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
