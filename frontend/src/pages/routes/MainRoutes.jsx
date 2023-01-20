import React from 'react'
import Plywood from '../plywood';
import Admin from './Admin';
import Home from './Home';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<Plywood />} />
    </Routes>
  )
}

export default MainRoutes;