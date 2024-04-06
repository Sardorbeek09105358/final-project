import React from 'react'

const AboutCard = () => {
    const card = [
        {
            id: 1,
            image: 'https://global-mt.ru/upload/iblock/c6e/0pordpcsv1m0eejjpk0uie7ftwusdl2k.jpg',
            title: "Дерматологическое оборудование",
        },
        {
            id: 2,
            image: 'https://global-mt.ru/upload/iblock/343/thhoixipw9z1qmr1d532z5xs0r698m68.jpg',
            title: "Ветеринарное оборудование",
        },
        {
            id: 3,
            image: 'https://global-mt.ru/upload/iblock/8a0/7xi0t1s68lzie3zhvjh21zpe1d5f2yrs.jpg',
            title: "Дерматологическое оборудование",
        },
        {
            id: 4,
            image: 'https://global-mt.ru/upload/iblock/994/up35t6hkl0i48yv6vzobk5q776fmkfo3.png',
            title: "Оборудование для анастезиологии",
        },
        {
            id: 5,
            image: 'https://global-mt.ru/upload/iblock/f4f/x5ak53u35c2xyod0djun1lznt9ihcccs.jpg',
            title: "Оборудование для анастезиологии",
        },
        {
            id: 6,
            image: 'https://global-mt.ru/upload/iblock/b39/0o4wfxmcinlhszb86sgnuymbxesi3w7g.jpg',
            title: "Мебель для медецинских целей",
        },
        {
            id: 7,
            image: 'https://global-mt.ru/upload/iblock/a5a/y4a7xoykn1nr0619l5vyw91gdd7t8rcm.jpg',
            title: "Дерматологическое оборудование",
        },
    ];
    
    return (
        <div className='w-full mb-10'>
            <div className='w-[90%] flex justify-between mx-auto h-[150px] items-center'>
                <h1 className='font-medium text-[30px] capitalize'>Популярные категории</h1>
                <button className='bg-[#088269] w-[160px] h-[46px] rounded-3xl text-white capitalize'>Все категории</button>
            </div>
            <div className='flex w-[80%] flex-wrap mx-auto justify-between gap-[120px]'>
                {
                    card.map((item, index) => {
                        return (
                            <div key={index} className="w-[320px] rounded-2xl flex flex-col items-center justify-between h-[300px] border-2">
                                <img src={item.image} alt="" className='h-[60%] w-[70%] pt-4'/>
                                <div className='w-full h-[20%] bg-[#F8F7F3] pt-3'>
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

export default AboutCard
