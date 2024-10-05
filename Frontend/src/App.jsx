import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import UploadFilePage from './Pages/UploadFilePage'
import ShowTripList from './Pages/ShowTripList'
import TripDistance from './Component/TripDistance'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/welcome' element={<UploadFilePage />} />
        <Route path='/showtrip' element={<ShowTripList />} />
        <Route path='/TripDistance' element={<TripDistance />} />
      </Routes>
    </>
  )
}

export default App
