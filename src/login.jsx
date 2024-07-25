import React from "react";
import { useState  } from "react";
import useData from "./contextApi";
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'

 
 const userCredentials = []

function Login(){
    const {setglobaldata,setLoginDetails} = useData()
   
    
    const Navigate = useNavigate()
    let [shuffleform,setshufflevalue] = useState(true);
    let [globaluserdata, setglobaluserdata] = useState({
        username : "",
        email : "",
        name : "",

    })
    
    let [image,setimage]= useState()
    let [inputfield,setinputfield] = useState({
        firstname : "",
        lastname : "",
        username : "",
        email : "",
        password : "",
        confpassword : "",

    })

    function formshuffle(){
        setshufflevalue(!shuffleform);
    }

    function inputchangehandler(inputfieldno,inputvalue){
        setinputfield((prev_value)=>({...prev_value, [inputfieldno] : inputvalue.target.value}))
    }

    async function postdata(){
        if(inputfield.password === inputfield.confpassword){
        const formdata = new FormData()
        formdata.append('firstname',inputfield.firstname)
        formdata.append('lastname',inputfield.lastname)
        formdata.append('username',inputfield.username)
        formdata.append('email', inputfield.email)
        formdata.append('password', inputfield.password)
        formdata.append('profileimage', image)
       
        try {
            alert('submitted')
           const response = await axios.post('http://localhost:3000/api/users/register',formdata)
           alert('data has been submitted')
        } catch (error) {
            alert('error')
        }
    }else{
        alert('passwords do not match')
    }
    } 

       

      async function handleLogin(){
       if(inputfield.username && inputfield.password ){
       
        alert('submitted')
        
        let usercred = {
            username : inputfield.username,
            password : inputfield.password
        }

            await axios.post('http://localhost:3000/api/users/login', usercred)
            .then((resp)=>{
             alert('login request has been recieved')
             console.log(resp.data)
             setLoginDetails(resp.data.username)
            const data = [resp.data.firstname,resp.data.lastname,resp.data.username,resp.data.email,resp.data.profileimage]
            userCredentials.push(resp.data.firstname,resp.data.lastname,resp.data.username,resp.data.email)
            console.log(userCredentials)
            setglobaldata(resp.data)
            Navigate(`/add-items/${data[0]}/${data[1]}/${data[2]}/${data[3]}/${encodeURIComponent(data[4])}`)
            })
            .catch(()=>{alert('can not validate login request')})
     
        
        }else{
            alert('you must fill both fields to login')
        }
       
       }


    function imagehandler(e){
         setimage(e.target.files[0])
    }
 
    let resethandler = ()=>{
        if(inputfield.username){
    
    Navigate(`/reset-password/${inputfield.username}`);
        }else{
            alert('you must fill username to update password')
        }
    }
    let accountfinder = ()=>{
        Navigate('/account-finder')
    }
    
    return(
        < >
        

 

        <div className="bg-gradient-to-br from-black to-gray-500 min-h-[100vh] pt-10 pb-5"
>
        {!shuffleform && <div className="flex flex-col md:w-[40%] w-[80%]  h-auto rounded-xl mx-auto  bg-[black] ">
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
            <button className="text-white bg-orange-500 rounded px-5 py-2 md:mx-[40%] mx-[35%] my-3 border-orange-500 border-2  " onClick={postdata} >Submit</button>
            <h6 className="md:mx-[25%] mx-[30%] text-white">Already have an account?<span onClick={formshuffle} className="text-black text-orange-500 font-bold cursor-pointer">Login</span></h6>
           
             </div>

            
            
            </div>}

            {shuffleform && <div className="flex flex-col sm:w-[40%] w-[80%] h-auto rounded-xl mx-auto   bg-[black]/[0.9] " >
            <h2 className="text-white font-bold text-center md:text-2xl bg-orange-500 rounded md:p-5 p-3 text-xl">Login</h2>
              <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter Username</h3>
              <input type="text" name="loginuser" required={true} value={inputfield.username} className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" placeholder="enter your username" onChange={(e)=>inputchangehandler('username',e)} />
              
              <h3 className="text-center font-bold text-xl my-[3%] text-orange-500">Enter password</h3>
              <input type="password" name="password" required={true} value={inputfield.password} className="border-orange-500 border-2 mx-[20%] w-[60%] h-[40px] rounded text-center" placeholder="password" onChange={(e)=>inputchangehandler('password',e)} />
              <h5 className="text-center font-bold text-sm my-[3%] text-orange-500 cursor-pointer" onClick={resethandler}>forget password</h5>
              <button className="text-white bg-orange-500 rounded md:px-5 px-5 py-2 mx-[auto] my-3 border-orange-500 border-2  " onClick={handleLogin}>Login</button>
            <h6 className="md:mx-[25%] mx-[30%] text-white">Already have an account?<span onClick={formshuffle} className="text-black text-orange-500 font-bold cursor-pointer">Signup</span></h6>
            <button className="text-white bg-orange-500 rounded px-5 py-2   my- border-orange-500 border-2 w-full " onClick={accountfinder} >Find My Account</button>
                </div>}
                </div>
        </>
    )
        
}


export default Login