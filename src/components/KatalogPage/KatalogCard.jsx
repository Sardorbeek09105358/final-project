import React from 'react'
import img from "../../images/img.png"
import img2 from "../../images/img-2.png"
import img3 from "../../images/img-3.png"
import img4 from "../../images/img-4.png"
import img5 from "../../images/img-5.png"
import img6 from "../../images/img-6.png"
import img7 from "../../images/img-7.png"
import img8 from "../../images/img-8.png"
const KatalogCard = () => {
    const card = [
        {
            id: 1,
            image: img,
            title: "Ветеринарное оборудование",
        },
        {
            id: 2,
            image: img2,
            title: "Анестезиология",
        },
        {
            id: 3,
            image: img3,
            title: "Физиотерапевтическое оборудование",
        },
        {
            id: 4,
            image: img4,
            title: "Стоматологическое оборудование",
        },
        {
            id: 5,
            image: img2,
            title: "Хирургические инструменты",
        },
        {
            id: 6,
            image: img6,
            title: "Проктологическое оборудование",
        },
        {
            id: 7,
            image: img7,
            title: "Оборудование для радиационной терапии",
        },
        {
            id: 7,
            image: img8,
            title: "Педиатрическое оборудование",
        },
        {
            id: 7,
            image: img4,
            title: "Дерматологическое оборудование",
        },
    ];
    
    return (
        <div className='w-full mb-10'>
            <div className='flex w-[70%] flex-wrap mx-auto justify-between gap-4'>
                {
                    card.map((item, index) => {
                        return (
                            <div key={index} className="w-[300px] rounded-2xl flex flex-col items-center justify-between h-[300px] border-2">
                                <img src={item.image} alt="" className='h-[60%] w-[70%] pt-4'/>
                                <div className='w-full h-[24%] bg-[#F8F7F3] pt-3 border-1'>
                                    <h2 className='h-[100px] text-center font-medium text-[16px]'>{item.title}</h2>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default KatalogCard
