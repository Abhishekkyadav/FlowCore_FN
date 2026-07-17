"use client";

export default function Header({ onAddNodeClick }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex justify-between items-center w-full">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Hierarchy Node</h1>
                <nav className="text-xs text-slate-400 mt-1">
                    Dashboard &gt; Setup &gt; <span className="text-blue-600 font-semibold">Hierarchy Node</span>
                </nav>
            </div>
            <button 
                onClick={onAddNodeClick}
                className="bg-[#1e60ff] hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
                <span className="text-base font-bold">+</span> Add Hierarchy Node 
            </button>
        </div>
    );
}