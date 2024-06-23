import { useState ,useEffect} from "react";
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'

let PassworsReset = ()=>{
    const params = useParams();
    const username = params.username
    let navigate = useNavigate()
    
    
    

    let [currentinputvalue,setinputvalue] = useState({
          email : '',
          otp : '',
          password : '',
          confirmpass : ''
    })
    let inputvaluefiller = (inputfield , inputvalue)=>{
          setinputvalue((prev_value)=>({...prev_value , [inputfield] : inputvalue.target.value}))
    }

    
      let otphandler = async () => {
        
        const userdata = { email: currentinputvalue.email, username: username }
        console.log(userdata)
        try {
          alert('password has been changed successfully')
          const response = await axios.post('http://localhost:3000/api/update-users/change-password', userdata)
          localStorage.setItem('data',response.data)
          
          console.log("response from server", response)
          console.log(localStorage.getItem('data'))
          navigate('/login') 
        } catch (error) {
          alert('password did not updated', error)
        }
        setRendered(true)
      
      }
      
      console.log(localStorage.getItem('data'))    
    
    
   return(
    <div className="bg-black/[0.1]">
    <div className="sm:w-[90%]  md:w-[50%] mx-auto pt-10">
        <form className="">
            <label className="m-2 text-orange-500 text-4xl">Reset Password</label>
        <div className="my-10  text-xl">Enter a valid Email address</div>
        <input type='text' className="border-2 border-black rounded w-[40%]" value={currentinputvalue.email} required={true} onChange={(e)=>{inputvaluefiller('email',e)}} />
        <button className="bg-[black] text-orange-500 rounded p-1 mx-2" >get OTP code</button>
        <div className="text-red-500">Email address must be a valid email address on which the account exists</div>
        <div className="my-5">Enter an OTP send to above mentioned Email</div>
        <input type="number" className="border-2 border-black rounded" value={currentinputvalue.otp} onChange={(e)=>{inputvaluefiller('otp',e)}}/>
        <div className="my-5">Enter new password</div>
        <input type="text" className="border-2 border-black rounded" value={currentinputvalue.password} onChange={(e)=>{inputvaluefiller('password',e)}}/>
        <div className="my-5">Confirm new password</div>
        <input type="text" className="border-2 border-black rounded" value={currentinputvalue.confirmpass} onChange={(e)=>{inputvaluefiller('confirmpass',e)}}/><br></br>
        <button className="bg-[black] text-orange-500 rounded p-1 m-2" onClick={otphandler}>Change Password</button>
        </form>
    </div>
    </div>
   )
}
export default PassworsReset;