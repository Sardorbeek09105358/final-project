import React from 'react'
import Accord from '../accordion/Accordion'
import Brend from '../Brend/Brend'
import Card from '../Card/Card'
import Data from '../CardData/CardData'
import CaruselData from '../Carousel/Carousel'
import Contact from '../content/Contact'
import CreateCarousel from '../creatCarousel/CreateCarousel'
import Footer from '../footer/Footer'
import Location from '../Location/Location'
import { Main } from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import News from '../News/News'
import Section from '../section/Section'

export const Header = () => {
  return (
    <div>
        <Navbar/>
        <CaruselData />
        <Section />
        <Main />
        <Card />
        <Data />
        <CreateCarousel />
        <Brend />
        <Accord />
        <News />
        <Location />
        <Contact />
        <Footer />
    </div>
  )
}

