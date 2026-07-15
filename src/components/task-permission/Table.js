import React from 'react';

export default function Table({ permissions, searchTerm, onToggle }) {
  
  // 1. Search Filter
  const filteredData = permissions.filter((row) => {
    const nameMatch = row.stepName.toLowerCase().includes(searchTerm.toLowerCase());
    const codeMatch = row.stepCode.toLowerCase().includes(searchTerm.toLowerCase());
    const workflowMatch = row.workflow.toLowerCase().includes(searchTerm.toLowerCase());
    
    return nameMatch || codeMatch || workflowMatch;
  });

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
      <table className="w-full text-left">
        
        {/* Table  Heading */}
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 text-xs uppercase font-bold">
            <th className="p-4">S.No</th>
            <th className="p-4">Step Name</th>
            <th className="p-4">Step Code</th>
            <th className="p-4">Workflow Definition</th>
            <th className="p-4 text-center">Can View</th>
            <th className="p-4 text-center">Can Edit</th>
            <th className="p-4 text-center">Can Approve</th>
            <th className="p-4 text-center">Can Reject</th>
          </tr>
        </thead>
        
        {/* Table Data (Body) */}
        <tbody className="text-sm text-slate-700">
          {filteredData.map((row, index) => (
            <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50">
              
              {/* 1. Serial Number */}
              <td className="p-4 text-slate-400">{index + 1}</td>
              
              {/* 2. Step Name */}
              <td className="p-4 font-bold">{row.stepName}</td>
              
              {/* 3. Step Code (Pill Badge) */}
              <td className="p-4">
                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs border border-slate-200 uppercase font-semibold">
                  {row.stepCode}
                </span>
              </td>
              
              {/* 4. Workflow Definition */}
              <td className="p-4 text-slate-500">{row.workflow}</td>

              {/* ================= COLUMN 5: CAN VIEW ================= */}
              <td className="p-4 text-center">
                
                <div className="mb-1">
                  {row.canView ? (
                    <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded border border-emerald-200 font-medium">✓ Yes</span>
                  ) : (
                    <span className="bg-rose-50 text-rose-700 text-xs px-2 py-0.5 rounded border border-rose-200 font-medium">✕ No</span>
                  )}
                </div>
                
                <button 
                  onClick={() => onToggle(row.id, 'canView')}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full ${row.canView ? 'bg-blue-600' : 'bg-slate-200'}`}
                >
                  <span className={`inline-block h-3 w-3 rounded-full bg-white transition-all ${row.canView ? 'translate-x-5' : 'translate-x-1'}`} />
                </button>
              </td>

              {/* ================= COLUMN 6: CAN EDIT ================= */}
              <td className="p-4 text-center">
                <div className="mb-1">
                  {row.canEdit ? (
                    <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded border border-emerald-200 font-medium">✓ Yes</span>
                  ) : (
                    <span className="bg-rose-50 text-rose-700 text-xs px-2 py-0.5 rounded border border-rose-200 font-medium">✕ No</span>
                  )}
                </div>
                <button 
                  onClick={() => onToggle(row.id, 'canEdit')}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full ${row.canEdit ? 'bg-blue-600' : 'bg-slate-200'}`}
                >
                  <span className={`inline-block h-3 w-3 rounded-full bg-white transition-all ${row.canEdit ? 'translate-x-5' : 'translate-x-1'}`} />
                </button>
              </td>

              {/* ================= COLUMN 7: CAN APPROVE ================= */}
              <td className="p-4 text-center">
                <div className="mb-1">
                  {row.canApprove ? (
                    <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded border border-emerald-200 font-medium">✓ Yes</span>
                  ) : (
                    <span className="bg-rose-50 text-rose-700 text-xs px-2 py-0.5 rounded border border-rose-200 font-medium">✕ No</span>
                  )}
                </div>
                <button 
                  onClick={() => onToggle(row.id, 'canApprove')}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full ${row.canApprove ? 'bg-blue-600' : 'bg-slate-200'}`}
                >
                  <span className={`inline-block h-3 w-3 rounded-full bg-white transition-all ${row.canApprove ? 'translate-x-5' : 'translate-x-1'}`} />
                </button>
              </td>

              {/* ================= COLUMN 8: CAN REJECT ================= */}
              <td className="p-4 text-center">
                <div className="mb-1">
                  {row.canReject ? (
                    <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded border border-emerald-200 font-medium">✓ Yes</span>
                  ) : (
                    <span className="bg-rose-50 text-rose-700 text-xs px-2 py-0.5 rounded border border-rose-200 font-medium">✕ No</span>
                  )}
                </div>
                <button 
                  onClick={() => onToggle(row.id, 'canReject')}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full ${row.canReject ? 'bg-blue-600' : 'bg-slate-200'}`}
                >
                  <span className={`inline-block h-3 w-3 rounded-full bg-white transition-all ${row.canReject ? 'translate-x-5' : 'translate-x-1'}`} />
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Footer entries count */}
      <div className="p-4 bg-slate-50 text-xs text-slate-400 font-medium border-t border-slate-100">
        Showing {filteredData.length} entries
      </div>
    </div>
  );
}