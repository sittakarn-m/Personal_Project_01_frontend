# Client

## Step 1 Install vite
create folder client
```bash
npm create vite .
select > react > javascript
npm install
```

## Step 2 Install tailwind
https://tailwindcss.com/docs/installation/using-vite
```bash
npm install tailwindcss @tailwindcss/vite
```
### vite.config.js
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

```
index.js
```js
@import "tailwindcss";
```

## Step 3 Install React-Router
https://reactrouter.com/start/library/installation
```bash
npm i react-router
```
main.jsx
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
)

```

## AppRoutes.jsx
```jsx
import React from 'react'
import { Route, Routes } from "react-router"

function AppRoutes() {
    return (
        <div>
            <Routes>
                {/* public */}
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="about" element={<h1>About</h1>} />
                <Route path="register" element={<h1>Register</h1>} />
                <Route path="login" element={<h1>Login</h1>} />

                {/* Private [USER] */}
                <Route path="user" element={<h1>Home User</h1>} />

                {/* private [ADMIN] */}
                <Route path="dashboard" element={<h1>Dashboard</h1>} />
                <Route path="manage" element={<h1>Manage</h1>} />


                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default AppRoutes
```
update appRoutes.jsx

```jsx
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
                    <Route path="register" element={<Register/>} />
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


                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default AppRoutes
```

# Step 1 install Sweet alert
for popup box
```bash
npm install sweetalert2
```
# Step 2 React Hook From
for flexible and extensible forms
```bash
npm install react-hook-form
```
# Step 3 React Hook From
for icon 
```bash
npm install lucide-react
```
# Step 4 Validate with Zod
for validator https://github.com/react-hook-form/resolvers
```bash
npm install @hookform/resolvers
npm i zod
```

