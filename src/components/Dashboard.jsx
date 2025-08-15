import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User, ShieldCheck, Settings } from "lucide-react"; // Icons

function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1b2735] via-[#2c3e50] to-[#34495e] text-white">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 w-full max-w-2xl animate-fadeInUp">
          {/* Soft Glow Border */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300 opacity-20 blur-md pointer-events-none"></div>

          {/* Heading */}
          <h2 className="relative text-3xl font-bold mb-4 text-center bg-gradient-to-r from-teal-200 to-blue-300 bg-clip-text text-transparent">
            Welcome, {username} 👋
          </h2>
          <p className="relative mb-8 text-center text-gray-300">
            You are logged in securely with{" "}
            <span className="text-teal-300 font-semibold">JWT Authentication</span>.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 border border-white/10 p-5 rounded-lg hover:border-teal-300 transition">
              <User className="mx-auto mb-3 text-teal-300" size={28} />
              <p className="font-semibold text-gray-200">Profile</p>
              <p className="text-xs text-gray-400 mt-1">View & edit your details</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-lg hover:border-teal-300 transition">
              <ShieldCheck className="mx-auto mb-3 text-teal-300" size={28} />
              <p className="font-semibold text-gray-200">Security</p>
              <p className="text-xs text-gray-400 mt-1">Manage passwords & devices</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-lg hover:border-teal-300 transition">
              <Settings className="mx-auto mb-3 text-teal-300" size={28} />
              <p className="font-semibold text-gray-200">Settings</p>
              <p className="text-xs text-gray-400 mt-1">Customize your dashboard</p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="relative mt-8 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white py-3 rounded-lg font-semibold transition transform hover:scale-[1.02] shadow-md shadow-red-500/10"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-400 text-sm border-t border-white/10 bg-white/5 backdrop-blur-md">
        Engineered with precision by <span className="text-teal-300">MBTech ✨</span>
      </footer>
    </div>
  );
}

export default Dashboard;
