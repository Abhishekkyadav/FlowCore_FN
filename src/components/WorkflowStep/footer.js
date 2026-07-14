import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 bg-white">
      
      {/* Left Side */}
      <div className="text-sm text-slate-500">
        Showing 1 to 5 of 5 entries
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        
        <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-700 hover:bg-gray-50 transition-colors">
          previous
        </button>

        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold">
          1
        </button>

        <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-700 hover:bg-gray-50 transition-colors">
          next
        </button>

      </div>
    </div>
  );
}