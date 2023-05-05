import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const cats = [
  {
    "name": "men's clothing",
    "title": "Мужская одежда"
  },
  {
    "name": "women's clothing",
    "title": "Женская одежда"
  },
  {
    "name": "electronics",
    "title": "Электроника"
  },
  {
    "name": "jewelery",
    "title": "Ювелирные изделия"
  }
]

const Main = () => {
  const [activeCategory, setActiveCategory] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [getProduct, setGetProduct] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      const { data } = await axios(`https://fakestoreapi.com/products/${activeCategory ? `category/${activeCategory}` : ''}`)
      setGetProduct(data)
    }
    getData().finally(() => setIsLoading(false))
    
  }, [activeCategory])
  
  // console.log(getProduct);
  return (
    <section className="container mx-auto min-h-screen p-5 bg-gray-100 pt-32">
      <h1 className="mb-10 text-2xl">Главная</h1>

      <ul className='flex main__list'>
        {
          cats.map((obj) => <li onClick={() => setActiveCategory(obj.name)} className={activeCategory === obj.name ? "active mr-5 font-extrabold" : "mr-5 hover:text-blue-600 hover:shadow-inner cursor-pointer"} key={obj.name}>{obj.title}</li>)
        }
      </ul>

      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


        {
          isLoading ? (
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
              <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-4 h-24 w-24"></div>
            </div>
          ) : (
            getProduct.map((el) => (
              <Card key={el.id} getProduct={el} />
            ))
          )
        }



      </div>

    </section>
  )
}

export default Main