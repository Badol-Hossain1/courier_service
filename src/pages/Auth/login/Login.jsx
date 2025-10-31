import { useForm } from 'react-hook-form'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
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
                        <p className='text-red-500' role="alert">This field is required</p>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <p className='text-red-500' role="alert">
                            Password must be at least 6 characters
                        </p>
                    )}

                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral w-20 mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Login
