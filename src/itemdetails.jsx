'use client'

import { useState,useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import Slider from 'react-smart-slider'
import { useParams ,useLocation, Navigate} from 'react-router-dom'

const orderobject = {}

//product details
const product = {
   name: '',
   price: '$192',
   href: '#',
   colors : [],
   sizes : [],
  //  colors: [
  //    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //  ],
  //  sizes: [
  //    { name: 'XXS', inStock: false },
  //    { name: 'XS', inStock: true },
  //    { name: 'S', inStock: true },
  //    { name: 'M', inStock: true },
  //    { name: 'L', inStock: true },
  //    { name: 'XL', inStock: true },
  //    { name: '2XL', inStock: true },
  //    { name: '3XL', inStock: true },
  //  ],
   description:
     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
   highlights: [
     'Hand cut and sewn locally',
     'Dyed with our proprietary colors',
     'Pre-washed & pre-shrunk',
     'Ultra-soft 100% cotton',
   ],
   details:
     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
 }
 const reviews = { href: '#', average: 4, totalCount: 117 }
 
  function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
  }
 


export default function Itemdetails() {
  const location = useLocation()
  console.log(location.state)
  const {productName,productDiscount,productCatagory,productDisccription,productVarients,productStock,productPrice,productColors,productSizes,productImages} = location.state
   console.log(productSizes)
   const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [order,setorder] = useState(null)
  const sliderimages = [
   {url : productImages[0]},
   {url : productImages[1]},
   {url : productImages[2]},
   {url : productImages[3]}
  ]

  
    if(product.sizes.length === 0){
      productSizes.map((itemSize) => {
        console.log(itemSize)
        const key = Object.keys(itemSize)
        let name = key[0]
        let stock = itemSize[name]
        product.sizes.push({ name : name, inStock: stock })
      })
    
    }
      

  
   console.log(product.sizes) 
  if(product.colors.length === 0){
    productColors.map((itemcolor)=>{
      
     
        const colorClass = ['black', 'white'].includes(itemcolor)
        ? `bg-${itemcolor}`
        : `bg-[${itemcolor}]`
        console.log(colorClass)
        product.colors.push({ name: itemcolor, class: colorClass, selectedClass: `ring-${itemcolor}-400` })
      
     
    })
    
  }
  
  
  function placeOrder(e){
    e.preventDefault()
   
   
   orderobject.color = selectedColor.name
   orderobject.size = selectedSize.name
   orderobject.availableStock = selectedSize.inStock
   orderobject.price = productPrice
   orderobject.name = productName
   orderobject.discount = productDiscount
   console.log(orderobject)
   setorder(true)

  }
 
  console.log(orderobject)

  if(order){
   return <Navigate to="/place-order" state={orderobject} />
  }

  return (
    <div className="bg-white">


      <div className="pt-6">
      
       <div className='w-[80%] mx-auto'>
       <Slider slides={sliderimages} />  
       </div>


        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productName}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{productPrice}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
         
      {/* colors */}

      <div>
  <h3 className="text-sm font-medium text-gray-900">Color</h3>
  <fieldset aria-label="Choose a color" className="mt-4">
    <RadioGroup 
      value={selectedColor} 
      onChange={setSelectedColor} 
      className="flex items-center space-x-3"
    >
      {product.colors.map((color) => (
      <Radio
      key={color.name}
      value={color}
      aria-label={color.name}
      className={classNames(
        `${color.selectedClass}`,
         `bg-${color.name}-500`,
         
        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1 group-data-[focus]:border group-data-[checked]:border-orange-500',
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          color.class,
          'h-8 w-8 rounded-full border border-black border-opacity-10',
        )}
      />
    </Radio>




      ))}
    </RadioGroup>
  </fieldset>
</div>


      {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={size.inStock === false}
                        className={classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock === 'true' ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-orange-500"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            >
                              <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>


                </fieldset>
              </div>
                
              
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
              
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             onClick={placeOrder} >
                Place Order
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            
              
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Description and specifications</h3>

              <div className="mt-4">
                {productDisccription}
              </div>
            </div>

           
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Discounts</h3>

              <div className="mt-4">
                {productDiscount}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Catagory</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{productCatagory}</p>
              </div>

              <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Stock Available</h3>

              <div className="mt-4">
                {productStock}
              </div>
            </div>


            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
