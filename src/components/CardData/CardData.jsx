import { useState } from "react";

const Data = () => {
    const data = [
        {
            src: "https://global-mt.ru/upload/iblock/6e3/lcz95jirefxxupo4c2ej9b7po14xvyse.jpg",
            title: "Анализатор мочи MIND UA-66",
            text: "Артикул: 213134В наличии",
            price: 300000
        },
        {
            src: "https://global-mt.ru/upload/iblock/46d/3f6jgxt1omxj179xx5fe0d3krx8fl50n.png",
            title: "Анализатор мочи",
            text: "Артикул: 213134В наличии",
            price: 300000
        },
        {
            src: "https://global-mt.ru/upload/iblock/f9b/a1qfim1k3t2i3isda18s1y3hmbohiq2m.jpg",
            title: "Набор пробных линз и оправ",
            text: "Артикул: 213134В наличии",
            price: 300000
        },
        {
            src: "https://global-mt.ru/upload/iblock/3e8/i14ubmr59ja9x4krgmywu50nur4z1ikb.jpg",
            title: "Surgicon Щипцы Эльшинга",
            text: "Артикул: 213134В наличии",
            price: 300000
        },
        {
            src: "https://global-mt.ru/upload/iblock/a74/hs4lqjndsje84qfn6ijw427orn0huzhp.jpg",
            title: "Наличие товара уточняйте",
            text: "Артикул: 213134В наличии",
            price: 300000
        },
        {
            src: "https://global-mt.ru/upload/iblock/3e8/i14ubmr59ja9x4krgmywu50nur4z1ikb.jpg",
            title: "Оптимед Шприц с силиконовым 150",
            text: "Артикул: 213134В наличии",
            price: 300000
        },
        {
            src: "https://global-mt.ru/upload/iblock/81d/ujhyiq79dm39o0006gjv9bylhjvj80su.jpg",
            title: "Dornier MedTech Compact",
            text: "Артикул: 213134В наличии",
            price: 300000
        },
        {
            src: "https://global-mt.ru/upload/iblock/33b/bmrpq6u850r0ar3p24kfdsxcrf9oiqsd.jpg",
            title: "Наличие товара уточняйте",
            text: "Артикул: 213134В наличии",
            price: 300000
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
                    <h1 className="text-[35px] font-bold mb-3">Каталог товаров</h1>
                    <p className="capitalize mb-3 text-[22px]">Хиты продаж</p>
                    <p className="capitalize mb-3 text-[22px]">Новинки</p>
                    <p className="capitalize mb-3 text-[22px]">Акции</p>
                </div>
                <div className='w-[60%] flex justify-center flex-col'>
                    <div className="flex w-full justify-around flex-wrap">
                        {data.slice(startIndex, startIndex + 3).map((item, index) => (
                            <div key={index} className="w-[300px] h-[500px] rounded-xl cursor-pointer border-2 flex flex-col gap-2 relative hover:shadow-lg transition duration-300 ease-in-out">
                                <div className="w-[90%] flex justify-between h-[50px] items-center mx-auto">
                                    <button className="w-[80px] h-[28px] font-bold text-[#088269] border-2 border-[#088269] rounded-full">Новинка</button>
                                    <i className="fa-regular fa-heart text-[22px]"></i>
                                </div>
                                <img src={item.src} alt="" className="w-[60%] h-[45%] mx-auto" />
                                <h1 className="ml-4 capitalize text-[24px]">{item.title}</h1>
                                <p className="text-[#7A7687] text-[13px] font-normal ml-4">{item.text}</p>
                                <h3 className="text-[22px] ml-4 font-medium">{item.price} руб</h3>
                                <button className="absolute bottom-4 left-[18px] w-[90%] h-[50px] rounded-3xl border-2 text-[#088269] hover:bg-[#088269] hover:text-white transition duration-300 ease-in-out">Добавить в корзину</button>
                            </div>
                        ))}
                    </div>
                    <div className="w-full mx-auto flex justify-between h-[200px] items-center">
                        <div className="flex gap-10">
                            <button className="w-[50px] h-[50px] rounded-full border-2  text-black hover:bg-green-700 hover:text-white" onClick={handlePrevClick} disabled={isPrevDisabled}><i className="fa-solid fa-arrow-left"></i></button>
                            <button className="w-[50px] h-[50px] rounded-full border-2  text-black hover:bg-green-700 hover:text-white" onClick={handleNextClick} disabled={isNextDisabled}><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-[200px] h-[50px] border-2 rounded-3xl  text-[#088269]">Бесплатная консультация</button>
                            <button className="w-[200px] h-[50px] border-2 rounded-3xl text-white  bg-[#088269]">Все товары</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;
