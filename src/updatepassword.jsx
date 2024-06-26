import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function Updatepassword(){
    let[input,setinput] = useState("")
    let[randnum,setrandnum] = useState(null)
    let[otp,setotp] = useState("")
    let[pass,setpass] = useState()
    let[confirmpass,setconfirmpass] = useState()
   const param = useParams()
   const {username} = param
   
   
   function datahandler(){
    let dataobj = {email : input , username : username}
     console.log(dataobj)
     axios.post('http://localhost:3000/api/update-users/change-password',dataobj)
     .then((respsrv)=>{
        console.log(respsrv.data)
        setrandnum(respsrv.data.code)
    })
     .catch(()=>{console.log('error')})
     
   }

   function passwordchanger(){
    
      if(parseInt(otp) === randnum){
        
        console.log(pass,confirmpass)
        if(pass === confirmpass){
          let updateinfo = {
            username : username,
            password : pass
          }
           axios.post('http://localhost:3000/api/update-pass/save-pass',updateinfo)
           .then((updateresp)=>{console.log(updateresp.data.message)})
           .catch((updateerr)=>{alert('error while updating user')})
        }
        else{alert('passwords does not match')}
      }
      else{alert('otp code is not correct')}
   }
   
   return(
    <div className="bg-gradient-to-br from-black to-gray-500 h-[100vh] py-10">
      <div className="text-white md:mx-[570px] mx-[30%] text-xl">Reset Password</div>
    <input className="border-2 border-orange-500 md:mx-[500px] mx-[100px] w-[50%] md:w-[20%] my-5 rounded h-12" value={input} onChange={(e)=>{setinput(e.target.value)}}/><br></br>
    <button onClick={datahandler} className="text-white mx-[30%] md:mx-[570px] border-2 border-orange-500 rounded bg-orange-500 p-2">get otp code</button>

    {randnum && <div>
        <div className="text-white md:mx-[500px] my-5 mx-[30%] text-xl">enter otp code send to email</div>
        <input className="border-2 border-orange-500 md:mx-[500px] mx-[100px] w-[50%] md:w-[20%]  rounded h-12" value={otp} onChange={(e)=>{setotp(e.target.value)}}/>
        <div className="text-white md:mx-[500px] my-5 mx-[30%] text-xl">Enter New Password</div>
        <input className="border-2 border-orange-500 md:mx-[500px] mx-[100px] w-[50%] md:w-[20%]  rounded h-12" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
        <div className="text-white md:mx-[500px] my-5 mx-[30%] text-xl">Confirm Pasword</div>
        <input className="border-2 border-orange-500 md:mx-[500px] mx-[100px] w-[50%] md:w-[20%]  rounded h-12" value={confirmpass} onChange={(e)=>{setconfirmpass(e.target.value)}}/>
        <button onClick={passwordchanger} className="text-white mx-[30%] md:mx-[570px] border-2 border-orange-500 rounded bg-orange-500 p-2 mt-2">Change Password</button>
        </div>}
    </div>
   )
}
export default Updatepassword