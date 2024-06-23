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
    <>
    <input className="border-2 border-black" value={input} onChange={(e)=>{setinput(e.target.value)}}/>
    <button onClick={datahandler}>get otp code</button>

    {randnum && <div>
        <div>enter otp code send to email</div>
        <input className="border-2 border-black" value={otp} onChange={(e)=>{setotp(e.target.value)}}/>
        <div>Enter New Password</div>
        <input className="border-2 border-black" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
        <div>Confirm Pasword</div>
        <input className="border-2 border-black" value={confirmpass} onChange={(e)=>{setconfirmpass(e.target.value)}}/>
        <button onClick={passwordchanger}>Change Password</button>
        </div>}
    </>
   )
}
export default Updatepassword