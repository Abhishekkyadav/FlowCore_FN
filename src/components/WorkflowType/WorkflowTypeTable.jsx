"use client";
import React, { useState } from 'react';

export default function WorkflowTypeTable({ pageSize }) {

  const initialData = [
    { id: '1', name: 'Citizen Petition Workflow', code: 'PET-001', type: 'Petition', version: '1', published: true, status: true },
    { id: '2', name: 'Building Permission Workflow', code: 'BLD-001', type: 'Building Permission', version: '1', published: true, status: true },
    { id: '3', name: 'Leave Application Workflow', code: 'LEV-001', type: 'Leave', version: '1', published: false, status: true },
    { id: '4', name: 'Grievance Redressal Workflow', code: 'GRV-001', type: 'Grievance', version: '2', published: true, status: true },
    { id: '5', name: 'Trade License Workflow', code: 'TRD-001', type: 'Trade License', version: '1', published: true, status: true },
  ];

  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState('asc');

  //sorting function
  const handleSort = (columnKey) => {
    const isAsc = sortOrder === 'asc';
    const nextOrder = isAsc ? 'desc' : 'asc';
    setSortOrder(nextOrder);

    const sortedData = [...data].sort((a, b) => {
      if (a[columnKey] < b[columnKey]) return isAsc ? -1 : 1;
      if (a[columnKey] > b[columnKey]) return isAsc ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  // Switch ko click karne par state toggle karne ka function
  const toggleSwitch = (id) => {
    const updatedData = data.map(item => 
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updatedData);
  };

  return (
    <div className="space-y-5">
      <div className="w-full overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
        <table className="w-full text-left border-collapse bg-white">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
              <th className="py-4.5 px-5 w-20 text-center">S.No</th>
              <th onClick={() => handleSort('name')} className="py-4.5 px-5 text-sm cursor-pointer select-none hover:text-slate-900">
                Workflow Name {sortOrder === 'asc' ? '▲' : '▼'}
              </th>
              <th onClick={() => handleSort('code')} className="py-4.5 px-5 cursor-pointer select-none hover:text-slate-900">
                Workflow Code {sortOrder === 'asc' ? '▲' : '▼'}
              </th>
              <th onClick={() => handleSort('type')} className="py-4.5 px-5 cursor-pointer select-none hover:text-slate-900">
                Workflow Type {sortOrder === 'asc' ? '▲' : '▼'}
              </th>
              <th className="py-4.5 px-5">Version</th>
              <th className="py-4.5 px-5 text-center">Published</th>
              <th className="py-4.5 px-5 text-center">Status</th>
            
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            
            {/* .slice(0, pageSize) filtering ke liye */}
            {data.slice(0, pageSize).map((item, index) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-5 text-center font-medium text-slate-400">{index + 1}</td>
                <td className="py-4 px-5 font-bold text-slate-900 text-[14px]">{item.name}</td>
                <td className="py-4 px-5 text-slate-500">{item.code}</td>
                <td className="py-4 px-5 text-slate-500">{item.type}</td>
                <td className="py-4 px-5 text-center font-semibold text-slate-700">{item.version}</td>
                
                {/* Published Column */}
                <td className="py-4 px-5 text-center">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${item.published ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {item.published ? '✓ Yes' : '✕ No'}
                  </span>
                </td>
                
                {/* Toggle Switch Column */}
                <td className="py-4 px-5">
                  <div className="flex justify-center items-center">
                    <button
                      type="button"
                      onClick={() => toggleSwitch(item.id)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ${
                        item.status ? 'bg-blue-600' : 'bg-slate-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          item.status ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Showing 1 to {Math.min(pageSize, data.length)} of {data.length} entries</span>
        <div className="flex items-center gap-1.5">
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white">Previous</button>
          <button className="px-3.5 py-1.5 bg-blue-600 text-white rounded-lg font-medium">1</button>
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white">Next</button>
        </div>
      </div>
    </div>
  );
}