import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Main = () => {
const [getProduct, setGetProduct] = useState([])

useEffect(() => {
    const getData = async () => {
        const { data } = await axios(`https://fakestoreapi.com/products`)
        setGetProduct(data)
    }
    getData()
}, [])


// фильтрация по категориям при onClick 

const [filterData, setFilterData] = useState(getProduct)

const handleOnRemove = (item) => {
    if (getProduct.length !== filterData.length) {
        setFilterData(getProduct)
    } else {
        const removeItemFromList = (item) => {
            const newDataSet = filterData.filter((it) => {
                return it.category === item
            })
            setFilterData(newDataSet)
        }
        removeItemFromList(item)
    }
}

const handleOnRemoveAll = () => {
  setFilterData(getProduct)
}

  return (
    <section className="container mx-auto p-5 bg-gray-100 pt-32">
      <h1 className="mb-10 text-2xl cursor-pointer" onClick={() => {handleOnRemoveAll()}}>Главная</h1>
        <ul className='flex'>
          <li className="mr-5 hover:text-blue-600 hover:shadow-inner cursor-pointer" onClick={() => {handleOnRemove("men's clothing")}}>Мужская одежда</li>
          <li className="mr-5 hover:text-blue-600 hover:shadow-inner cursor-pointer" onClick={() => {handleOnRemove("women's clothing")}}>Женская одежда</li>
          <li className="mr-5 hover:text-blue-600 hover:shadow-inner cursor-pointer" onClick={() => {handleOnRemove("electronics")}}>Бытовая техника</li>
          <li className="mr-5 hover:text-blue-600 hover:shadow-inner cursor-pointer" onClick={() => {handleOnRemove("jewelery")}}>Ювелирные изделия</li>
        </ul>
  
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


          {
            // getProduct.map((el) => (
            <Card  getProduct={filterData} />
            // ))
          }



        </div>

    </section>
  )
}

export default Main