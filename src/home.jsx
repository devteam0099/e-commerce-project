import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function Home() {
  let [currentinput,setinput] = useState({
    field1 : "",
    field2 : ""
  })
  

  function  valuesetter(currentField,currentval) {
    setinput((prev_val)=>({...currentinput,[currentField] : currentval.target.value}))
}

   useEffect(()=>{

    ;(
      async()=>{
       try {
        const retrieveStore = await axios.post('http://localhost:3000/api/retrieve-store/access-shop',{username : 'abdullah'})
        alert(retrieveStore.data.message)
       } catch (error) {
        alert('request sending error using axios')
       }
      }
    )()
   })


   async function registerstore(e){
    e.preventDefault()
     await axios.post('http://localhost:3000/api/register-store/shop-build',{shopname : currentinput.field1,shopaddress : currentinput.field2,username : 'abdullah'})
    .then((resserve)=>{
      setstoredata(resserve.data.message)
      alert(resserve.data.message)
    })
    .catch((error)=>{
      setstoredata(null)
      alert('request not successful')
    })
   }
  


 
  
  return(
    <form className="flex flex-col md:w-[40%] w-[80%]  h-auto rounded-xl mx-auto  bg-[black] ">
        <div className="text-white font-bold text-center text-2xl bg-orange-500 rounded p-5">Store Registration</div>
        <div className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Shop Name*</div>
        <input className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" value={currentinput.field1} onChange={(e)=>{valuesetter('field1',e)}}/>
        <div className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Shop Address*</div>
        <input type='text' className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" value={currentinput.field2} onChange={(e)=>{valuesetter('field2',e)}}/>
        <button className="text-white bg-orange-500 rounded  py-2 md:mx-[40%] mx-[35%] my-3 border-orange-500 border-2  " onstoreinfo={registerstore}  >Create a store</button>

      </form>


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
