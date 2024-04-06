import React, { useState } from 'react'

const Brend = () => {
    const data = [
        {
            src: "https://global-mt.ru/upload/iblock/107/prm7chi8jbly1wev6r2f3vs9pzf2x2kq/blog1.jpg",
            title: "Анализатор мочи MIND UA-66",
        },
        {
            src: "https://global-mt.ru/upload/iblock/097/c082dol82vbcbv09rn2cgmnpts5ttv10/blog.png",
            title: "Анализатор мочи",
        },
        {
            src: "https://global-mt.ru/upload/iblock/6c3/2rczy2771l1k419sm9bcbwm88p3prtzt/blog2.jpg",
            title: "Набор пробных линз и оправ",
        },
        {
            src: "https://global-mt.ru/upload/iblock/dbd/yh1angxt70m6exar62ixv9k59ej6cxvk/blog_3_.png",
            title: "Surgicon Щипцы Эльшинга",
        },
        {
            src: "https://global-mt.ru/upload/iblock/28d/5f0hocd7yq8xccyo86mm0e4kfg4csjy6/blog.png",
            title: "Наличие товара уточняйте",
        },
        {
            src: "https://global-mt.ru/upload/iblock/28d/5f0hocd7yq8xccyo86mm0e4kfg4csjy6/blog.png",
            title: "Оптимед Шприц с силиконовым 150",
        },
        {
            src: "https://global-mt.ru/upload/iblock/fa6/xya7gos20jlljchjmsxkh2prwo7eyswf/blog3.png",
            title: "Dornier MedTech Compact",
        },
        {
            src: "https://global-mt.ru/upload/iblock/2d2/wipwp4hi2crjt2zsip2c3g3slgg8tl09/11.png",
            title: "Наличие товара уточняйте",
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
        <div>
            <div className="w-full mt-[100px]">
                <div className="w-full flex justify-center">
                    <div className='w-[30%] mt-10'>
                        <h1 className="text-[35px] font-bold mb-3">Бренды</h1>
                        <p className="capitalize mb-3 text-[22px]">Эксклюзивные поставщики</p>
                    </div>
                    <div className='w-[60%] flex justify-center flex-col'>
                        <div className="flex w-full justify-around flex-wrap">
                            {data.slice(startIndex, startIndex + 3).map((item, index) => (
                                <div key={index} className="w-[320px] h-[280px] rounded-xl cursor-pointer  border-2 flex flex-col justify-between relative hover:shadow-lg transition duration-300 ease-in-out">
                                    <img src={item.src} alt="" className="w-[100%] h-[70%] mx-auto" />
                                    <h1 className="pl-4 capitalize text-[24px] bg-[#F8F7F3] h-[30%] pt-2">{item.title}</h1>
                                </div>
                            ))}
                        </div>
                        <div className="w-full mx-auto flex justify-between h-[200px] items-center">
                            <div className="flex gap-10">
                                <button className="w-[50px] h-[50px] rounded-full border-2  text-black hover:bg-green-700 hover:text-white" onClick={handlePrevClick} disabled={isPrevDisabled}><i className="fa-solid fa-arrow-left"></i></button>
                                <button className="w-[50px] h-[50px] rounded-full border-2  text-black hover:bg-green-700 hover:text-white" onClick={handleNextClick} disabled={isNextDisabled}><i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-[200px] h-[50px] border-2 rounded-3xl text-white  bg-[#088269]">Сертификаты</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brend
