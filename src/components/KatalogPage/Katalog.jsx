import Card from '../Card/Card'
import { Main } from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import KatalogCard from './KatalogCard'
import Data from '../CardData/CardData'
import Brend from '../Brend/Brend'
import Accord from '../accordion/Accordion'
import Location from '../Location/Location'
import Contact from '../content/Contact'
import Footer from '../footer/Footer'
export const Katalog = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className='w-full'>
        <div className='w-[90%] flex justify-center h-screen mx-auto'>
          <div className='w-[25%] flex flex-col gap-3'>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Реанимация" className='capitalize bg-white'>Реанимация</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Хирургия">Хирургия</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Офтальмология">Офтальмология</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Лабораторная диагностика">Лабораторная диагностика</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Гистология">Гистология</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Косметология">Косметология</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Оториноларингология">Оториноларингология</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Рентгенология и томография">Рентгенология и томография</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Физиотерапия и реабилитация">Физиотерапия и реабилитация</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Функциональная диагностика">Функциональная диагностика</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Эндоскопия">Эндоскопия</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Новинки">Новинки</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Распродажи">Распродажи</option>
            </select>
            <select className='outline-none bg-white text-black h-[30px] text-[22px]'>
              <option value="Кабинеты под ключ">Кабинеты под ключ</option>
            </select>
          </div>
          <KatalogCard />
        </div>
        <Main />
        <Card />
        <Data />
        <Brend />
        <Accord />
        <Location />
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}


