import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowseBook from './components/BrowseBook.jsx'
import BookList from './components/BookList.jsx'
import BookDetails from './components/BookDetails.jsx'
import AddBook from './components/AddBook.jsx'
import ErrorPage from './components/ErrorPage.jsx'

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
      },
      {
        path : "/books/:category",
        element : <BookList/>
      },
      {
        path : "/book/:id",
        element :<BookDetails />
      },
      {
        path : '/addbook',
        element : <AddBook/>
      }
    ],
    errorElement : <ErrorPage/>,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
