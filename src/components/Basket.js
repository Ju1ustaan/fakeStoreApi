import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import Count from './Count'

const Basket = ({ newCart }) => {
    // состояние моего каунта 
    const [productCart, setProductCart] = useState(newCart)
    
    const increase = (id) => {
        setProductCart((productCart) => {
            return productCart.map((el) => {
                if (el.id === id){
                    return {...el, count: el.count++}
                }else{
                    return el
                }
            })
        })
    }

    const decrease = (id) => {
        setProductCart((productCart) => {
            return productCart.map((el) => {
                if (el.id === id){
                    return {...el, count: el.count--}
                }else{
                    return el
                }
            })
        })
    }

// Функция навешенная на svg при нажатии (удаляет товар с корзины)

const deleteProduct = (id) => {
    setProductCart((productCart) => (productCart.filter((el) => id !== el.id)))
}


return (
    <>
        {
            productCart.map((el) => (
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img src={el.image} alt={el.title} className="w-full rounded-lg sm:w-40" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">{el.title}</h2>
                            <p className="mt-1 text-xs text-gray-700">{el.description}</p>
                            <p className="mt-1 text-xs text-gray-700">{ }</p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <Count increase={increase} decrease={decrease} count={el.count} id={el.id} deleteProduct={deleteProduct} />
                            <div className="flex items-center space-x-4">
                                <p className="text-sm">${Math.round(el.price) * el.count}</p>
                                <svg onClick={() => deleteProduct(el.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                </div>

            ))
            
        }
        
    </>
)
}

export default Basket