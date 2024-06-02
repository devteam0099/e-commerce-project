import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight, faCartShopping, faFaceFlushed, faFaceLaugh, faFolder, faFontAwesome, faHandshake, faHome, faInbox, faInfo, faLaptop, faLayerGroup, faList, faPeopleGroup, faPhone, faPlus, faProcedures, faSearch, faSmile, faStore, faTags, faTh, faUser, faUserGroup, faUsersCog } from "@fortawesome/free-solid-svg-icons";
import {Outlet , Link, NavLink} from 'react-router-dom'
import { useState } from "react";

function Navbar(){
    let [shownav,altnav]= useState(false);
    function shownavigation(){altnav(!shownav)}
    return(
        <>
        <nav className="sticky top-0">
        <div className="h-16  bg-[black] w-[100%]">
            
        <div className=" h-full w-full flex justify-between">
            <div className="basis-[30%] mt-2 mx-10 ">
                <input placeholder="Search Here" className="border-[orange] border-2 w-[80%] h-12 rounded-xl" />
                <FontAwesomeIcon icon={faSearch} className="-mx-8 rotate-90 text-gray-500" />
           </div>

            <div className=" basis-[70%] flex justify-around mt-2">

                <div className="text-center">
                <FontAwesomeIcon icon={faHome} className="text-[orange]" />
                <h4 className="text-white"><NavLink to="/" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Home</NavLink></h4>
                </div>

                <div className="text-center">
                <FontAwesomeIcon icon={faTh} className="text-[orange]" />
                <h4 className="text-white"><NavLink to="/catagories" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Catagories</NavLink></h4>
                </div>

                <div className="text-center"> 
                <FontAwesomeIcon icon={faStore} className="text-[orange]" />
                <h4 className="text-white"><NavLink to="/products" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Products</NavLink></h4>
               </div>
               

               <div className="text-center">
                <FontAwesomeIcon icon={faCartShopping} className="text-[orange]" />
                <h4 className="text-white"><NavLink to="/cart" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Cart</NavLink></h4>
                </div>
               
                <div className="text-center hidden md:block">
                <FontAwesomeIcon icon={faPlus} className="text-[orange]" />
                <h4 className="text-white" ><NavLink to="/add-items" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Add Product</NavLink></h4>
                </div>
               
                <div className="text-center hidden md:block">
                <FontAwesomeIcon icon={faPhone} className="text-[orange]" />
                <h4 className="text-white"><NavLink to="/contact-us" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Contact Us</NavLink></h4>
                </div>
                
                <div className="text-center hidden md:block">
                <FontAwesomeIcon icon={faUsersCog} className="text-[orange]" />
                <h4 className="text-white" ><NavLink to="/about-us" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>About Us</NavLink></h4>
                </div>
               
                <div className="text-center hidden md:block">
                <FontAwesomeIcon icon={faUser} className="text-[orange]" />
                <h4 className="text-white"><NavLink to="/login" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Login</NavLink></h4>
                </div>

                <div className="block md:hidden" onClick={shownavigation}>
                <FontAwesomeIcon icon={faList} className="text-[orange]  " />


                </div>
                                
            </div>
            
            </div>
        </div>

       {shownav && <div className=" w-[220px] border-[black] border-8 bg-[black]  text-white text-xl flex flex-col  justify-between ">
            <div  style={{borderBottom: "1px solid gray"}} className="p-2">
                <FontAwesomeIcon icon={faUser} className="text-[orange]" />
                <span onClick={shownavigation} className="mx-6"><NavLink to="/login" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Login</NavLink></span>
            </div>
            <div  style={{borderBottom: "1px solid gray"}} className="p-2">
                <FontAwesomeIcon icon={faPhone} className="text-[orange]" />
                <span onClick={shownavigation} className="mx-6"><NavLink to="/contact-us" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Contact US</NavLink></span>
                
            </div>
            <div  style={{borderBottom: "1px solid gray"}} className="p-2">
                <FontAwesomeIcon icon={faUsersCog} className="text-[orange]" />
                <span onClick={shownavigation} className="mx-6"><NavLink to="/about-us" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>About Us</NavLink></span>
            </div>
            <div  style={{borderBottom: "1px solid gray"}} className="p-2" >
                <FontAwesomeIcon icon={faPlus} className="text-[orange]" />
                <span onClick={shownavigation} className="mx-6"><NavLink to="/add-items" className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Add Product</NavLink></span>
            </div>
        </div>}
        </nav>
        </>
    )
}
export default Navbar;