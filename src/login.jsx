import { useState } from "react";
import sample7 from './images/sample7.jpg'
import sample8 from './images/sample8.jpg'
import sample1 from './images/sample1.avif'
import axios from 'axios'
function Login(){
    let [shuffleform,setshufflevalue] = useState(true);
    let [image,setimage]= useState()
    let [inputfield,setinputfield] = useState({
        firstname : "",
        lastname : "",
        username : "",
        email : "",
        password : "",
        confpassword : "",

    })
    console.log(inputfield)
    function formshuffle(){
        setshufflevalue(!shuffleform);
    }
    function inputchangehandler(inputfieldno,inputvalue){
        setinputfield((prev_value)=>({...prev_value, [inputfieldno] : inputvalue.target.value}))
    }
    function postdata(){
       
        const {firstname,lastname,email,username,password} = inputfield
        
        async function backend(inputfield){
            console.log(inputfield)
        await fetch('/api/login', {
             method: 'post',
             body: JSON.stringify(firstname,lastname,email,username,password),
             headers: {
               'Content-Type': 'application/json'
             }
           })
           .then((resp) => { alert("data is successfully sent to server")
            
            })
           .catch(() => { alert("error sending data") })
           console.log("after sending to server" + firstname,lastname,email,username,password)
          console.log( typeof(firstname,lastname,email,username,password))
          
    } backend()}
    function imagehandler(e){
         setimage(e.target.files[0])
    }
    return(
        < >
        <div style={{
        backgroundImage: `url(${sample8})`,
        backgroundSize: 'cover'}} className="  min-h-[100vh] py-[10%] "
>
        {!shuffleform && <div className="flex flex-col w-[40%] h-auto rounded-xl mx-auto  bg-[black] ">
            <div>
                <h2 className="text-white font-bold text-center text-2xl bg-orange-500 rounded p-5">Register</h2>
                <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">First Name</h3>
                <input type="text" required={true} value={inputfield.firstname} name="firstname" className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" placeholder="first name" onChange={(e)=>inputchangehandler('firstname',e)} />
                <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Last Name</h3>
                <input type="text" name="lastname" required={true} value={inputfield.lastname} className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" placeholder="last name" onChange={(e)=>inputchangehandler('lastname',e)} />
                
            <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Username</h3>
            <input type="text" name="username" required={true} value={inputfield.username} className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" placeholder="username" onChange={(e)=>inputchangehandler('username',e)} />
            <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Email</h3>
            <input type="email" name="email" required={true} value={inputfield.email} className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" placeholder="email" onChange={(e)=>inputchangehandler('email',e)} />
            <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Password</h3>
            <input type="password" name="password" required={true} value={inputfield.password} className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" placeholder="password" onChange={(e)=>inputchangehandler('password',e)} />
            <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Confirm Password</h3>
            <input type="password" required={true} value={inputfield.confpassword} className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center " placeholder="confirm password" onChange={(e)=>inputchangehandler('confpassword',e)} />
            <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Profile Image</h3>
            <input type="file" className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded" onChange={imagehandler}  />
            <button className="text-white bg-orange-500 rounded px-5 py-2 mx-[40%] my-3 border-orange-500 border-2  " onClick={postdata} >Submit</button>
            <h6 className="mx-[25%] text-white">Already have an account?<span onClick={formshuffle} className="text-black text-orange-500 font-bold cursor-pointer">Login</span></h6>
           
             </div>

            
            
            </div>}

            {shuffleform && <div className="flex flex-col w-[40%] h-auto rounded-xl mx-auto   bg-[black]/[0.9] " >
            <h2 className="text-white font-bold text-center text-2xl bg-orange-500 rounded p-5">Login</h2>
              <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Username</h3>
              <input type="text" name="loginuser" required={true} value={inputfield.username} className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" placeholder="enter your username" onChange={(e)=>inputchangehandler('password',e)} />
              
              <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Username</h3>
              <input type="password" name="password" required={true} value={inputfield.password} className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" placeholder="password" onChange={(e)=>inputchangehandler('password',e)} />
              <button className="text-white bg-orange-500 rounded px-5 py-2 mx-[40%] my-3 border-orange-500 border-2  ">Login</button>
            <h6 className="mx-[25%] text-white">Already have an account?<span onClick={formshuffle} className="text-black text-orange-500 font-bold cursor-pointer">Signup</span></h6>
           
                </div>}
                </div>
        </>
    )
}
export default Login