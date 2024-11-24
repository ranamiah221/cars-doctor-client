import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './components/routes/Router'

createRoot(document.getElementById('root')).render(

   <StrictMode>
   <div className='max-w-6xl mx-auto'>
   <RouterProvider router={Router}></RouterProvider>
   </div>
  </StrictMode>,
 
)
