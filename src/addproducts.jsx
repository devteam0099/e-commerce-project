import {useLocation,useParams } from 'react-router-dom'

function Addproduct(){
   const params = useParams()

     const {firstname,lastname,username,email} = params 
        
    return(
        <>
        
       <div>NAME</div> 
       <div>{`${firstname} ${lastname}`}</div>
       <div>USERNAME</div> 
       <div>{username}</div>
       <div>EMAIL</div> 
       <div>{email}</div> 
        </>
    )
}
export default Addproduct