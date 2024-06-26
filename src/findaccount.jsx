import axios from "axios";
import { useState } from "react";

let Accountfinder = () => {
  
  let [emailshuffle, setemailshuffle] = useState(true);
  let [usernameshuffle, setusernameshuffle] = useState(false);
  let [orgvalue,altvalue] = useState("")
  let[accountdetails,setaccountdetails]= useState(false)
  let[errormsg,seterrormsg]= useState()
  let[displayerror,setdisplayerror]= useState(false)
  let[displaydata,setdata]= useState()

  function emailshuffler() {
    altvalue("")
    setemailshuffle(false);
    setusernameshuffle(true);
  }

  function usernameshuffler() {
    altvalue("")
    setemailshuffle(true);
    setusernameshuffle(false);
  }

  function changehndler(e){
        altvalue(e.target.value)
        
  }

 

 async function find(){
    let obj = {cred : orgvalue}
    
   await axios.post('http://localhost:3000/api/search-user/find-user',obj)
   .then((res) => {
    if (res.data.error) {
      seterrormsg(res.data.error);
      setdisplayerror(true)
      setaccountdetails(false)
    } else {
      let name = res.data.firstname + " " + res.data.lastname
      let user = res.data.username
      let emailadd = res.data.email
      setaccountdetails(true)
      setdisplayerror(false)
      setdata({name, user, emailadd})
    }
  })
  .catch((error) => {
    alert('Error in finding an account'); // Catch any other errors
  });


  }

  
  return (
    <div className="bg-gradient-to-br from-black to-gray-500 h-[100vh] py-10">
      {emailshuffle && (
        <div className="mx-auto md:w-[40%] text-white text-center  ">
          <div className=" text-xl">Enter Email to find an account</div>
          <input type="text" className="border-orange-500 border-[3px] rounded h-12 w-[80%] my-5 text-black" value={orgvalue} onChange={(e)=>{changehndler(e)}} /> <br></br>
          <button onClick={emailshuffler}>
            Find an account using username instead?
          </button>
        </div>
      )}
      {usernameshuffle && (
        <div className="mx-auto md:w-[40%] text-white text-center ">
          <div className="m-2 text-xl">Enter username to find an account</div>
          <input type="text" className="border-orange-500 border-[3px] rounded h-12 w-[80%] my-5 text-black" value={orgvalue} onChange={(e)=>{changehndler(e)}} />
          <button onClick={usernameshuffler}>
            Find an account using email instead?
          </button>
        </div>
      )}
      <button className=" w-38 md:mx-[42%] mx-[20%] my-[5%] border-2 border-black rounded bg-orange-600 text-xl p-2" onClick={find}>Search for an account</button>
    
    {accountdetails && <div className="md:w-[50%] w-[85%] mx-auto bg-black text-white border-4 border-orange-600 rounded-xl text-center p-4 mb-4">
      <div className="text-3xl py-4">Account Found !</div>
       <div className="text-xl">{ `Name : ${displaydata.name}`}</div>
       <div className="text-xl">{`Username : ${displaydata.user}`}</div>
       <div className="text-xl">{`Email Address : ${displaydata.emailadd}`}</div>
       </div>}

       {displayerror && <div className="text-2xl text-white md:w-[20%] w-[70%] mx-auto">{errormsg}</div>}
    </div>
  );
};

export default Accountfinder;

