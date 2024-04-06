import React, { useState } from 'react';
import Brend from '../Brend/Brend';
import Data from '../CardData/CardData';
import Contact from '../content/Contact';
import { Main } from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import  Footer  from '../footer/Footer';
import Aboutss from "../../images/about.png";

const About = () => {
  const [count, setCount] = useState(0)
  const data = [
    {
      id: 1,
      image: Aboutss,
      title: "Дерматологическое оборудование",
      text: "Лабораторное оборудование",
      price: "300000"
    },
  ];

  return (
    <div className='w-full'>
      <Navbar />
      <div className='w-full flex justify-center'>
        <div className='w-full flex justify-center items-center'>
          {data.map((item) => (
            <div key={item.id} className="flex items-center justify-around w-full h-[500px]">
              <img src={item.image} alt={item.title} className="w-64 h-auto" />
              <div>
                <h1 className=" text-[40px] mb-4">{item.title}</h1>
                <p className='text-[18px] text-gray-400 mb-2'>Категория: {item.text}</p>
                <p className='text-[18px] text-gray-400 mb-2'>Артикул: 213134</p>
                <h2 className='text-[30px] capitalize mb-3'>price {item.price} руб</h2>
                <div className='flex gap-10'>
                  <div className='flex items-center gap-2 text-[#088269]'>
                    <button className='w-16 h-[30px] rounded-l-2xl border-2 text-[#088269]'>+</button>
                    <h2>{count}</h2>
                    <button className='w-16 h-[30px] rounded-r-2xl border-2 text-[#088269]'>-</button>
                  </div>
                  <div className='flex gap-5 items-center'>
                    <button className='text-[#088269] w-[162px] h-[40px] border-1  border-[#D5D1E1] rounded-xl'>Задать вопрос</button>
                    <button className='bg-[#088269] w-[214px] h-[40px] text-white rounded-xl'>Добавить в корзину</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Data />
      <Main />
      <News />
      <Brend />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
