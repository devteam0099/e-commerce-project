import React from 'react'
import SmartSlider from 'react-smart-slider'
import { json, Navigate ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Product from './products'

export default function Home() {
  const navigation = useNavigate()
  let [products,setProducts] = useState([])
  let [displayProducts,setDisplayProducts] = useState(false)
  let [searchStore,setSearchStore] = useState(false)
  let [storeValue,setStoreValue] = useState("")
  let [storeInfo,setStoreInfo] = useState(null)
  let [productName,setProductName] = useState('')
  let [scrollMonitor,setScrollMonitor] = useState(false)
  let [productData,setProductData] = useState(null)
  let [navigator,setNavigator] = useState(false)  

      useEffect(()=>{
       ;(
        async()=>{
          try {
            const productList = await axios.get('http://localhost:3000/api/get-products/products-data')
            if(productList.data.message){
              alert(productList.data.message)
            }else{
              setProducts((prev_Products)=>([...prev_Products,productList.data]))
              setDisplayProducts(true)
              console.log(products)
              
            }
          } catch (error) {
            alert('request to obtain products using axios not successful')
          }
        }
       )()
      },[scrollMonitor,setScrollMonitor])

    
   function scrollHandler(){
       let totalScroll = document.body.scrollHeight
       let userScroll = window.scrollY + 500
       if(userScroll >= totalScroll){
        setScrollMonitor(!scrollMonitor)
       }
      }
      function ItemDetails(product){
       
        console.log(product)
       setProductData(product)
       setNavigator(true) 
       // console.log(product.productColors,product.productSizes)
         //  navigate(`/item-details/${product.productName}/${product.productColors}/${product.productSizes}/${product.productStock}/${product.productPrice}/${product.productCatagory}/${product.productDiscount}/${product.productDisccription}/${product.productVarients}/${encodeURIComponent(product.productImages[0])}/${encodeURIComponent(product.productImages[1])}/${encodeURIComponent(product.productImages[2])}/${encodeURIComponent(product.productImages[3])}`)
         
      }

       let sliderimages= [
         {
           url : 'D:\OneDrive\Desktop\sample images\img1.jpeg'
         },
         {
           url : 'D:\OneDrive\Desktop\sample images\img4.jpeg'
         },
         {
           url : 'D:\OneDrive\Desktop\sample images\img5.jpeg'
         },{
           url : 'D:\OneDrive\Desktop\sample images\img7.jpeg'
         }
        ]

       async function StoreInformation(){

        if(storeValue === ""){
          alert('pease enter any value to search store')
        }else{
            
             
          try {
            const storeCred = await axios.post('http://localhost:3000/api/search-store/store-info',{storeValue})
            if(storeCred.data.message){
              alert(storeCred.data.message)
            }else{
              setStoreInfo(storeCred.data)
            setSearchStore(true)
            }
         } catch (error) {
           alert('error in sending using axios',error)            
         }
        }
         
        }

        function navProductPage(){
          navigation(`/search-products/${productName}`)
        }
  
      if(navigator){
        return <Navigate to='/item-details' state={productData} />
      }

      if(searchStore){
        return <Navigate to="/search-store" state={storeInfo} />
      }
window.addEventListener('scroll',scrollHandler)
  
 return (
  <>
  
  
  <div className='h-[] w-[]'>
  <SmartSlider  buttonShape="square"  autoPlay={true} autoPlayDuration={5000} 
 />
 
  </div >
  <div className='flex w-full justify-between '>
  <div className='w-[50%]'>
    <input type='text' className='border-2 border-orange-500 rounded h-[40px] w-[40%]' value={productName} onChange={(e)=>{setProductName(e.target.value)}}  />
    <button className='bg-orange-500 rounded h-[40px] font-bold' onClick={navProductPage}  >search products</button>
  </div>
  <div className='w-[50%]'>
    <input type='text' className='border-2 border-orange-500 rounded h-[40px]' onChange={(e)=>{setStoreValue(e.target.value)}} value={storeValue} />
    <button className='bg-orange-500 rounded h-[40px] font-bold' onClick={StoreInformation} >search shops</button>
  </div>
</div>

  <div className='text-4xl font-bold text-center mt-8'>LET'S START SHOPPING</div>
    <div className="bg-white hover:cursor-pointer">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            product.map((item)=>(
              <div key={item._id} onClick={()=>{ItemDetails(item)}} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt='no image found'
                  src={item.productImages[0]}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-xl text-gray-700">{item.productName}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{item.productPrice}</p>
            </div>
            ))
          ))}
        </div>
      </div>
    </div>
  
  </>
 )
}







// useEffect(()=>{
    //   ;(
    //    async()=>{
    //      await axios.post('http://localhost:3000/api/search/find-store')
    //     .then((resserve)=>{
    //       setstoredata(resserve.data.message)
    //       alert(resserve.data.message)
    //     })
    //     .catch((error)=>{
    //       setstoredata(null)
    //       alert(resserve.data)
    //     })
    //    }
    //   )()
    // })
