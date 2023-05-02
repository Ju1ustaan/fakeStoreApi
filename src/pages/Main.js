import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const cats = [
  { "name": "men's clothing",
    "title": "Мужская одежда"
  },
  { "name": "women's clothing",
    "title": "Женская одежда"
  },
  { "name": "electronics",
    "title": "Электроника"
  },
  { "name": "jewelery",
    "title": "Ювелирные изделия"
  }
]

const Main = () => {
const [activeCategory, setActiveCategory] = useState('')
const [getProduct, setGetProduct] = useState([])

useEffect(() => {
    const getData = async () => {
        const { data } = await axios(`https://fakestoreapi.com/products/${activeCategory ? `category/${activeCategory}`: ''}`)
        setGetProduct(data)
    }
    getData()
}, [activeCategory])


// фильтрация по категориям при onClick первый вариант (ФИЛЬТРАЦИЯ КУРИЛЬЩИКА)
// const [filterData, setFilterData] = useState(getProduct)
// const handleOnRemove = (item) => {
//     if (getProduct.length !== filterData.length) {
//         setFilterData(getProduct)
//     } else {
//         const removeItemFromList = (item) => {
//             const newDataSet = filterData.filter((it) => {
//                 return it.category === item
//             })
//             setFilterData(newDataSet)
//         }
//         removeItemFromList(item)
//     }
// }
// const handleOnRemoveAll = () => {
//   setFilterData(getProduct)
// }

  return (
    <section className="container mx-auto p-5 bg-gray-100 pt-32">
      <h1 className="mb-10 text-2xl">Главная</h1>

        <ul className='flex main__list'>
          {
            cats.map((obj) => <li onClick={() => setActiveCategory(obj.name)} className={activeCategory === obj.name ? "active mr-5":"mr-5 hover:text-blue-600 hover:shadow-inner cursor-pointer"} key={obj.name}>{obj.title}</li> )
          }
        </ul>
  
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


          {
            getProduct.map((el) => (
            <Card  key={el.id} getProduct={el} />
            ))
          }



        </div>

    </section>
  )
}

export default Main