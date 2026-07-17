import React from 'react';

export default function SearchBar({
  searchTerm,
  onSearchChange,
  rowsPerPage,
  onRowsChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Search Input */}
      <div className="relative max-w-sm w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <svg
            className="w-4.5 h-4.5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>

        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search user, node or role code..."
          className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-slate-700 placeholder-slate-400 transition-all shadow-sm"
        />
      </div>

      <div className="flex items-center gap-3">

  {/* Export Dropdown */}

  <select
  onChange={(e) => {

    const value = e.target.value;

    if (!value) return;

    alert(`${value.toUpperCase()} export coming soon`);

    e.target.selectedIndex = 0;

  }}
    className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
  >
    <option value=" "disabled> Export </option>
    <option value="pdf"> PDF</option>
    <option value="excel">Excel</option>
    <option value="csv">CSV</option>
    <option value="png">PNG</option>
    <option value="jpg">JPG</option>
  </select>

  {/* Rows Dropdown */}

  <select
    value={rowsPerPage}
    onChange={(e) => onRowsChange(Number(e.target.value))}
    className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500"
  >
    <option value={5}>5 Rows</option>
    <option value={10}>10 Rows</option>
    <option value={25}>25 Rows</option>
    <option value={50}>50 Rows</option>
  </select>

</div>
    </div>
  );
}