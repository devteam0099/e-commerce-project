import axios from 'axios'
import { useState,useEffect } from 'react'
  
  export default function Contact() {
    let [data,setdata] = useState([])
      useEffect(()=>{
        ;(
          async()=>{
            alert('api calls')
            try {
              const resp = await axios.get('http://localhost:3000/api/send-resp/send-data')
              setdata([...data,resp.data])
               
            } catch (error) {
              alert('problem in validating request')
            }
          }
        )()
      },[])
      console.log(data)

   
      return(
        <> 
         
        <>  <table className='mx-auto my-10 w-[95%] text-center'>
        <thead>
          <tr className='border-2 border-black h-12'>
            {data[0] && data[0][0] && Object.keys(data[0][0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody className='border-2 border-black'>
          {data[0] &&
            data[0].map((row, index) => (
              <tr key={index} className='border-2 border-black'>
                {Object.values(row).map((value, index) => (
                  <td key={index} className='border-2 border-black p-2'>{value} </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    
  

        
  </>

      
  </>

      )

     
  }
  