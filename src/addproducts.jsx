import {useParams,useNavigate ,Navigate} from 'react-router-dom'
import useData from './contextApi'
import { useEffect, useState } from 'react'
import axios from 'axios'
let productList = []

function Addproduct(){
    let[productData , setproductDAta] = useState()
    const {globaldata,setglobaldata} = useData()
    const params = useParams()
    const navigate = useNavigate()

      

     const {firstname,lastname,username,email,profileimage} = params 
     function navhandler(){
      navigate(`/product-cred/${username}`)
      }

     
  //  useEffect(()=>{
  //   const CancelToken = axios.CancelToken;
  //   const source = CancelToken.source();
  
  
  //   axios.post('http://localhost:3000/api/display-products/find-products', {username})
  //   .then((resp)=>{resp.data})
  
    
  //  },[])
  
    if (!globaldata && !username) {
        return <Navigate to="/login" />;
      }
  
  
  function logout(){
    setglobaldata(null)
    navigate('/login')
  }
          
    return(
        <div>
        <div className='bg-gradient-to-br from-black to-gray-500 pt-[3%] pb-[3%]'>
        <img src={ profileimage || globaldata?.profileimage} alt='No Profile Image' className='w-[150px] h-[150px] border-4 border-orange-500 rounded-[50%] mx-auto ' />
        
       <div className='mx-auto w-[200px] text-center text-xl mt-2 font-bold text-white'>{`${firstname || globaldata?.firstname} ${lastname || globaldata?.lastname}`}</div>
       
       <div className='mx-auto w-[200px] text-center text-xl mt-2 font-bold text-white'>{username || globaldata?.username}</div>
       
       <div className='mx-auto w-[200px] text-center text-xl mt-2 font-bold text-white'>{email || globaldata?.email}</div> 
       <button className='bg-orange-500 rounded p-2 h-[50px] w-[15%] mx-auto mx-[43%] mt-2' onClick={navhandler}>Create a Product</button>
       <button className='bg-orange-500 rounded p-2 h-[50px] w-[15%] mx-auto mx-[43%] mt-2 mx-4' onClick={logout}>Log Out</button>
        </div>
         
       

        </div>
    )
}
export default Addproduct