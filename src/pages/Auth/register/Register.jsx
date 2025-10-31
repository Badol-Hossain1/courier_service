import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    const password = watch('password')
    console.log('🚀 ~ Register ~ password:', password)
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
                                type="Cpassword"
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
                                </Link>
                            </div>
                            <button className="btn btn-neutral mt-4">
                                Sign Up
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
