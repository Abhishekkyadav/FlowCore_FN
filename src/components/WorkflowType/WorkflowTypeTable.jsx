import React from 'react';

export default function WorkflowTypeTable() {
  const data = [
    { id: 1, name: 'Citizen Petition Workflow', code: 'PETITION-001', type: 'Petition', version: 1, published: true, status: true },
    { id: 2, name: 'Building Permission Workflow', code: 'BUILDING-001', type: 'Building Permission', version: 1, published: true, status: true },
    { id: 3, name: 'Leave Application Workflow', code: 'LEAVE-001', type: 'Leave', version: 1, published: false, status: true },
    { id: 4, name: 'Public Grievance Workflow', code: 'GRIEVANCE-001', type: 'Grievance', version: 1, published: true, status: true },
    { id: 5, name: 'Certificate Issuance Workflow', code: 'CERTIFICATE-001', type: 'Certificate', version: 1, published: false, status: true },
    { id: 6, name: 'Document Verification Workflow', code: 'VERIFY-001', type: 'Verification', version: 1, published: true, status: true },
  ];

  return (
    <div className="space-y-5">
      <div className="w-full overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
        <table className="w-full text-left border-collapse bg-white">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
              <th className="py-4.5 px-5 w-20 text-center">S.No</th>
              <th className="py-4.5 px-5 text-sm">Workflow Name</th>
              <th className="py-4.5 px-5">Workflow Code</th>
              <th className="py-4.5 px-5">Workflow Type</th>
              <th className="py-4.5 px-5 text-center">Version</th>
              <th className="py-4.5 px-5 text-center">Published</th>
              <th className="py-4.5 px-5 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-5 text-center font-medium text-slate-400">{index + 1}</td>
                <td className="py-4 px-5 font-bold text-slate-900 text-[14px]">{item.name}</td>
                <td className="py-4 px-5">
                  <span className="bg-slate-100 border border-slate-200 text-slate-800 px-2.5 py-1 rounded-md font-mono text-xs font-bold tracking-wide">
                    {item.code}
                  </span>
                </td>
                <td className="py-4 px-5 font-medium text-slate-500">{item.type}</td>
                <td className="py-4 px-5 text-center font-semibold text-slate-700">{item.version}</td>
                
                {/* Published Badge (Highlight Badges) */}
                <td className="py-4 px-5 text-center">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs ${
                    item.published 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-600 border border-red-200'
                  }`}>
                    {item.published ? '✓ Yes' : '✕ No'}
                  </span>
                </td>
                
                {/* Toggle Switch */}
                <td className="py-4 px-5 text-center">
                  <div className="flex justify-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={item.status} className="sr-only peer" />
                      <div className="w-10 h-5.5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-medium pt-1 px-1">
        <span>Showing 1 to {data.length} of {data.length} entries</span>
        <div className="flex items-center gap-1.5">
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 shadow-sm">‹</button>
          <button className="px-3.5 py-1.5 bg-blue-600 text-white rounded-lg font-bold shadow-md shadow-blue-500/20">1</button>
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 shadow-sm">›</button>
        </div>
      </div>
    </div>
  );
}