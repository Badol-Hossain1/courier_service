import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import useAuth from '../../../hooks/useAuth'
import GoogleLogin from '../googleLogin/GoogleLogin'

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const { createUser } = useAuth()
    const onSubmit = (data) => {
        const { email, password } = data
        createUser(email, password)
            .then((result) => {
                console.log('🚀 ~ onSubmit ~ result:', result)
            })
            .catch((error) => {
                console.log('🚀 ~ onSubmit ~ error:', error)
            })
    }

    const password = watch('password')

    return (
        <>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Create An Account</h1>
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
                                {...register('password')}
                                type="password"
                                className="input"
                                placeholder="Password"
                            />
                            <label className="label">Confirm Password</label>
                            <input
                                {...register('Cpassword', {
                                    validate: (value) =>
                                        value === password ||
                                        'Passwords do not match',
                                })}
                                type="password"
                                className="input"
                                placeholder="Confirm Password"
                            />
                            {errors.Cpassword && (
                                <span className="text-red-500 text-sm">
                                    {errors.Cpassword.message}
                                </span>
                            )}

                            <div>
                                <Link
                                    to="/login"
                                    className="text-white font-bold capitalize"
                                >
                                    already have an account{' '}
                                    <span className="underline text-red-700">
                                        Login
                                    </span>
                                </Link>
                            </div>
                            <button className="btn btn-primary mt-4">
                                Sign Up
                            </button>
                        </fieldset>
                    </form>
                    <GoogleLogin />
                </div>
            </div>
        </>
    )
}

export default Register
