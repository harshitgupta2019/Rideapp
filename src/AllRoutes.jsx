import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Nearestrides from './pages/Nearestrides/Nearestrides'
import Pastrides from './pages/Pastrides/Pastrides'
import Upcomingrides from './pages/Upcomingrides/Upcomingrides'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route  path='/nearest_rides' element={<Nearestrides/>}/>
      <Route  path='/upcoming_rides' element={<Upcomingrides/>}/>
      <Route  path='/past_rides' element={<Pastrides/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
