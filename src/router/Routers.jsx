import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/Home'
import RootLayout from '../layout/RootLayout'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Auth/login/Login'
import Register from '../pages/Auth/register/Register'
import Map from '../pages/Map/Map'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path:'map',
                Component:Map,
                loader:()=> fetch('./ServiceCenter.json')
            }
        ],
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
        ],
    },
])
