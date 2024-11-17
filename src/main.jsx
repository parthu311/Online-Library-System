import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowseBook from './components/BrowseBook.jsx'
import BookList from './components/BookList.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
  
    children : [
      {
        path :'/',
        element : <BookList/>
      },
      {
        path : '/browsebook',
        element : <BrowseBook/>
      }
    ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
