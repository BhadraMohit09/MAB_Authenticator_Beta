import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://a79a774f987f.ngrok-free.app/api/auth/signin", {
                email,
                password,
            });

            // Store token and username from response
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.username); // from backend

            setMessage("Login successful!");
            window.location.href = "/dashboard";
        } catch (err) {
            setMessage(err.response?.data?.error || "Server is down, please try again later.");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b2735] via-[#2c3e50] to-[#34495e] p-4">
            <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 animate-fadeInUp">
                {/* Soft Glow Border */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300 opacity-20 blur-md pointer-events-none"></div>

                {/* Heading */}
                <h2 className="relative text-3xl font-bold mb-6 text-center bg-gradient-to-r from-teal-200 to-blue-300 bg-clip-text text-transparent">
                    Welcome Back
                </h2>

                {message && (
                    <p className="relative mb-4 text-center text-sm text-red-300">
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="relative space-y-5">
                    {/* Email */}
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-3 transition-all duration-300 focus-within:border-teal-300">
                        <FaEnvelope className="text-gray-300 mr-3 text-lg" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent text-white placeholder-gray-300 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-3 transition-all duration-300 focus-within:border-teal-300">
                        <FaLock className="text-gray-300 mr-3 text-lg" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent text-white placeholder-gray-300 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-[1.02] shadow-md shadow-blue-500/10"
                    >
                        Sign In
                    </button>
                </form>

                <p className="relative mt-6 text-center text-sm text-gray-300">
                    Don’t have an account?🤔{" "}
                    <a href="/signup" className="text-teal-300 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Signin;
