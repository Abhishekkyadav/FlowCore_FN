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

  <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600">
    First
  </button>

  <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600">
    ‹ Prev
  </button>

  <button className="w-9 h-9 border border-slate-200 rounded-lg bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600">
    1
  </button>

  <button className="w-9 h-9 border border-slate-200 rounded-lg bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600">
    2
  </button>

  <button className="w-9 h-9 border border-slate-200 rounded-lg bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600">
    3
  </button>

  <button className="w-9 h-9 border border-slate-200 rounded-lg bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600">
    4
  </button>

  <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600">
    Next ›
  </button>

  <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600">
    Last
  </button>

</div>
</div>

  );
}