import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import './login.css'
import { FormInputs, schema } from "./formSchema";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <article className='login-page'>
      <h2>Sign in to your account</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          Username <small>{errors.username?.message}</small>
          <input {...register("username")} />
        </label>
        
        <label htmlFor="password">
          Password
          <input {...register("password")} />
        </label>

        <button type="submit">Login</button>
      </form>
    </article>
  )
}

export default Login