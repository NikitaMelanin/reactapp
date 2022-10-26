import React, {useState} from 'react'
import { products } from '../data/products'
import { IProduct } from '../models'


interface ProductProps {
   product: IProduct
}

export function Product ({product}:ProductProps) {

   const [details, setDetails] = useState(false)

   const btnBgClassName = details ? 'bg-red-100' : 'bg-white-400'

   const btnClasses = ['py-2 px-4 border', btnBgClassName]
   return (
      <div
         className='mb-2 mt-2 border py-2 px-4 rounded flex flex-col items-center'
         >
            <img src = {product.image} className="w-1/6" alt = {product.title}/>
            <p> { product.title}</p>
            
            <p className='font-bold'>Price: <span className="text-red-600"style = {{}}> {product.price}</span></p>
            
            <button 
               className={btnClasses.join(' ')}
               onClick={() => setDetails(prev => !prev)}
            >
               { details ? "Hide Details" : "Show Details" }
            </button>
            {details && <div>
               <p>{product.description}</p>
               

            </div>}
            <p className='border bg-yellow-100 mb-2 mt-2 flex'> Rate: <span style ={{ fontWeight: 'bold'}}> {product?.rating?.rate}</span></p>
      </div>
   )
}