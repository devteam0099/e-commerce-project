import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLaptop,faMobile,faCamera,faMagic,faFile } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [buttonstate, setbuttonstate] = useState(false);
  function scroll(event){
     let scrolltrack = event.deltaY
     if(scrolltrack >= 50){
     setbuttonstate(true) 
       
     
     
     }
  }
  function clickevent(){
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
    setbuttonstate(false)
  }
  window.addEventListener('wheel',scroll)
  return (
    <>
    
    <div className="bg-gray-300 h-12  realtive  sticky top-0">
      <div className="">
      <span className="font-bold text-xl px-20 pt-5  ">Products And Services page</span>
    <ul className="flex mx-[700px] ">
      <li className="px-10 text-red-500 cursor-pointer"><a href="#product" className="scroll-smooth	" >products</a></li>
      <li className="px-10 text-red-500 cursor-pointer"><a href="#services" className="scroll-smooth	" >Services</a></li>
    </ul>
    </div>
    {buttonstate &&<button className={`font-bold text-2xl fixed left-[1100px] bottom-20 bg-red-500 h-10 w-10 rounded-xl `} onClick={clickevent} >&uarr;</button>}
    </div>
    
    <div className="w-[100vw] h-[80vh] text-center  " style={{
    backgroundImage: `url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    
  
  }} >
    
    <div className="p-10 " >
        <h2 className="text-red-500 text-2xl p-10">MULTIPURPOSE HTML5 THEME</h2>
        <h1 className="text-red-600 text-6xl">
          R<span className="text-black text-[100px]">A</span>NGO
        </h1>
        <h2 className="text-red-500 text-3xl p-5">a Perfect Theme.</h2>
        <button className="bg-red-500 rounded-2xl p-2 w-40 text-white ">
          BUY TEMPLATE{" "}
        </button>
      </div>
      </div>
      <div className="text-center font-bold text-4xl pt-10 text-red-500" id="product">OUR PRODUCTS</div>

      <div className="flex flex-wrap w-full justify-evenly ">

      <div className="text-center text-red-700 font-bold shadow-lg  shadow-slate-800 w-[300px] m-10 hover:skew-x-1 hover:translate-y-[-5px]">
      <div
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 180,
    width: 300,
  }}
>
</div>
<div className="pt-2 h-12">animated images</div>
</div>

<div className="text-center text-red-700 font-bold shadow-lg  shadow-slate-800 w-[300px] m-10 hover:skew-x-1 hover:translate-y-[-5px]">
      <div
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 180,
    width: 300,
  }}
>
</div>
<div className="pt-2 h-12">animated images</div>
</div>
<div className="text-center text-red-700 font-bold shadow-lg  shadow-slate-800 w-[300px] m-10 hover:skew-x-1 hover:translate-y-[-5px]">
      <div
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 180,
    width: 300,
  }}
>
</div>
<div className="pt-2 h-12">animated images</div>
</div>
<div className="text-center text-red-700 font-bold shadow-lg  shadow-slate-800 w-[300px] m-10 hover:skew-x-1 hover:translate-y-[-5px]">
      <div
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 180,
    width: 300,
  }}
>
</div>
<div className="pt-2 h-12">animated images</div>
</div>
<div className="text-center text-red-700 font-bold shadow-lg  shadow-slate-800 w-[300px] m-10 hover:skew-x-1 hover:translate-y-[-5px]">
      <div
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 180,
    width: 300,
  }}
>
  
</div>
<div className="pt-2 h-12">animated images</div>
</div>
<div className="text-center text-red-700 font-bold shadow-lg  shadow-slate-800 w-[300px] m-10 hover:skew-x-1 hover:translate-y-[-5px]">
      <div
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 180,
    width: 300,
  }}
>
</div>
<div className="pt-2 h-12">animated images</div>
</div>

</div>

<div className="text-center font-bold text-red-500 text-4xl p-10 scroll-smooth bg-red-300	" id="services">OUR SERVICES</div>
<div className="flex justify-evenly flex-wrap">
  <div className="p-10 px-[150px]">
  <div className="rounded-[50%] h-24 pt-3 w-24 text-white text-6xl font-bold bg-red-500  text-center">
  <FontAwesomeIcon icon={faLaptop}/>
  </div>
  <div className="text-center -mx-20">web development</div>
  </div>
  <div className="p-10 px-[150px]">
  <div className="rounded-[50%] h-24 pt-3 w-24 text-white text-6xl font-bold bg-red-500  text-center">
  <FontAwesomeIcon icon={faMobile}/>
  </div>
  <div className="text-center -mx-20">Mobile App development</div>
  </div>

  <div className="p-10 px-[100px] ">
  <div className="rounded-[50%] h-24 pt-3 w-24 text-white text-6xl font-bold bg-red-500  text-center">
  <FontAwesomeIcon icon={faCamera}/>
  </div>
  <div className="text-center -mx-20">Photograghy</div>
  </div>
    
  <div className="p-10 px-[150px] ">
  <div className="rounded-[50%] h-24 pt-3 w-24 text-white text-6xl font-bold bg-red-500  text-center">
  <FontAwesomeIcon icon={faEnvelope}/>
  </div>
  <div className="text-center -mx-20">Email marketing</div>
  </div>
  
  <div className="p-10 px-[150px]  ">
  <div className="rounded-[50%] h-24 pt-3 w-24 text-white text-6xl font-bold bg-red-500  text-center">
  <FontAwesomeIcon icon={faMagic}/>
  </div>
  <div className="text-center -mx-20  ">Graphic Designing</div>
  </div>
  
  <div className="p-10 px-[100px] ">
  <div className="rounded-[50%] h-24 pt-3 w-24 text-white text-6xl font-bold bg-red-500  text-center">
  <FontAwesomeIcon icon={faFile}/>

  </div>
  <div className="text-center -mx-20">File Handling</div>
  </div>
  
  
</div>

    </>
  );
}

export default App;
