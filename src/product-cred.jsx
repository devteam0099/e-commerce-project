import { useState } from "react"
import {useParams} from 'react-router-dom'
import axios from "axios"

function Productcred(e){
  const params = useParams()
  const {username} = params
    
    let[image1,setimage1] = useState(null)
    let[image2,setimage2] = useState(null)
    let[image3,setimage3] = useState(null)
    let[image4,setimage4] = useState(null)
    let[cinputval,setinputval] = useState({
        productname : "",
        productstock : "",
        productprice : "",
        productcat : "",
        productdisc : "",
        productdiscription : "",
        productvarients : ""
        
    })

   function handleinput(inputno,inpval){
    setinputval((current_val)=>({...cinputval,[inputno] : inpval.target.value }))
   }

   function submitdata(event){
    event.preventDefault()
      let formdata = new FormData()
      formdata.append('productname' ,cinputval.productname)
      formdata.append('productstock' , cinputval.productstock)
      formdata.append('productprice' , cinputval.productprice)
      formdata.append('productcat' , cinputval.productcat)
      formdata.append('image1' , image1)
      formdata.append('image2', image2)
      formdata.append('image3' , image3)
      formdata.append('image4' , image4)
      formdata.append('productdisc' , cinputval.productdisc)
      formdata.append('productdiscription' , cinputval.productdiscription)
      formdata.append('productvarients', cinputval.productvarients)
      formdata.append('username' , username)
      console.log(formdata ,cinputval.productdisc)
      axios.post('http://localhost:3000/api/product-section/add-product' ,formdata)
      .then((serverResp)=>{})
      .catch((srverr)=>{})

   }

  return(<div className="bg-gradient-to-br from-black to-gray-500 min-h-[100vh] pt-10 pb-5">
    <form method="POST" encType="multipart/formdata" className="flex flex-col md:w-[40%] w-[80%]  h-auto rounded-xl mx-auto  bg-[black] ">
        <h2 className="text-white font-bold text-center text-2xl bg-orange-500 rounded p-5">Add Product Form</h2>
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Product Name*</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" onChange={(e)=>{handleinput('productname',e)}} value={cinputval.productname} />
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Product Stock*</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" onChange={(e)=>{handleinput('productstock',e)}} value={cinputval.productstock}/>
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Product price*</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" onChange={(e)=>{handleinput('productprice',e)}} value={cinputval.productprice}/>
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Product Catagory*</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" onChange={(e)=>{handleinput('productcat',e)}} value={cinputval.productcat}/>
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500" >Enter Product image*</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" type="file" onChange={(evn)=>{setimage1(evn.target.files[0])}} />
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500" >Enter Product image*</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" type="file" onChange={(evn)=>{setimage2(evn.target.files[0])}}/>
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Product image*</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" type="file" onChange={(evn)=>{setimage3(evn.target.files[0])}}/>
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Product image*</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" type="file" onChange={(evn)=>{setimage4(evn.target.files[0])}}/>
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Product discounts (optional)</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" onChange={(e)=>{handleinput('productdisc',e)}} value={cinputval.productdisc}/>
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Product description*</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" onChange={(e)=>{handleinput('productdiscription',e)}} value={cinputval.productdiscription}/>
    <h1 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Product Varients(optional)</h1>
    <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" onChange={(e)=>{handleinput('productvarients',e)}} value={cinputval.productvarients}/>
    <button className="text-white bg-orange-500 rounded px-5 py-2 md:mx-[40%] mx-[35%] my-3 border-orange-500 border-2  " onClick={submitdata}>Add Product</button>
    </form>
  </div>)
}
export default Productcred