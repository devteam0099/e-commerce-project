import { useParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SmartSlider from 'react-smart-slider'

function ProductDetais(){
    

    const params = useParams()
    const {productname,productstock,productprice,productcatagory,productvarients,productdisc,productdiscription,
           firstimage,secondimage,thirdimage,forthimage,productID,username} = params
           console.log(productID)

           let[savechangesbtn,setchanges] = useState(false)
           let[name,setname] = useState(productname)
    let[price,setprice] = useState(productprice)
    let[catagory,setcatagory] = useState(productcatagory)
    let[stock,setstock] = useState(productstock)
    let[varients,setvarients] = useState(productvarients)
    let[description,setdescription] = useState(productdiscription)
    let[discount,sediscount]= useState(productdisc)
    let[readonlyval,setreadonly] = useState(true)
    const navigate = useNavigate()

    
           function updateProduct(){
            alert('executed')
            setchanges(true)
            setreadonly(false)
           
           // console.log(price,catagory,description,stock,varients,discount)
           }

           function saveUpdateProduct(){
            axios.put('http://localhost:3000/api/modify-product/update-product',{price,catagory,description,stock,varients,discount,productID,name,username})
            .then((resp)=>{alert('request recieved')})
            .catch(()=>{alert('request not sent')})
           }

          function deleteProduct(){
               axios.post('http://localhost:3000/api/delete-product/remove-data',{productID})
               .then((res)=>{alert(res.data.message)})
               .catch((err)=>{alert(res.data.message)})
             //  navigate('/add-items')
               
          }

 const slidesArray = [
    {
        url: firstimage,
     },
      {
        url: secondimage,
      },
      {
        url: thirdimage,
      },
      {
        url: forthimage,
      }
  ];



    return(
    
    <div className="">
        <input className="font-bold text-4xl mt-10 text-center w-[150px] h-[50px] mx-[45%]" value={name} onChange={(e)=>{setname(e.target.value)}} readOnly={readonlyval} />
        
        
        
      <div className=" w-[70%] h-[40%] mx-auto mt-4">
      
      <SmartSlider className="w-[80%] h-[40%] "   autoPlay={true}
        slides={slidesArray}
        buttonShape="square" 
      />
    </div>
   <div className="w-[900px]  mx-auto flex justify-between"> 
    <div className=''>
    <span className="font-bold text-4xl">Stock:</span>
    <input className="font-bold text-4xl mt-10 text-center w-[100px] h-[50px]  " value={stock} onChange={(e)=>{setstock(e.target.value)}}  readOnly={readonlyval} />
   </div>
   
   <div>
    <span className="font-bold text-4xl">Price:</span>
    <input className="font-bold text-4xl mt-10 text-center w-[150px] h-[50px]  " value={price} onChange={(e)=>{setprice(e.target.value)}}  readOnly={readonlyval} />
   </div>

   <div> 
    <span className="font-bold text-4xl">Catagory:</span>
    <input className="font-bold text-4xl mt-10 text-center w-[150px] h-[50px]  " value={catagory} onChange={(e)=>{setcatagory(e.target.value)}} readOnly={readonlyval} />
   </div>

</div>

  <div className="w-[900px]  mx-auto flex justify-between">

   <div> 
    <span className="font-bold text-4xl">Varients:</span>
    <input className="font-bold text-4xl mt-10 text-center w-[150px] h-[50px]  " readOnly={readonlyval} value={varients} onChange={(e)=>{setvarients(e.target.value)}}   />
   </div>

    <div> 
    <span className="font-bold text-4xl">Discount:</span>
    <input className="font-bold text-4xl mt-10 text-center w-[150px] h-[50px]  " value={discount} onChange={(e)=>{sediscount(e.target.value)}}  readOnly={readonlyval} />
   </div>



  </div>

  <div className="mx-[15%]">
    <span className="font-bold text-4xl">description:</span>
    <input className="font-bold text-4xl mt-10 text-center w-[150px] h-[50px]" value={description} onChange={(e)=>{setdescription(e.target.value)}} readOnly={true}/>
  </div>
  <div className="w-[700px] mx-auto my-10">
  <button className='bg-orange-500 rounded  h-[50px] mx-4 p-2 font-bold' onClick={updateProduct}>Update Product</button>
  <button className='bg-orange-500 rounded  h-[50px] mx-4 p-2 font-bold' disabled={savechangesbtn? false : true} onClick={saveUpdateProduct}>Save Changes</button>
  <button className='text-red-500 border-2 border-red-300  rounded  h-[50px] p-2 font-bold ' onClick={deleteProduct}>Delete Product</button>
    </div>

    </div>
    )
}
export default ProductDetais