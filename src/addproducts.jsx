import {useParams,useNavigate ,Navigate} from 'react-router-dom'
import useData from './contextApi'
import {  useState,useEffect } from 'react'
import axios from 'axios'


function Addproduct(){
  const params = useParams()
  const navigate = useNavigate()


  const {globaldata,setglobaldata} = useData()
  const {firstname,lastname,username,email,profileimage} = params 

  
  
    let[productData , setproductData] = useState([])
    let[storedata,setstoredata] = useState(null)
    let[showcred,setshowcred] = useState(false)
    let [error,seterror] = useState(false)
    let[success,setsuccess] = useState(true)
    let [fetching,setfetching] = useState(false)
    let [controlFetch,setControlFetch] = useState(true)
    let [pageNo,setPageNo] = useState(0)
    let [storeinfo,setstoreinfo] = useState(null)
    let [currentinput,setinput] = useState({
      field1 : "",
      field2 : ""
    })
    
    if (!globaldata && !username) {
      return <Navigate to="/login" />;
    }
    
   
    // api request to obtain store information
   
     useEffect(() => {
        axios.post('http://localhost:3000/api/retrieve-store/access-shop', { username: username || globaldata.username })
        .then((res)=>{
         alert('store api called')
         setstoreinfo(res.data.message)
        })
        .catch((errr)=>{alert('error in obtaining store info')})
     }, []);

    
    
    // api call for obtining products
    
      useEffect(()=>{
  
        ;(async()=>{
         try {
           setfetching(true)
           const products = await axios.post('http://localhost:3000/api/display-products/find-products',{username : username || globaldata?.username , pageNumber : pageNo})
           if(products.data.error){
             alert('error in recieving data')
           }else{
             setproductData((prev_products)=>([...prev_products,products.data]))
             seterror(false)
             setsuccess(true)
             setfetching(false)
    
           }
          
         } catch (error) {
           alert('error in fetching products')
           seterror(true)
           setsuccess(false)
           setfetching(false)
         }
        })()
    
      
       },[controlFetch])
    
    
     // other utility functions
    
     
    function scrollHandler(){
          
      const totalHeight = document.body.scrollHeight
      const scrolledHeight = window.scrollY + 500
      if(scrolledHeight >= totalHeight && !fetching){
         setPageNo((prev_pageno)=>(prev_pageno + 1))
         setControlFetch(!controlFetch)
      }
     }
    
     
     function createproductnav(){
      navigate(`/product-cred/${username}`)
      }
    
      
      function logout(){
        setglobaldata(null)
        navigate('/login')
      }
     
      function displaycred(){
        setshowcred(!showcred)
    }
    
     
  function productDetails(productCred){
    console.log(productCred.createdBy)
    navigate(`/product-details/${productCred.productName}/${productCred.productStock}/${productCred.productPrice}/${productCred.productCatagory}/${productCred.productDiscount}/${productCred.productDisccription}/${productCred.productVarients}/${encodeURIComponent(productCred.productImages[0])}/${encodeURIComponent(productCred.productImages[1])}/${encodeURIComponent(productCred.productImages[2])}/${encodeURIComponent(productCred.productImages[3])}/${productCred._id}/${productCred.createdBy}`)
    
}
function  valuesetter(currentField,currentval) {
  setinput((prev_val)=>({...currentinput,[currentField] : currentval.target.value}))
}

async function registerstore(e){
  e.preventDefault()
   await axios.post('http://localhost:3000/api/register-store/shop-build',{shopname : currentinput.field1,shopaddress : currentinput.field2,username : username || globaldata.username})
  .then((resserve)=>{
    setstoredata(resserve.data.message)
    alert(resserve.data.message)
  })
  .catch((error)=>{
    setstoredata(null)
    alert('request for registration of store was not successful')
  })
 }

     
window.addEventListener(scroll,scrollHandler)

if(!storeinfo){
  return(
    <form className="flex flex-col md:w-[40%] w-[80%]  h-auto rounded-xl mx-auto  bg-[black] ">
        <div className="text-white font-bold text-center text-2xl bg-orange-500 rounded p-5">Store Registration</div>
        <div className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Shop Name*</div>
        <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" value={currentinput.field1} onChange={(e)=>{valuesetter('field1',e)}}/>
        <div className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Shop Address*</div>
        <input type='text' className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" value={currentinput.field2} onChange={(e)=>{valuesetter('field2',e)}}/>
        <button className="text-white bg-orange-500 rounded  py-2 md:mx-[40%] mx-[35%] my-3 border-orange-500 border-2  " onClick={registerstore} >Create a store</button>

      </form>
  )    
 }


console.log(storeinfo)
 
    return(
        <div className='relative'>
        <div className='h-[20%] w-[90%]  flex justify-between mx-auto mt-4 rounded-xl shadow-black shadow-md p-2  left-14  '>
        <img src={ profileimage || globaldata?.profileimage} alt='No Profile Image' className='w-[80px] h-[80px] rounded-[50%] border-2 border-black' onClick={displaycred} />
        <div className='font-bold text-3xl mt-4'>{storeinfo.owner}</div>
        <div className='w-[30%] mt-5'>
       <button className='bg-orange-500 rounded  h-[50px] mx-4 p-2 font-bold' onClick={createproductnav}>Create a Product</button>
       <button className='text-red-500 border-2 border-red-300  rounded  h-[50px] p-2 font-bold ' onClick={logout}>Log Out</button>
       </div>
        </div>

        {showcred && <div className='h-[100px] w-[250px] text-center bg-black text-white mt-5 rounded-xl p-5 mx-[5%] transition duration-1000 delay-200 absolute	'>
          <div className='font-bold'>{`${firstname || globaldata?.firstname} ${lastname || globaldata?.lastname}`}</div>
       
       <div className=' font-bold '>{username || globaldata?.username}</div>
       
       <div className=' font-bold '>{email || globaldata?.email}</div> 
          </div>}
         
       {error && <div>can't load products</div>}


       {success && (
  <div>
  <div className="text-center font-bold text-4xl my-5 ">Products</div>
  {productData.map((firstArray) => (
    <div key={firstArray._id} className="inline-block h-[280px] w-[270px] mx-5 ">
      {firstArray.map((item) => (
        <div className='w-full '>
          <div key={item.createdAt} className='h-[280px] border-2 border-black w-[270px] m-10 rounded overflow-hidden cursor-pointer ' onClick={()=>{productDetails(item)}}>
            <img className='h-[180px] hover:scale-105 ' src={item.productImages[0]} />
            <div className='font-bold text-center ' >Product name : {item.productName}</div>
            <div className='font-bold text-center' >Product price : {item.productPrice}</div>
            <div className='font-bold text-center' >Catagory : {item.productCatagory}</div>
          </div>
        </div>
      ))}
    </div>
  ))}

</div>

)}


 </div>)
}
export default Addproduct