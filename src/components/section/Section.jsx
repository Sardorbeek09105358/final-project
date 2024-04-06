import React from 'react';
import { NavLink } from 'react-router-dom';
import header1 from "../../images/header-1.png";
import header3 from "../../images/header-3.png";
import header4 from "../../images/header-4.png";
import header5 from "../../images/header-5.png";
import header6 from "../../images/header-6.png";
import { useSearchContext } from '../SearchContext/Search';
import "./section.css";

const Section = () => {
    const { inputVal } = useSearchContext();
    const card = [
        {
            id: 1,
            image: 'https://global-mt.ru/upload/iblock/c6e/0pordpcsv1m0eejjpk0uie7ftwusdl2k.jpg',
            title: "НМИЦ онкологии им. Н.Н. Блохина",
        },
        {
            id: 2,
            image: header1,
            title: "Дерматологическое оборудование",
        },
        {
            id: 3,
            image: header5,
            title: "Оборудование для анастезиологии",
        },
        {
            id: 4,
            image: header3,
            title: "Мебель для медецинских целей",
        },
        {
            id: 5,
            image: header4,
            title: "Ветеринарное оборудование",
        },
        {
            id: 6,
            image: header5,
            title: "Дерматологическое оборудование",
        },
        {
            id: 7,
            image: header6,
            title: "Оборудование для анастезиологии",
        },
    ];

    const addToLocalStorage = (id, title, image) => { // localStoragega saqlash
        const data = JSON.parse(localStorage.getItem("data")) || [];
        const exists = data.some(item => item.id === id);
        if (!exists) { // datan tekshirish faqat bittasini olib o'tish uchun 
            const item = { id, title, image };
            data.push(item);
            localStorage.setItem("data", JSON.stringify(data));
        }
    };

    const filteredUsers = card.filter(data =>
        data.title.toLowerCase().includes(inputVal.toLowerCase())
    );

    return (
        <div className='w-full mb-10'>
            <div className='w-[90%] flex justify-between mx-auto h-[150px] items-center'>
                <h1 className='font-medium text-[30px] capitalize'>Популярные категории</h1>
                <button className='bg-[#088269] w-[160px] h-[46px] rounded-3xl text-white capitalize'>
                    Все категории
                </button>
            </div>
            <div className='flex w-[80%] flex-wrap mx-auto justify-between gap-[120px]'>
                {
                    filteredUsers.map((item, index) => {
                        return (
                            <NavLink to={`/Product/${item.id}`} key={index} className="w-[320px] rounded-2xl flex flex-col  justify-between h-[300px] border-2">
                                <div onClick={() => addToLocalStorage(item.id, item.title, item.image)} className="flex flex-col justify-between h-full items-center">
                                    <img src={item.image} alt="" className='h-[50%] w-[60%] pt-4' />
                                    <div className='w-full h-[22%] bg-[#F8F7F3] pt-3 border-1'>
                                        <h2 className='h-[100px] text-center font-medium text-[16px]'>{item.title}</h2>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Section;
