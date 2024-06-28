// pages/login.js
"use client"; // This is a client component  
// test
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
    <div className='flex bg-black'>
      
<h1>hai</h1>
    </div>
      {/* <Head>
        <title>Login Page</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <h3 className="text-3xl font-bold text-center mb-4">Login to Your Account</h3>
            <form onSubmit={handleLogin}>
              <div className="mt-4">
                <div>
                  <label className="block text-sm font-medium" htmlFor="username">Username</label>
                  <input
                    type="email"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 mt-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mt-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="flex items-baseline justify-between mt-4">
                <button type="submit" className="px-6 py-2 bg-white text-purple-700 rounded-lg hover:bg-gray-200">Login</button>
                  <a href="#" className="text-sm hover:underline">Forgot password?</a>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 hidden md:block">
            <img src="/login-photo.jpg" alt="Login image" className="object-cover w-full h-full" />
          </div>
        </div>
      </div> */}
    </>
  );
}
