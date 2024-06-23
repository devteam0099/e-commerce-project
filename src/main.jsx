import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home.jsx'
import Product from './products.jsx'
import About from './about.jsx'
import Cart from './cart.jsx'
import Catagories from './catagories.jsx'
import Contact from './contact.jsx'
import Login from './login.jsx'
import Accountfinder from './findaccount.jsx'
import Addproduct from './addproducts.jsx'
import Updatepassword from './updatepassword.jsx'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './index.css'
import Navbar from './navbar.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/products' element={<Product></Product>} />
      <Route path='/catagories' element={<Catagories></Catagories>} />
      <Route path='/contact-us' element={<Contact></Contact>} />
      <Route path='/about-us' element={<About></About>} />
      <Route path='/login' element={<Login></Login>} />
      <Route path='/cart' element={<Cart></Cart>} /> 
      <Route path='/add-items/:firstname/:lastname/:username/:email' element={<Addproduct></Addproduct>} />
      <Route path='/reset-password/:username' element={<Updatepassword></Updatepassword>} />
      <Route path='/account-finder' element={<Accountfinder></Accountfinder>} />     
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
