import React, { useState } from 'react';

export default function Table({ rules, onTogglePool, searchTerm, pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  const searchedData = rules.filter((row) => {
    return (
      row.workflowStepId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.assignmentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.hierarchyNodeType.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedData = [...searchedData].sort((a, b) => {
    let valueA = a[sortColumn]; let valueB = b[sortColumn];
    if (typeof valueA === 'string') { valueA = valueA.toLowerCase(); valueB = valueB.toLowerCase(); }
    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const indexOfLastRow = currentPage * pageSize;
  const indexOfFirstRow = indexOfLastRow - pageSize;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(sortedData.length / pageSize);

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else { setSortColumn(columnName); setSortDirection("asc"); }
  };

  return (
    <div className="space-y-4">
      <div className="w-full overflow-x-auto border border-slate-200/70 rounded-2xl shadow-sm">
        <table className="w-full text-left border-collapse bg-white table-auto">
          <thead>
            <tr className="bg-slate-50/60 border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-400 select-none">
              <th className="py-3 px-4 w-16 text-center cursor-pointer hover:bg-slate-100/50" onClick={() => handleSort('id')}>
                S.No {sortColumn === 'id' ? (sortDirection === 'asc' ? '▲' : '▼') : '↕'}
              </th>
              <th className="py-3 px-4 cursor-pointer hover:bg-slate-100/50" onClick={() => handleSort('workflowStepId')}>
                Workflow Step ID {sortColumn === 'workflowStepId' ? (sortDirection === 'asc' ? '▲' : '▼') : '↕'}
              </th>
              <th className="py-3 px-4 cursor-pointer hover:bg-slate-100/50" onClick={() => handleSort('assignmentType')}>
                Assignment Type {sortColumn === 'assignmentType' ? (sortDirection === 'asc' ? '▲' : '▼') : '↕'}
              </th>
              <th className="py-3 px-4 cursor-pointer hover:bg-slate-100/50" onClick={() => handleSort('hierarchyNodeType')}>
                Hierarchy Node Type {sortColumn === 'hierarchyNodeType' ? (sortDirection === 'asc' ? '▲' : '▼') : '↕'}
              </th>
              <th className="py-3 px-4 cursor-pointer hover:bg-slate-100/50" onClick={() => handleSort('dynamicFunctionId')}>
                Dynamic Function ID {sortColumn === 'dynamicFunctionId' ? (sortDirection === 'asc' ? '▲' : '▼') : '↕'}
              </th>
              <th className="py-3 px-4 text-center w-32 font-bold text-slate-400">Is Pool Enabled</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-500">
            {currentRows.map((row, index) => (
              <tr key={row.id} className="hover:bg-slate-50/40 transition-colors">
                <td className="py-3.5 px-4 text-center font-medium text-slate-400">{indexOfFirstRow + index + 1}</td>
                <td className="py-3.5 px-4 font-bold text-slate-800 text-xs">{row.workflowStepId}</td>
                <td className="py-3.5 px-4">
                  <span className="bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md text-[10px] font-bold">
                    {row.assignmentType}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-500 font-medium text-[11px]">{row.hierarchyNodeType}</td>
                <td className="py-3.5 px-4 text-slate-400 font-mono text-[11px]">{row.dynamicFunctionId}</td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-bold text-[9px] ${row.isPoolEnabled ? 'bg-green-50 text-green-700 border border-green-200/60' : 'bg-red-50 text-red-600 border border-red-200/60'}`}>
                      {row.isPoolEnabled ? '✓ True' : '✕ False'}
                    </span>
                    <button 
                      type="button"
                      onClick={() => onTogglePool(row.id)} 
                      className="relative inline-flex items-center cursor-pointer focus:outline-none transform scale-90"
                    >
                      <div className={`w-8 h-4.5 rounded-full transition-all relative ${row.isPoolEnabled ? 'bg-indigo-600' : 'bg-slate-200'}`}>
                        <div className={`absolute top-[2px] bg-white border border-slate-300 rounded-full h-3.5 w-3.5 transition-all ${row.isPoolEnabled ? 'left-[14px]' : 'left-[2px]'}`} />
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer Controls */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-3 px-1">
        <span>Showing {sortedData.length === 0 ? 0 : indexOfFirstRow + 1} to {Math.min(indexOfLastRow, sortedData.length)} of {sortedData.length} entries</span>
        <div className="flex items-center gap-2">
          <button type="button" disabled={currentPage === 1} onClick={() => setCurrentPage(1)} className={`px-1 py-1 ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-indigo-600'}`}>First</button>
          <button type="button" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className={`px-1 py-1 ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-indigo-600'}`}>‹ Prev</button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} type="button" onClick={() => setCurrentPage(page)} className={`w-7 h-7 flex items-center justify-center rounded-lg font-bold text-xs ${currentPage === page ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/10' : 'text-slate-500 hover:bg-slate-100/50 hover:text-indigo-600'}`}>{page}</button>
            ))}
          </div>
          <button type="button" disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(currentPage + 1)} className={`px-1 py-1 ${currentPage === totalPages || totalPages === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-indigo-600'}`}>Next ›</button>
          <button type="button" disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(totalPages)} className={`px-1 py-1 ${currentPage === totalPages || totalPages === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-indigo-600'}`}>Last</button>
        </div>
      </div>
    </div>
  );
}