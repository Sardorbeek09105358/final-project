import React from 'react'
import { useState } from "react";

const News = () => {
    const data = [
        {
            src: "https://global-mt.ru/upload/iblock/bf8/ano0n6ijiup0fmn9n27ec1rwsg396wvw.jpg",
            title: "Название новости",
            text: "Артикул: 213134В наличии",
        },
        {
            src: "https://global-mt.ru/upload/iblock/200/5nsa9qsdro9y1uh2ndm1gdmqr99zb111.jpg",
            title: "Анализатор мочи",
            text: "Артикул: 213134В наличии",
        },
        {
            src: "https://global-mt.ru/upload/iblock/9ee/hm2apqb7tx5iwsofkm28hh3x5ioxkl9o.jpg",
            title: "Название новости",
            text: "Артикул: 213134В наличии",
        },
        {
            src: "https://global-mt.ru/upload/iblock/978/2id1eomf2svs43w6i06kp314wmlevzwg.png",
            title: "Surgicon Щипцы Эльшинга",
            text: "Артикул: 213134В наличии",
        },
        {
            src: "https://global-mt.ru/upload/iblock/e64/ftyf1uzrmvg2sr3n6a7z2lrysb79mpi5.png",
            title: "Наличие товара уточняйте",
            text: "Артикул: 213134В наличии",
        },
        {
            src: "https://global-mt.ru/upload/iblock/39c/q9a4isjwejsbe2lrj64g45z6qy2nu1uo.jpg",
            title: "Оптимед Шприц с силиконовым 150",
            text: "Артикул: 213134В наличии",
        },
        {
            src: "https://global-mt.ru/upload/iblock/81d/ujhyiq79dm39o0006gjv9bylhjvj80su.jpg",
            title: "Dornier MedTech Compact",
            text: "Артикул: 213134В наличии",
        },
        {
            src: "https://global-mt.ru/upload/iblock/c33/cfhdpirjsf5mxgcn11us6ldxyu7yd2mv.jpg",
            title: "Наличие товара уточняйте",
            text: "Артикул: 213134В наличии",
        },
    ];


    const [startIndex, setStartIndex] = useState(0);
    const isPrevDisabled = startIndex === 0;
    const isNextDisabled = startIndex + 3 >= data.length;

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
        <div className="w-full mt-[100px]">
            <div className="w-full flex justify-center">
                <div className='w-[30%] mt-10'>
                    <h1 className="text-[35px] font-bold mb-3">Новости <br /> компании</h1>
                </div>
                <div className='w-[60%] flex justify-center flex-col'>
                    <div className="flex w-full justify-around flex-wrap">
                        {data.slice(startIndex, startIndex + 3).map((item, index) => (
                            <div key={index} className="w-[300px] h-[330px] rounded-xl cursor-pointer justify-between pt-2 pb-4  border-2 flex flex-col gap-2 relative hover:shadow-lg transition duration-300 ease-in-out">
                                <img src={item.src} alt="" className="w-[60%] h-[70%] mx-auto" />
                                <div className=''>
                                    <h1 className="ml-4 capitalize text-[24px]">{item.title}</h1>
                                    <p className="text-[#7A7687] text-[13px] font-normal ml-4">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full mx-auto flex justify-between h-[200px] items-center">
                        <div className="flex gap-10">
                            <button className="w-[50px] h-[50px] rounded-full border-2  text-black hover:bg-green-700 hover:text-white" onClick={handlePrevClick} disabled={isPrevDisabled}><i className="fa-solid fa-arrow-left"></i></button>
                            <button className="w-[50px] h-[50px] rounded-full border-2  text-black hover:bg-green-700 hover:text-white" onClick={handleNextClick} disabled={isNextDisabled}><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-[200px] h-[50px] border-2 rounded-3xl text-white  bg-[#088269]">Все товары</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News

