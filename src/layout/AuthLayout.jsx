import { Outlet } from 'react-router'
import Lottie from 'lottie-react'
import loginLogo from '../assets/login/Login.json'

const AuthLayout = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content items-center  flex-col lg:flex-row-reverse">
               
                    <div className='flex-1'>
                    <Lottie animationData={loginLogo} />

                    </div>

                    <div className="flex-1">
                        <Outlet />
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
