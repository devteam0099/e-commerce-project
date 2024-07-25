
  
  export default function Contact() {
    return (
      <div className="bg-white">
        <div className='border-2 border-black/[0.5] shadow-md w-[80%] h-20 mx-auto mt-4 rounded'>
        <div className="border-2 border-black/[0.1] h-[90%] w-[7%] rounded-[50%] mt-[3px] ml-[4px] inline-block"></div>
        <div className="border-2 border-black/[0.1] h-[70%] w-[30%] mx-10 rounded text-center inline-block"></div>
        <div className="border-2 border-black/[0.1] h-[70%] w-[50%] rounded mx-2 text-center inline-block"></div>
        </div>
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
          <button className="text-white bg-orange-500 rounded px-5 py-2 md:mx-[40%] mx-[35%] my-3 border-orange-500 border-2  ">Load More</button>
        </div>
      </div>
    )
  }
  