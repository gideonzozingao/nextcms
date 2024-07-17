import Head from "next/head";
import React from "react";

function Login() {
  return (
    <div className="">
      {/* Hero Section */}
      <header className="bg-blue-500 w-full py-8">
        <div className="max-w-md mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">ZUQONG CMS Admin </h1>
          <p className="text-lg">Please login to continue</p>
        </div>
      </header>

      {/* Login Form */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Admin Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
