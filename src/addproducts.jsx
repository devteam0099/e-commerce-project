import {useParams,useNavigate } from 'react-router-dom'

function Addproduct(){
   const params = useParams()
   const navigate = useNavigate()

     const {firstname,lastname,username,email,profileimage} = params 
     function navhandler(){
      navigate('/product-cred')
     }
        
    return(
        <div className='bg-gradient-to-br from-black to-gray-500 pt-[3%] pb-[3%]'>
        <img src={profileimage} alt='No Profile Image' className='w-[150px] h-[150px] border-4 border-orange-500 rounded-[50%] mx-auto ' />
        
       <div className='mx-auto w-[200px] text-center text-xl mt-2 font-bold text-white'>{`${firstname} ${lastname}`}</div>
       
       <div className='mx-auto w-[200px] text-center text-xl mt-2 font-bold text-white'>{username}</div>
       
       <div className='mx-auto w-[200px] text-center text-xl mt-2 font-bold text-white'>{email}</div> 
       <button className='bg-orange-500 rounded p-2 h-[50px] w-[15%] mx-auto mx-[43%] mt-2' onClick={navhandler}>Create a Product</button>
       
       
        </div>
    )
}
export default Addproduct