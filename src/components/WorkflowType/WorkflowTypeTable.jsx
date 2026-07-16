"use client";
import React, { useState } from 'react';

export default function WorkflowTypeTable({ pageSize }) {
  // 1. Initial Data
  const initialData = [
    { id: '1', name: 'Citizen Petition Workflow', code: 'PET-001', type: 'Petition', version: '1', published: true, status: true },
    { id: '2', name: 'Building Permission Workflow', code: 'BLD-001', type: 'Building Permission', version: '1', published: true, status: true },
    { id: '3', name: 'Leave Application Workflow', code: 'LEV-001', type: 'Leave', version: '1', published: false, status: true },
    { id: '4', name: 'Grievance Redressal Workflow', code: 'GRV-001', type: 'Grievance', version: '2', published: true, status: true },
    { id: '5', name: 'Trade License Workflow', code: 'TRD-001', type: 'Trade License', version: '1', published: true, status: true },
    { id: '6', name: 'Document Verification', code: 'DOC-001', type: 'Verification', version: '1', published: true, status: true },
  ];

  // 2. All States (Yahi par currentPage define kiya hai jisse error hat jayega)
  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1); 

  // 3. Pagination Logic
  // Agar Math.ceil 0 aata hai, to hum usko default 1 page manenge
  const totalPages = Math.ceil(data.length / pageSize) || 1; 
  const startIndex = (currentPage - 1) * pageSize;
  const visibleData = data.slice(startIndex, startIndex + pageSize);

  // 4. Sorting Logic
  const handleSort = (columnKey) => {
    const isAsc = sortOrder === 'asc';
    setSortOrder(isAsc ? 'desc' : 'asc');
    const sortedData = [...data].sort((a, b) => {
      if (a[columnKey] < b[columnKey]) return isAsc ? -1 : 1;
      if (a[columnKey] > b[columnKey]) return isAsc ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  // 5. Toggle Status Logic
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
          
          {/* Table Header */}
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
              <th className="py-4.5 px-5 text-center">Version</th>
              <th className="py-4.5 px-5 text-center">Published</th>
              <th className="py-4.5 px-5 text-center">Status</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            {/* Map ab visibleData par chal raha hai taaki pagination theek se kaam kare */}
            {visibleData.map((item, index) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-5 text-center font-medium text-slate-400">
                  {startIndex + index + 1}
                </td>
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
                
                {/* Status Toggle Column */}
                <td className="py-4 px-5 text-center">
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
<div className="flex items-center justify-end gap-1 text-[13px] text-slate-700 font-normal mt-4 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
  
  {/* First Button */}
  <button 
    onClick={() => setCurrentPage(1)} 
    className="px-2.5 py-1 text-slate-500 hover:text-slate-900 transition-colors"
  >
    First
  </button>
  
  {/* Prev Button */}
  <button 
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
    className="px-2.5 py-1 text-slate-500 hover:text-slate-900 transition-colors mr-2"
  >
    ‹ Prev
  </button>
  
  {/* 1 se lekar 4 tak ke Numbers  */}
  {[1, 2, 3, 4 ].map((pageNumber) => (
    <button 
      key={pageNumber} 
      onClick={() => setCurrentPage(pageNumber)}
      className={`px-3 py-1 text-center rounded transition-all min-w-[28px] ${
        currentPage === pageNumber 
          ? 'bg-blue-600 text-white font-medium shadow-sm' 
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {pageNumber}
    </button>
  ))}

  {/* Next Button */}
  <button 
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, 7))} 
    className="px-2.5 py-1 text-slate-500 hover:text-slate-900 transition-colors ml-2"
  >
    Next ›
  </button>
  
  {/* Last Button */}
  <button 
    onClick={() => setCurrentPage(7)} 
    className="px-2.5 py-1 text-slate-500 hover:text-slate-900 transition-colors"
  >
    Last
  </button>

</div>
    </div>
  );
}