import React, { useState } from 'react';
import { ImCross } from "react-icons/im";

const Auth = ({ setAuth }) => {
  const [currState, setCurrState] = useState("sign-up");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-blue-500 z-40 flex flex-col justify-center items-center">
      <ImCross onClick={() => setAuth(false)} className='fixed top-6 right-8 cursor-pointer text-2xl font-thin' />
      {currState === "sign-up" ? (
        <h1 className='text-center font-bold text-2xl my-10'>User Sign Up</h1>
      ) : (
        <h1 className='text-center font-bold text-2xl my-10'>User Sign In</h1>
      )}
      <form className='flex flex-col justify-center items-center gap-10'>
        {currState === "sign-up" && (
          <input
            type='text'
            name="name"
            value={name}
            placeholder='User Name'
            onChange={handleChange}
            required
            className='w-[300px] p-3 rounded-md outline-none'
          />
        )}
        <input
          type='email'
          name="email"
          value={email}
          placeholder='User Email'
          onChange={handleChange}
          required
          className='w-[300px] p-3 rounded-md outline-none'
        />
        <input
          type='password'
          name="password"
          value={password}
          placeholder='User Password'
          onChange={handleChange}
          required
          className='w-[300px] p-3 rounded-md outline-none'
        />
        {currState === "sign-up" ? (
          <p>Already have an account? <span onClick={() => setCurrState("sign-in")} className="cursor-pointer underline">Sign in</span></p>
        ) : (
          <p>Create account? <span onClick={() => setCurrState("sign-up")} className="cursor-pointer underline">Sign up</span></p>
        )}
        {currState === "sign-up" ? (
          <button type="submit" className='bg-orange-700 rounded-md px-6 py-2'>Register</button>
        ) : (
          <button type="submit" className='bg-orange-700 rounded-md px-6 py-2'>Sign In</button>
        )}
      </form>
    </div>
  );
};

export default Auth;
