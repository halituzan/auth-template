import React from "react";
import AuthLayout from "../Components/AuthLayout/AuthLayout";
import TextInput from "../Components/Inputs/TextInput";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className='card shadow-lg w-4/5 md:w-[768px] h-[500px]  flex justify-center bg-white'>
        <div className='flex-1 p-12 flex flex-col justify-center items-center w-1/2'>
          <div className='flex justify-between items-center w-full mb-5'>
            <h3 className='text-3xl '>Sign In</h3>
            <div className='flex cursor-pointer  items-center'>
              <svg width='2rem' height='2rem' viewBox='0 0 24 24'>
                <path
                  fill='white'
                  className='hover:fill-rose-400'
                  d='M8.854 21.57a9.91 9.91 0 0 0 6.29.001a.493.493 0 0 1-.644-.475c0-.338.013-1.413.013-2.75a2.368 2.368 0 0 0-.675-1.85c2.225-.25 4.562-1.1 4.562-4.938a3.87 3.87 0 0 0-1.025-2.687a3.594 3.594 0 0 0-.1-2.65s-.838-.275-2.75 1.025a9.427 9.427 0 0 0-5 0C7.612 5.958 6.775 6.22 6.775 6.22a3.593 3.593 0 0 0-.1 2.65a3.892 3.892 0 0 0-1.025 2.687c0 3.825 2.325 4.688 4.55 4.938a2.106 2.106 0 0 0-.638 1.337a2.137 2.137 0 0 1-2.91-.82l-.002-.005a2.001 2.001 0 0 0-1.538-1.025c-.837.013-.337.475.013.663c.451.38.803.865 1.025 1.412c.2.563.85 1.638 3.362 1.175c0 .838.013 1.625.013 1.863c0 .259-.185.551-.67.475z'
                ></path>
                <path
                  fill='currentColor'
                  d='M12 2.083c-5.523 0-10 4.477-10 10c0 4.423 2.875 8.169 6.855 9.488c.485.075.67-.216.67-.475c0-.238-.012-1.025-.012-1.863c-2.513.463-3.163-.612-3.363-1.175a3.637 3.637 0 0 0-1.025-1.412c-.35-.188-.85-.65-.013-.663a2 2 0 0 1 1.538 1.025l.003.006a2.137 2.137 0 0 0 2.91.82c.043-.51.27-.984.637-1.338c-2.225-.25-4.55-1.113-4.55-4.938a3.892 3.892 0 0 1 1.025-2.687a3.594 3.594 0 0 1 .1-2.65s.837-.263 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025c.37.838.406 1.786.1 2.65a3.87 3.87 0 0 1 1.025 2.687c0 3.838-2.338 4.688-4.562 4.938c.482.49.729 1.164.675 1.85c0 1.337-.013 2.412-.013 2.75a.493.493 0 0 0 .643.476C19.124 20.253 22 16.507 22 12.083c0-5.523-4.477-10-10-10'
                ></path>
              </svg>
            </div>
          </div>
          <TextInput placeholder={"Username"} label={"Username"} />
          <TextInput
            placeholder={"******"}
            label={"Password"}
            className='mt-2 '
          />
          <PrimaryButton text={"Sign In"} className='mt-4' />
          <div className='mt-4 flex justify-between w-full items-center'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='remember-me'
                className='accent-rose-600 w-[1rem] h-[1rem]'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 font-bold text-rose-600 text-[0.8rem]'
              >
                Remember Me
              </label>
            </div>
            <a href='/' className='text-[0.8rem] font-bold text-slate-600'>
              Forgot Passoword?
            </a>
          </div>
        </div>
        <div className='flex-1 p-10 w-1/2 text-white leading-8 flex flex-col justify-center items-center bg-gradient-to-r from-rose-500 via-rose-500 to-rose-600'>
          <p className='text-2xl font-bold'>Welcome to Login</p>
          <p className='text-sm leading-10 font-thin'>Don't have account ?</p>
          <button
            className='border border-white px-4 rounded-xl hover:bg-white hover:text-rose-600 font-bold shadow'
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
