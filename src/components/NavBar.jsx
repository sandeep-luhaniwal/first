import React, { useState } from 'react'

const NavBar = () => {
    const [count, setCount] = useState(0)

    const [chooseColor, setChooseColor] = useState("one");
    return (
        <div className='min-h-screen bg-black text-white'>
            <p className='text-center pt-[22px] text-[40px] font-bold'>Count</p>
            <div className="flex gap-5 justify-center items-center">
                <button onClick={() => setCount(count + 2)} className='bg-red-600 p-4 text-2xl'>+</button>
                <p className='bg-pink-600 p-4 text-2xl'>{count}</p>
                <button onClick={() => setCount(count - 2)} className='bg-red-600 p-4 text-2xl'>-</button>
            </div>



            <div className='flex gap-5 justify-center pt-10'>
                <span onClick={() => setChooseColor("one")}>white</span>
                <span onClick={() => setChooseColor("two")}>red</span>
                <span onClick={() => setChooseColor("three")}>orange</span>
                <span onClick={() => setChooseColor("four")}>pink</span>
            </div>

            <div className="flex justify-center gap-4 pt-4">
                {chooseColor === "one" || <span className='w-10 h-10 block bg-white'></span>}
                {chooseColor === "two" ||  <span className='w-10 h-10 block bg-red-600'></span>}
                {chooseColor === "three" ||  <span className='w-10 h-10 block bg-orange-600'></span>}
                {chooseColor === "four" ||  <span className='w-10 h-10 block bg-pink-600'></span>}
               
               
            </div>
        </div>
    )
}

export default NavBar
