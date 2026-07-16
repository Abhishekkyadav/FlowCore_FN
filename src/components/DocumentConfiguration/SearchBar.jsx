"use client";
import React from 'react';

export default function SearchBar({ pageSize, setPageSize, searchQuery, setSearchQuery }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full bg-transparent">
      
      {/* Search Input with reduced roundness (rounded-lg like page size) */}
      <div className="relative w-full sm:w-80">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search document name..."
          className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-700 placeholder-slate-400/80 font-normal transition-all shadow-sm"
        />
        <span className="absolute left-3.5 top-[11px] flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>

      {/* Rows dropdown selector layout */}
      <div className="flex items-center">
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-xs bg-white text-slate-600 focus:outline-none focus:border-blue-500 cursor-pointer font-medium shadow-sm min-w-[95px]"
        >
          <option value={5}>5 Rows</option>
          <option value={10}>10 Rows</option>
          <option value={20}>20 Rows</option>
        </select>
      </div>
    </div>
  );
}
