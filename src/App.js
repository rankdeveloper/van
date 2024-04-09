import React from 'react'
import Intro from './pages/Intro'
import About from './pages/About'
import Vans from './pages/Vans'
import { Routes, Route, Outlet } from 'react-router-dom'
import "./server"
import "./style.css"
import VanDetail from './pages/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostVans from './pages/host/HostVans'
import HostLayout from './components/HostLayout'
import HostVanDetail from './pages/host/HostVanDetail'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import AuthRequired from './components/AuthRequired'
export default function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Intro />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path='login' element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />

              <Route path="vans/:id" element={<HostVanDetail />} >
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </>

  )
}
