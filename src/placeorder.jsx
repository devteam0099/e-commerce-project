'use client'

import { useState } from 'react'
import { RadioGroup,Radio } from '@headlessui/react';
import { useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function placeOrder() {
  let orderInfo = {}
  const [open, setOpen] = useState(true)
  const naviagte = useNavigate()
  const location = useLocation()
     const {color,size,availablestock,name,price,discount} = location.state
     const [isSelected, setIsSelected] = useState(null)
     let [showDebtInfo,setShowDebtInfo] = useState(false)
     const [selectedOption, setSelectedOption] = useState('PKR')
     const [isSelectedCard,setIsSelectedCard] = useState(null)
     const [cardInfo,setCardInfo] = useState({
      cardno : "",
      cvv : "",
      expirydate : "",
      issuedate : ""
     })

     function debtCardInfo(){
        setShowDebtInfo(true)
        
     }

     const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    function onCancel(){
      setOpen(false)
      naviagte('/')
    }
   async function onOrder(e){
    
    if(showDebtInfo){
      let arr= [selectedOption,isSelectedCard,cardInfo.cardno,cardInfo.cvv,cardInfo.issuedate,cardInfo.expirydate]
      if(arr.some((info)=> info === "" || null)){
        alert('please fill and select all the fields as they are mandatory')
      }else{
        orderInfo.orderType = 'Bank payment',
          orderInfo.currency = selectedOption,
          orderInfo.cardname = isSelectedCard,
          orderInfo.cardnumber = cardInfo.cardno,
          orderInfo.cvv = cardInfo.cvv,
          orderInfo.dateOfIssuance = cardInfo.issuedate,
          orderInfo.dateOfExpiry = cardInfo.expirydate,
          orderInfo.orderedProduct = name,
          orderInfo.orderCost = price,
          orderInfo.discount = discount,
          orderInfo.productColor = color,
          orderInfo.productSize = size
  //post request of 
          try {
          const orderStatus = await axios.post('http://localhost:3000/api/place-order/order-details',orderInfo)
          alert(orderStatus.data.message)

          } catch (error) {
            alert('can\'t place order due to some problems')
          }
        
      }
     
      
    }
    else{
      orderInfo.orderType = 'cash on delivery',
      orderInfo.orderedProduct = name,
      orderInfo.orderCost = price,
      orderInfo.discount = discount,
      orderInfo.productColor = color,
      orderInfo.productSize = size

      //axios post request in case of cash on delivery
      try {
        const orderStatus = await axios.post('http://localhost:3000/api/place-order/order-details',orderInfo)
        alert(orderStatus.data.message)

        } catch (error) {
          alert('can\'t place order due to some problems')
        }
      
    }
    console.log(orderInfo)
   }

   function cradInfoSetter(fieldname,fieldvalue){
    setCardInfo(()=>({...cardInfo, [fieldname] : fieldvalue.target.value}))
   }
  
     

 
 
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Order Placement
                  </DialogTitle>
                  <div>Your order will be placed with the followig specifications</div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Product name : {name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Product price : {price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Product discount : {discount}
                    </p>
                    <p className="text-sm text-gray-500">
                      Product color : {color}
                    </p>
                    <p className="text-sm text-gray-500">
                      Product size : {size}
                    </p>
                    <div>Select a Payment Method</div>
                    <RadioGroup value={isSelected} onChange={setIsSelected}>
  <Radio value={true}>
    <div className="flex items-center" onClick={()=>{setShowDebtInfo(false)}}>
      <div className={`flex items-center justify-center w-4 h-4 border border-gray-300 rounded-full m-2 mt-4 p-2 ${ isSelected === true ? 'ring ring-orange-500' : '' }`} >
        <div className="bg-white w-2 h-2 rounded-full"></div>
      </div>
      <span className="ml-2 text-sm font-medium">Cash on Delivery</span>
    </div>
  </Radio>
  <Radio value={false} >
    <div className="flex items-center" onClick={debtCardInfo}>
      <div  className={`flex items-center justify-center w-4 h-4 border border-gray-300 rounded-full m-2 mt-4 p-2  ${ isSelected === false ? 'ring ring-orange-500' : '' }`} >
        <div className="bg-white w-2 h-2 rounded-full " ></div>
      </div>
      <span className="ml-2 text-sm font-medium">Debit Card</span>
    </div>
  </Radio>
</RadioGroup>

     {showDebtInfo && <div>
      <div className='flex'>
      <h3 className='mr-2'>Currency</h3>
      <select value={selectedOption} onChange={handleSelectChange}>
      <option value="PKR">PKR</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
     </div>

     <div className=''>
     <RadioGroup value={isSelectedCard} onChange={setIsSelectedCard} className='flex justify-content-start'>
  <Radio value="Visa Card">
    <div className="flex items-center">
      <div className={`flex items-center justify-center w-4 h-4 border border-gray-300 rounded-full m-2 mt-4 p-2 ${ isSelectedCard === "Visa Card" ? 'ring ring-orange-500' : '' }`} >
        <div className="bg-white w-2 h-2 rounded-full"></div>
      </div>
      <span className="ml-2 text-sm font-medium">Visa Card</span>
    </div>
  </Radio>
  <Radio value="Master Card" >
    <div className="flex items-center" >
      <div className={`flex items-center justify-center w-4 h-4 border border-gray-300 rounded-full m-2 mt-4 p-2 ${ isSelectedCard === "Master Card" ? 'ring ring-orange-500' : '' }`} >
        <div className="bg-white w-2 h-2 rounded-full " ></div>
      </div>
      <span className="ml-2 text-sm font-medium">Master Card</span>
    </div>
  </Radio>
</RadioGroup>


      </div>
      
      <div className='flex justify-around flex-wrap'>
      <div>
      <h3>Enter card number</h3>
      <input type='text ' className='border-2 border-orange-500 rounded ' required={true} onChange={(e)=>{cradInfoSetter('cardno',e)}}/>
      </div>
      <div>
      <h3>Enter CVV</h3>
      <input type='text' className='border-2 border-orange-500 rounded w-[35%]' required={true} onChange={(e)=>{cradInfoSetter('cvv',e)}}/>
      </div>
      <div>
      <h3>Enter Issue Date</h3>
      <input type='date ' className='border-2 border-orange-500 rounded ' required={true} onChange={(e)=>{cradInfoSetter('issuedate',e)}}/>
      </div>
      <div>
      <h3>Enter Expiry Date</h3>
      <input type='Date ' className='border-2 border-orange-500 rounded ' required={true} onChange={(e)=>{cradInfoSetter('expirydate',e)}}/>
      </div>
      </div>
      
      </div>}


                  </div>
                </div>
              </div>
            </div>
            {isSelectedCard && <div className='text-center'>
              <span>Payment of {price } </span><span>{selectedOption} </span><span>will be done via {isSelectedCard}</span>
              </div>}
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={onOrder}
                className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
              >
                Place Order
              </button>
              <button
                type="button"
                data-autofocus
                onClick={onCancel}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
