import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="container mx-auto p-5  bg-gray-100 flex flex-col justify-center items-center h-full">
            <h2 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12">Добро подаложвать, на мою работу с React и Redux!</h2>
            <ul>
                <li className='text-5xl list-disc text-center list-inside lg:w-7/12 mx-auto mt-10'> &#129304;</li>
                <li className='list-disc text-center list-inside lg:w-7/12 mx-auto '>Фильтрация в <strong><em>корзине</em></strong> не работает совсем (то есть, если выбрат на главной странице один товар дважды, то в корзине будет два одинаковых товара)</li>
                <li className='list-disc text-center list-inside lg:w-7/12 mx-auto '>В корзине <strong><em>счетчик count</em></strong> работает не корректно (когда нажимаю на количество товара увеличивается или уменьшается количество всех товаров)</li>
                <li className='list-disc text-center list-inside lg:w-7/12 mx-auto '>первое</li>
                </ul> 
            <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12 mb-5 ">
                {/* В этой работе я продемонстрировал свое умение работать с такой библиотекой как Redux. Работа была не легкой, много чему я научился делать в проссесе выполнения. Например, была проблема с количеством товара в корзине, когда я прибовлял какой либо товар у меня прибовлялись и другие товары в корзине. Как и подобает разработчику я искал ответы во всемирной паутине. Рад что вы оценили мою работу.*/}  
            </p> 
            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                <NavLink to="/" className="text-lg">Вернуться на главную</NavLink>
            </div>
        </div>
    )
}

export default Contact