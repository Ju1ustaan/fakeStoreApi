import React from 'react'


const Count = ({increase, decrease, count, id}) => {
    return (
        <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => { decrease(id) }}> - </span>
            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={count} min="1" />
            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => { increase(id) }}> + </span>
        </div>
    )
}

export default Count