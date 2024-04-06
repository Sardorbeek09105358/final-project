import React from 'react'
import img1 from "../../images/Symbol.jpg"
import img2 from "../../images/Symbol-2.png"
import img3 from "../../images/Symbol-3.png"
import seven from "../../images/7.png"
const Card = () => {
    return (
        <div className='w-full mt-10'>
            <h2 className='w-[90%] ml-[180px] mb-10'>Почему выбирают нас?</h2>
            <div className='flex mb-10 w-[90%] justify-around mx-auto'>
                <div className='rounded border-2 w-[250px] h-[200px] flex flex-col items-center justify-center gap-6 cursor-pointer transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105'>
                    <img src={img1} alt="Быстрая  доставка" className='w-[20%] h-[30%]' />
                    <h4 className='capitalize text-[20px]'>Быстрая  доставка</h4>
                </div>
                <div className='rounded border-2 w-[250px] h-[200px] flex flex-col items-center justify-center gap-6 cursor-pointer transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105'>
                    <img src={img2} alt="Быстрая доставка" className='w-[20%] h-[30%]' />
                    <h4 className='capitalize text-[20px] text-center'>Весь товар сертифицирован</h4>
                </div>
                <div className='rounded border-2 w-[250px] h-[200px] flex flex-col items-center justify-center gap-6 cursor-pointer transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105'>
                    <img src={img3} alt="Быстрая  доставка" className='w-[20%] h-[30%]' />
                    <h4 className='capitalize text-[20px]'>Гибкая система скидок</h4>
                </div>
                <div className='rounded border-2 w-[250px] h-[200px] flex flex-col items-center justify-center gap-6 cursor-pointer transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105'>
                    <img src={seven} alt="Быстрая  доставка" className='w-[15%] h-[20%]' />
                    <h4 className='capitalize text-[20px]'>Лет на рынке</h4>
                </div>
            </div>
        </div>
    )
}

export default Card