import React from "react";
import LoginImage from "../../Images/Login/login.jpg";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex w-full  px-10 md:px-20 lg:px-20 py-10 items-center justify-center bg-[#F5F0EB]">

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl w-full
        backdrop-blur-xl border border-white/50 bg-white/30
        rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden">

        <div className="hidden lg:flex items-center justify-center p-8">
          <img
            src={LoginImage}
            className="w-full max-w-xs object-contain rounded-2xl"
          />
        </div>

        {/* Login Form */}
        <div className="flex flex-col justify-center p-8 md:p-12 xl:p-10 text-gray-800">

          <h1 className="text-3xl font-semibold mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-500 mb-8">Sign in to your account</p>

          <label className="text-sm text-gray-500 mb-1">Employee Number</label>
          <input
            type="text"
            className="mb-4 px-4 py-2 rounded-lg bg-white/60 border border-black/10
            focus:outline-none focus:ring-1 focus:ring-[#E8420A] focus:border-[#E8420A] transition"
          />

          <label className="text-sm text-gray-500 mb-1">Password</label>
          <input
            type="password"
            className="mb-6 px-4 py-2 rounded-lg bg-white/60 border border-black/10
            focus:outline-none focus:ring-1 focus:ring-[#E8420A] focus:border-[#E8420A] transition"
          />

          <button
            className="py-2 rounded-lg bg-[#E8420A] text-white hover:bg-[#c93800]
            hover:scale-[1.02] transition-all shadow-lg shadow-orange-500/20 cursor-pointer font-medium"
            onClick={() => navigate("/dashboard")}
          >
            Login
          </button>

          <p className="mt-4 text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#E8420A] hover:text-[#c93800]">
              Register
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;