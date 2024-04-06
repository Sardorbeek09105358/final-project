import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-[300px] bg-[#E5E4ED] pt-5'>
            <div className='w-[90%] flex justify-between items-center mx-auto gap-10'>
                <div className='w-[50%]h-full'></div>
                <div className='w-[50%] flex flex-col gap-3'>
                    <h1 className='text-[30px]'>Подпишитесь и будьте в курсе!</h1>
                    <h4 className='text-[#888]'>Акции, скидки, распродажи ждут!</h4>
                    <div className='relative'>
                        <input type="text" className='w-[540px] h-[45px] rounded-full border-2 outline-none pl-3 capitalize text-[20px]' placeholder="Введите email"/>
                        <button className='w-[151px] h-[45px] bg-[#088269] text-white rounded-full absolute right-[30%]'>Подписаться</button>
                    </div>
                    <span><input type="checkbox"  className='mr-2'/> Я даю согласие на обработку своих персональных данных.</span>
                </div>
            </div>
        </div>
    )
}

export default Contact
