import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Food from '../components/Food'
import Recipe from '../components/Recipe'
import Pages from './Pages'
import Searched from './Searched'

function Home() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/food/:id' element={<Food />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
    </div>
  )
}

export default Home