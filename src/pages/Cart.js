import { useSelector } from "react-redux";
import Basket from "../components/Basket";

const Cart = () => {
    const cart = useSelector(state => state.cart)
    return (
        <div className="container mx-auto p-5 bg-gray-100 pt-32">
            <h1 className="mb-10 text-2xl ">Корзина</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">

                    {
                        // cart?.map((el) => (
                        //     <Basket  id={el.id} image={el.image} price={el.price} title={el.title} rate={el.rating} desc={el.description}/>
                        // ))
                        <Basket newCart={cart}/>
                    }

            

                </div>
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700 cart__sum">Предворительная сумма</p>
                        <p className="text-gray-700">${}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">НДС</p>
                        <p className="text-gray-700">${}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Итого</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">${} USD</p>
                            <p className="text-sm text-gray-700">с учетом НДС</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}

export default Cart