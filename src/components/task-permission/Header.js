import React from 'react';

export default function Header({ searchTerm, setSearchTerm, onAddClick }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Task Permission Master</h1>
        <div className="flex items-center space-x-2 text-xs text-slate-400 mt-1 font-medium">
          <span>Dashboard</span>
          <span>&gt;</span>
          <span>Masters</span>
          <span>&gt;</span>
          <span className="text-blue-600 font-semibold">Task Permission Master</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Search workflow name or code..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white placeholder:text-slate-400 min-w-[260px]"
        />
        {/* Added onClick trigger here */}
        <button 
          onClick={onAddClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center shadow-sm shadow-blue-500/10"
        >
          + Add Task Permission
        </button>
      </div>
    </div>
  );
}