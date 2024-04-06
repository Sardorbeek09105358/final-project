import React from 'react'
import Accord from '../accordion/Accordion'
import Brend from '../Brend/Brend'
import Card from '../Card/Card'
import Contact from '../content/Contact'
import Footer from '../footer/Footer'
import Location from '../Location/Location'
import Navbar from '../Navbar/Navbar'

export const Kabinet = () => {
  return (
    <div>
      <Navbar />
      <h1 className='capitalize text-[40px] mb-10 ml-16'>Информация о доставке</h1>
      <div className='w-full flex justify-center'>
        <div className="border-2 w-[90%] rounded-2xl">
          <iframe
            className="rounded-2xl w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13577.337172381369!2d69.2049699412457!3d41.28337677537935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1711913035465!5m2!1sru!2s"
            width={700}
            height={612}
            style={{ border: 1 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
       <div className='flex w-full h-[300px] items-center'>
        <div className='w-[50%]'></div>
        <p className='w-[50%]'>Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник. </p>
       </div>
       <Card />
       <Brend />
       <Accord />
       <Location/>
       <Contact />
       <Footer />
    </div>
  )
}
