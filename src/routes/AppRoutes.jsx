import React from 'react'
import { Outlet, Route, Routes } from "react-router"
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import HomeUser from '../pages/user/HomeUser'
import NotFound from '../pages/NotFound'
import Register1 from '../pages/auth/Register1'



function AppRoutes() {
    return (
        <div>
            <Routes>
                {/* public */}
                {/* index เป็น default ของ parent */}
                {/* <Outlet/> ลูกๆจะ render ผ่าน ตัวนี้ */}
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="register" element={<Register1/>} />
                    <Route path="login" element={<Login/>} />
                </Route>


                {/* Private [USER] */}
                <Route path='user' element={<Layout/>}>
                    <Route index element={<HomeUser/>} />
                </Route>


                {/* private [ADMIN] */}
                <Route path='admin' element={<Layout />}>
                    <Route index element={<Dashboard/>} />
                    <Route path="manage" element={<Manage/>} />
                </Route>


                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    )
}

export default AppRoutes