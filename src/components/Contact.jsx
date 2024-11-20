import React, { useRef, useState } from 'react'

const Contact = () => {
    const useName = useRef();
    const [showData, setShowData] = useState("")
    const sumbmitHandler = (e) => {
        e.preventDefault();
        console.log(useName.current.value);
        setShowData(useName.current.value);
    }
    return (
        <div className='min-h-[40vh] bg-black text-white'>
            <div className="max-w-[500px] mx-auto pt-12">
                <form onSubmit={sumbmitHandler}>
                    <input ref={useName} className='bg-blue-700' type="text" name="" id="" />
                    <button>Submit</button>
                </form>
                {showData && <p>hello my name is {showData}</p>}
            </div>
        </div>
    )
}

export default Contact
