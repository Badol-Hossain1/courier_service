import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import GoogleLogin from '../googleLogin/GoogleLogin'
import Logo from '../../shared/Logo/Logo'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {}
    return (
        <div>
            <Logo></Logo>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                        {...register('email')}
                        type="email"
                        className="input"
                        placeholder="Email"
                    />
                    <label className="label">Password</label>
                    <input
                        {...register('password', {
                            required: true,
                            minLength: 6,
                        })}
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                    {errors.password?.type === 'required' && (
                        <p className="text-red-500" role="alert">
                            This field is required
                        </p>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <p className="text-red-500" role="alert">
                            Password must be at least 6 characters
                        </p>
                    )}

                    <div className="flex gap-6">
                        <a className="link link-hover">Forgot password?</a>
                        <Link
                            to="/register"
                            className="text-white font-bold capitalize"
                        >
                            dont have an account{' '}
                            <span className="underline text-red-700">
                                register
                            </span>
                        </Link>
                    </div>
                    <button className="btn btn-neutral w-20 mt-4">Login</button>
                </fieldset>
            </form>
            <GoogleLogin />
        </div>
    )
}

export default Login
