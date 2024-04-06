import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../images/Logo.png";
import Example from '../Modal/Example';
import { useSearchContext } from '../SearchContext/Search';

const Navbar = () => {
  const { inputVal, setInputVal } = useSearchContext();
  const navigate = useNavigate()

  const handleCLick = () => {
    navigate('/')
  }

  const handleChange = (e) => {
    setInputVal(e.target.value);
    console.log(inputVal);
  }

  return (
    <div className='w-full'>
      <div className='w-[95%] flex justify-between mx-auto h-10 items-center'>
        <div className='flex gap-3 text-[#7A7687]'>
          <p>O компании</p>
          <p>Доставка</p>
          <p>Оплата</p>
          <p>Гарантии</p>
          <p>Блог</p>
        </div>
        <div className='flex gap-3  text-[#7A7687]'>
          <p>info@mail.ru</p>
          <p>Москва ул  Московская д 35.</p>
        </div>
      </div>
      <hr />
      <nav className='w-full'>
        <div className='w-[95%] flex justify-between items-center mt-10 mx-auto'>
          <img src={logo} alt="logo" className='cursor-pointer' onClick={handleCLick} />
          <div className='border border-[#888] rounded-3xl w-[550px] flex items-center gap-3 pl-2 justify-between pr-4 relative'>
            <select className="text-xl border rounded-full outline-none border-hidden bg-[#EFEFEF] h-10 w-[200px]">
              <option className="text-xl" value="Вс категории">
                Всe категории
              </option>
              <option className="text-xl" value="Москва">
                Москва
              </option>
              <option className="text-xl" value="Апрелевка">
                Апрелевка
              </option>
              <option className="text-xl" value="Балашиха">
                Балашиха
              </option>
              <option className="text-xl" value="Верея">
                Верея
              </option>
              <option className="text-xl" value="Видное">
                Видное
              </option>
              <option className="text-xl" value="Волоколамск">
                Воскресенск
              </option>
              <option className="text-xl" value="Высоковск">
                Высоковск
              </option>
            </select>
            <input type="search" className='w-[250px] outline-none h-[45px] pl-2 capitalize' placeholder='enter your text'  value={inputVal} onChange={handleChange}  />
            <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
          </div>
          <div className='text-[#7A7687] font-medium'>
            <h4>Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной</h4>
          </div>
          <div className='flex items-center gap-10'>
            <div className='flex flex-col justify-center items-center cursor-pointer'>
              <Example />
            </div>
            <div className='flex flex-col justify-center items-center cursor-pointer'>
              <i className="fa-regular fa-heart mb-1"></i>
              <p>Избранное</p>
            </div>
            <div className='flex flex-col justify-center items-center cursor-pointer'>
              <i className="fa-solid fa-chart-simple mb-1"></i>
              <p>Сравнить</p>
            </div>
            <div className='flex flex-col justify-center items-center cursor-pointer'>
              <i className="fa-solid fa-cart-shopping mb-1"></i>
              <p>Корзина</p>
            </div>
          </div>
        </div>
        <hr className='mt-16' />
      </nav>
      <div className='h-[100px]'>
        <div className='flex justify-between mx-auto w-[95%] mt-3 mb-3 items-center'>
          <ul>
            <li className='flex gap-[50px]'>
              <NavLink to={"/catalog"} className="text-[#202020] font-semibold text-[16px]">Каталог</NavLink>
              <NavLink to={"/About"} className="text-[#202020] font-semibold text-[16px]">Производители</NavLink>
              <NavLink to={"/Kabinet"} className="text-[#202020] font-semibold text-[16px]">Кабинеты под ключ</NavLink>
              <NavLink className="text-[#202020] font-semibold text-[16px]">Услуги</NavLink>
              <NavLink className="text-[#202020] font-semibold text-[16px]">Акции</NavLink>
              <NavLink className="text-[#202020] font-semibold text-[16px]">Покупателям</NavLink>
              <NavLink className="text-[#202020] font-semibold text-[16px]">Контакты</NavLink>
            </li>
          </ul>
          <div className='flex gap-14 items-center'>
            <p className='font-medium'>Москва <i class="fa-solid fa-location-dot"></i></p>
            <div className='w-[160px] h-[40px] rounded-3xl border border-[#777] pt-2 text-center font-medium'>+7(495)000-00-00</div>
            <button className='w-[160px] h-[40px] rounded-3xl bg-[#088269] text-white font-medium'>Заказать звонок</button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Navbar
