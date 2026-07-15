import React, { useState } from 'react';

export default function Table({ permissions, onToggle, searchTerm, pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  // Filter Logic
  const searchedData = permissions.filter((row) => {
    return (
      row.stepName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.stepCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.workflow.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sort Logic
  const sortedData = [...searchedData].sort((a, b) => {
    let valueA = a[sortColumn]; let valueB = b[sortColumn];
    if (typeof valueA === 'string') { valueA = valueA.toLowerCase(); valueB = valueB.toLowerCase(); }
    if (valueA < valueB) return sortDirection === "asc" ? '' : 1;
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
      {/* ❌ "Show Entries" line deleted from here completely */}

      {/* Grid Layout scaled down for less zoom */}
      <div className="w-full overflow-x-auto border border-slate-200/70 rounded-2xl shadow-sm">
        <table className="w-full text-left border-collapse bg-white table-auto">
             <thead>
                        
                <tr className="bg-slate-50/60 border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-400 select-none">
                  <th className="py-3 px-4 w-16 text-center cursor-pointer hover:bg-slate-100/50" onClick={() => handleSort('id')}>
                    S.No {sortColumn === 'id' ? (sortDirection === 'asc' ? '▲' : '▼') : '↕'}
                  </th>
                  <th className="py-3 px-4 cursor-pointer hover:bg-slate-100/50" onClick={() => handleSort('stepName')}>
                    Step Name {sortColumn === 'stepName' ? (sortDirection === 'asc' ? '▲' : '▼') : '↕'}
                  </th>
                  <th className="py-3 px-4 cursor-pointer hover:bg-slate-100/50" onClick={() => handleSort('stepCode')}>
                    Step Code {sortColumn === 'stepCode' ? (sortDirection === 'asc' ? '▲' : '▼') : '↕'}
                  </th>
                  <th className="py-3 px-4 cursor-pointer hover:bg-slate-100/50" onClick={() => handleSort('workflow')}>
                    Workflow Relation {sortColumn === 'workflow' ? (sortDirection === 'asc' ? '▲' : '▼') : '↕'}
                  </th>
                  {['Can View', 'Can Edit', 'Can Approve', 'Can Reject'].map((h) => (
                    <th key={h} className="py-3 px-4 text-center w-28 text-slate-400 font-bold">{h}</th>
                  ))}
                </tr>
              
           </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-500">
            {currentRows.map((row, index) => (
              <tr key={row.id} className="hover:bg-slate-50/40 transition-colors">
                <td className="py-3.5 px-4 text-center font-medium text-slate-400">{indexOfFirstRow + index + 1}</td>
                <td className="py-3.5 px-4 font-bold text-slate-800 text-xs">{row.stepName}</td>
                <td className="py-3.5 px-4">
                  <span className="bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md font-mono text-[10px] font-bold tracking-wide">
                    {row.stepCode}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-400 font-medium text-[11px]">{row.workflow}</td>
                
                {['canView', 'canEdit', 'canApprove', 'canReject'].map((field) => (
                  <td key={field} className="py-3.5 px-4">
                    <div className="flex flex-col items-center justify-center space-y-1">
                      {/* Compact Badges matching sample */}
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-bold text-[9px] ${row[field] ? 'bg-green-50 text-green-700 border border-green-200/60' : 'bg-red-50 text-red-600 border border-red-200/60'}`}>
                        {row[field] ? '✓ Yes' : '✕ No'}
                      </span>
                      {/* Micro Switches */}
                      <button 
                        type="button"
                        onClick={() => onToggle(row.id, field)} 
                        className="relative inline-flex items-center cursor-pointer focus:outline-none transform scale-90"
                      >
                        <div className={`w-8 h-4.5 rounded-full transition-all relative ${row[field] ? 'bg-indigo-600' : 'bg-slate-200'}`}>
                          <div className={`absolute top-[2px] bg-white border border-slate-300 rounded-full h-3.5 w-3.5 transition-all ${row[field] ? 'left-[14px]' : 'left-[2px]'}`} />
                        </div>
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      {/* Footer Meta Pagination Controls */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-3 px-1">
        <span>
          Showing {sortedData.length === 0 ? 0 : indexOfFirstRow + 1} to {Math.min(indexOfLastRow, sortedData.length)} of {sortedData.length} entries
        </span>
        
        <div className="flex items-center gap-1 text-slate-600 text-[11px]">
          {/* First Button */}
          <button 
            type="button" 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(1)} 
            className={`px-2.5 py-1 border border-slate-200 rounded-md font-medium transition-all ${currentPage === 1 ? 'bg-slate-50 text-slate-300 cursor-not-allowed' : 'bg-white hover:bg-slate-50'}`}
          >
            First
          </button>

          {/* Prev Button */}
          <button 
            type="button" 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(currentPage - 1)} 
            className={`px-2.5 py-1 border border-slate-200 rounded-md font-medium transition-all ${currentPage === 1 ? 'bg-slate-50 text-slate-300 cursor-not-allowed' : 'bg-white hover:bg-slate-50'}`}
          >
            ‹ Prev
          </button>

          {/* Dynamic Number Logic */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(page => page >= currentPage - 1 && page <= currentPage + 1 || page === 1 || page === totalPages)
            .map((page, index, array) => (
              <React.Fragment key={page}>
                {index > 0 && array[index - 1] !== page - 1 && <span className="px-1 text-slate-300">...</span>}
                <button
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`w-6.5 h-6.5 flex items-center justify-center rounded-md font-bold text-xs border transition-all ${
                    currentPage === page
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/20'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {page}
                </button>
              </React.Fragment>
            ))}

          {/* Next Button */}
          <button 
            type="button" 
            disabled={currentPage === totalPages || totalPages === 0} 
            onClick={() => setCurrentPage(currentPage + 1)} 
            className={`px-2.5 py-1 border border-slate-200 rounded-md font-medium transition-all ${currentPage === totalPages || totalPages === 0 ? 'bg-slate-50 text-slate-300 cursor-not-allowed' : 'bg-white hover:bg-slate-50'}`}
          >
            Next ›
          </button>

          {/* Last Button */}
          <button 
            type="button" 
            disabled={currentPage === totalPages || totalPages === 0} 
            onClick={() => setCurrentPage(totalPages)} 
            className={`px-2.5 py-1 border border-slate-200 rounded-md font-medium transition-all ${currentPage === totalPages || totalPages === 0 ? 'bg-slate-50 text-slate-300 cursor-not-allowed' : 'bg-white hover:bg-slate-50'}`}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
}