import React from 'react';

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="relative max-w-sm w-full">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        <svg className="w-4.5 h-4.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search rule keys..."
        className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50/50 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 text-slate-700 placeholder-slate-400 transition-all shadow-sm"
      />
    </div>
  );
}