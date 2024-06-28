// pages/login.js
"use client"; // This is a client component  

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin  = async (e) => {
    e.preventDefault();
    setError('');

    try {
        const response = await fetch('http://localhost:3014/pos/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Assuming the response contains a token or some user data
          // Redirect to the dashboard page
          router.push('/dashboard');
        } else {
          // Handle errors returned from the backend
          setError(data.message || 'Login failed');
        }
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      setError('An error occurred. Please try again.');
    }
  }

  return (
    <>
      <div className='flex h-screen'>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-black-50 text-3xl mb-5'>Login</h1>
            <form onSubmit={handleLogin} className='flex flex-col gap-4' autoComplete="off">
              <input
             
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
                className='p-2 rounded'
                autoComplete="off"
              />
              <input
             
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className='p-2 rounded'
                autoComplete="off"
              />
              <button type='submit' className='p-2 bg-blue-500 rounded text-white'>Login</button>
              {error && <p className='text-red-500'>{error}</p>}
            </form>
          </div>
        </div>
        <div className='hidden md:block w-1/2 bg-green-500'>
          {/* Right box content */}
        </div>
      </div>
    </>
  );
}
