import React, { useState } from 'react';

export const Main = () => {
    const mainCard = [
        {
            img: "https://global-mt.ru/local/templates/gmt/img/complex1.png",
            text: 'Экспресс лаборатория'
        },
        {
            img: "https://global-mt.ru/local/templates/gmt/img/complex2.png",
            text: 'Лазерная терапия'
        },
        {
            img: "https://global-mt.ru/local/templates/gmt/img/complex3.png",
            text: 'Операционный блок'
        },
        {
            img: "https://global-mt.ru/local/templates/gmt/img/complex1.png",
            text: 'Экспресс лаборатория'
        },
        {
            img: "https://global-mt.ru/local/templates/gmt/img/complex2.png",
            text: 'Лазерная терапия'
        },
        {
            img: "https://global-mt.ru/local/templates/gmt/img/complex3.png",
            text: 'Операционный блок'
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const isPrevDisabled = startIndex === 0;
    const isNextDisabled = startIndex + 3 >= mainCard.length;

    const handlePrevClick = () => {
        if (!isPrevDisabled) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (!isNextDisabled) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className='mt-[100px] w-full'>
            <div className='mt-10'>
                <h1 className='ml-[90px] mb-5 capitalize text-[30px]'>Комплексное оснащение кабинетов</h1>
            </div>
            <div className='flex flex-wrap w-[90%] mx-auto gap-10 justify-around'>
                {mainCard.slice(startIndex, startIndex + 3).map((item, index) => (
                    <div key={index} className='rounded-lg border-2 transition-all duration-800 hover:shadow-lg'>
                        <img src={item.img} alt="" />
                        <h2 className='capitalize h-[50px] mt-3 ml-2 font-semibold text-[18px]'>{item.text}</h2>
                    </div>
                ))}
            </div>
            <div className='w-[80%] flex justify-between mx-auto h-[200px] items-center'>
                <div className='flex gap-5'>
                    <button className={`w-[60px] h-[60px] cursor-pointer transition-all duration-300 rounded-full border-2 border-gray-500 ${isPrevDisabled ? 'bg-[#088269]' : ''}`} onClick={handlePrevClick} disabled={isPrevDisabled}>
                         <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className={`w-[60px] h-[60px] cursor-pointer transition-all duration-300  rounded-full border-2 border-gray-500 ${isNextDisabled ? 'bg-[#088269]' : ''}`} onClick={handleNextClick} disabled={isNextDisabled}>
                    <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div className='flex gap-5'>
                    <button className='w-[240px] h-[40px] border-2 border-[#088269] bg-[#D5D1E1] rounded-3xl text-[#088269]'>Бесплатная консультация</button>
                    <button className='w-[240px] h-[40px] bg-[#088269] rounded-3xl text-white'>Рассчитать стоимость</button>
                </div>
            </div>
        </div>
    );
};
