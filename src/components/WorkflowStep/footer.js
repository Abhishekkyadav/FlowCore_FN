import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 bg-white">
      
      {/* Left Side */}
      <div className="text-sm text-slate-500">
        Showing 1 to 5 of 5 entries
      </div>

      {/* Right Side */}
        
         <div className="flex items-center gap-1.5">
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 shadow-sm">‹</button>
          <button className="px-3.5 py-1.5 bg-blue-600 text-white rounded-lg font-bold shadow-md shadow-blue-500/20">1</button>
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 shadow-sm">›</button>
        </div>
      </div>

  );
}