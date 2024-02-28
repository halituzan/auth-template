import React from "react";
import AuthLayout from "../Components/AuthLayout/AuthLayout";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import TextInput from "../Components/Inputs/TextInput";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <AuthLayout>
        <div className='card shadow-lg w-4/5 md:w-[768px] h-[500px]  flex justify-center bg-white'>
          <div className='flex-1 p-10 w-1/2  text-white leading-8 flex flex-col justify-center items-center bg-gradient-to-r from-rose-500 via-rose-500 to-rose-600'>
            <p className='text-2xl font-bold'>Are You Ready to Register</p>
            <p className='text-sm leading-10 font-thin'>
              Do you have an existing account?
            </p>
            <button
              className='border border-white px-4 rounded-xl hover:bg-white hover:text-rose-600 font-bold shadow'
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </button>
          </div>
          <div className='flex-1 p-12 flex flex-col justify-center items-center w-1/2'>
            <TextInput placeholder={"Username"} label={"Username"} />
            <TextInput
              placeholder={"E-mail"}
              label={"E-mail"}
              className='mt-2 '
            />
            <TextInput
              placeholder={"******"}
              label={"Password"}
              className='mt-2'
              type='password'
            />
            <TextInput
              placeholder={"******"}
              label={"Password Confirm"}
              className='mt-2 '
              type='password'
            />
            <PrimaryButton text={"Sign Up"} className='mt-4' />
          </div>
        </div>
      </AuthLayout>
    </AuthLayout>
  );
};

export default Register;
