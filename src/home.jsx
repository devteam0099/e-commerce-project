import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
  let [image,setimage] = useState(null)
  let [image2,setimage2] = useState(null)
  let [image3,setimage3] = useState(null)
  let [text,settext] = useState("")
  
    
    async function submithandler(e){
        e.preventDefault()
        let formdata = new FormData()
        formdata.append('username', text)
        formdata.append('image1', image)
        formdata.append('image2',image2)
        formdata.append('image3',image3)

        
       try{
        alert("submitted")
       await axios.post('http://localhost:3000/',formdata)
       }
       catch{
        alert("err")
       }
    }
  return (
    <div>
      <form encType='multi-part/formdata' method='Post'>
      <input type='text' onChange={(e)=>{settext(e.target.value)}} className='border-[black] border-2' />
      <input type='file' onChange={(e)=>{setimage(e.target.files[0])}} />
      <input type='file' onChange={(e)=>{setimage2(e.target.files[0])}} />
      <input type='file' onChange={(e)=>{setimage3(e.target.files[0])}} />
      <button onClick={submithandler}>submit</button>
      </form>
    </div>
  )
}
