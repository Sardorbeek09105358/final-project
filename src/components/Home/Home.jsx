import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import { Header } from '../Header/Header'
import { Kabinet } from '../Kabinet/kabinet'
import { Katalog } from '../KatalogPage/Katalog'
import Product from '../section/Product'

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='catalog' element={<Katalog />} />
        <Route path='About' element={<About />} />
        <Route path='Kabinet' element={<Kabinet />}/>
        <Route path='Product/:id' element={<Product />}/>
      </Routes>
    </div>
  )
}

export default Home
