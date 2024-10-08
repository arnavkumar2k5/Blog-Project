import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout, Login, Signup } from './Components/index.js'
import {AllPost, AddPost, EditPost, Home, Post} from './Pages/index.js'

const router = createBrowserRouter([
  {path: '/',
  element: <App/>,
  children: [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: (
        <AuthLayout authentication={false}>
          <Login/>
        </AuthLayout>
      ),
    },
    {
      path: '/signup',
      element: (
        <AuthLayout authentication={false}>
          <Signup/>
        </AuthLayout>
      ),
    },
    {
      path: '/all-posts',
      element: (
        <AuthLayout authentication>
          {" "}
          <AllPost/>
        </AuthLayout>
      ),
    },
    {
      path: '/add-post',
      element: (
        <AuthLayout authentication>
          {" "}
          <AddPost/>
        </AuthLayout>
      ),
    },
    {
      path: "/edit-post/:postId",
      element: (
        <AuthLayout authentication>
          <EditPost />
        </AuthLayout>
      ),
    },
    {
      path: "/post/:postId",
      element: <Post/>
    }
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
