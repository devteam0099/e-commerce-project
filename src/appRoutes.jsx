import React from 'react'
import { GlobaldataProvider } from './contextApi.js'
import { useState } from 'react'
import Home from './home.jsx'
import Product from './products.jsx'
import ProductDetais from './productdetails.jsx'
import About from './about.jsx'
import Cart from './cart.jsx'
import Catagories from './catagories.jsx'
import Productcred from './product-cred.jsx'
import Contact from './contact.jsx'
import Login from './login.jsx'
import Accountfinder from './findaccount.jsx'
import Addproduct from './addproducts.jsx'
import Updatepassword from './updatepassword.jsx'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './navbar.jsx'


function AppRoutes(){
    let[globaldata,setglobaldata] = useState()

    return(
        <GlobaldataProvider value={{globaldata,setglobaldata}}>     
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
      <Route path='/add-items/:firstname?/:lastname?/:username?/:email?/:profileimage?' element={<Addproduct></Addproduct>} />
      <Route path='/reset-password/:username' element={<Updatepassword></Updatepassword>} />
      <Route path='/account-finder' element={<Accountfinder></Accountfinder>} /> 
      <Route path='/product-cred/:username?' element={<Productcred></Productcred>} /> 
      <Route path='/product-details/:productname?/:productstock?/:productprice?/:productcatagory?/:productdisc?/:productdiscription?/:productvarients?/:firstimage?/:secondimage?/:thirdimage?/:forthimage?/:productID?/:username?' element={<ProductDetais></ProductDetais>} />  
      
    </Routes>
    </BrowserRouter>
    </GlobaldataProvider>   

        
    )

}
export default AppRoutes;