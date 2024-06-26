function Cart() {
    return(
        <>
         <div className="text-black md:mx-[500px] my-5 mx-[30%] md:text-xl">enter otp code send to email</div>
        <input className="border-2 border-orange-500 md:mx-[500px] mx-[100px] w-[50%] md:w-[20%]  rounded h-12" />
        <div className="text-black md:mx-[500px] md:my-5 mx-[30%] md:text-xl">Enter New Password</div>
        <input className="border-2 border-orange-500 md:mx-[500px] mx-[100px] w-[50%] md:w-[20%]  rounded h-12" />
        <div className="text-black md:mx-[500px] md:my-5 mx-[30%] md:text-xl">Confirm Pasword</div>
        <input className="border-2 border-orange-500 md:mx-[500px] mx-[100px] w-[50%] md:w-[20%]  rounded h-12" />
        <button  className="text-white mx-[30%] md:mx-[570px] border-2 border-orange-500 rounded bg-orange-500 md:p-2 p-[5px] mt-2">Change Password</button>
       
        </>
    )
}
export default Cart