import { useState ,useEffect,useCallback} from "react"
import {Navigate,useLocation,useParams} from 'react-router-dom'
import axios from "axios"
import useData from "./contextApi"


  
  export default function Catagories() {
    
    const [navItem,setNavItem] = useState(false)
    let [loadProducts,setLoadProducts] = useState([])
    const [pageNo,setPageNo] = useState(0)
    let [moreProducts,setMoreProducts] = useState(false)
    let [catagoryValue,setCatagoryValue] = useState('')
    let [data,setData] = useState(null)
    let [btnClick,setBtnClick] = useState(false)
    const {loginDetails} = useData()
    
    
    async function productData() {
      try {
        const products = await axios.post('http://localhost:3000/api/product/catagories', {
          catagoryValue,
          pageNo
        });
    
        if (products.data.message) {
          alert(products.data.message);
        } else {
          setPageNo((prev_PageNo) => (prev_PageNo + 1));
          setLoadProducts([...loadProducts, products.data]);
        }
      } catch (error) {
        alert('Error in sending request using axios');
      }
    }
    
    function itemdetails(productData){
             setData(productData)
            
             setNavItem(true)
    }

   
   
   

   if (navItem) {
    if(data == null || undefined){
      alert('data is null')
    }
   else{
    console.log(data)
    return <Navigate to="/item-details" state={data} />
   }
   }

   console.log(loadProducts)
    return (
      <div className="bg-white">
       <div className="flex flex-col mt-10">
       <input type='text' className='border-2 border-orange-500 rounded text-center p-2 w-[270px] mx-[40%]' value={catagoryValue} onChange={(e)=>{setCatagoryValue(e.target.value)}} />
       <button onClick={productData} className="text-white bg-orange-500 rounded px-5 py-2 md:mx-[40%] mx-[35%] my-3 border-orange-500 border-2  ">Search Catagories</button>
       </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            
{loadProducts.map((outerArray) => {
  return outerArray.map((product) => (
    <a key={product._id} className="group" onClick={()=>{itemdetails(product)}}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img 
          alt='no image found' 
          src={product.productImages[0]} 
          className="h-full w-full object-cover object-center group-hover:opacity-75" 
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product?.productName}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product?.productPrice}</p>
    </a>
  ))
})}
          </div>
          <button className="text-white bg-orange-500 rounded px-5 py-2 md:mx-[40%] mx-[35%] my-3 border-orange-500 border-2  " onClick={productData}>Load More</button>
        </div>
      </div>
    )
  }
  