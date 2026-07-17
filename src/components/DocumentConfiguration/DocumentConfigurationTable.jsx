"use client";
import React, { useState, useEffect } from 'react';

export default function DocumentConfigurationTable({ pageSize, searchQuery, currentPage, setTotalEntries }) {
  const initialData = [
    { id: '1', docId: '1', stepId: '1', name: 'Identity Proof', extensions: 'pdf, jpg', maxSize: '10', isMandatory: true },
    { id: '2', docId: '2', stepId: '2', name: 'NOC', extensions: 'pdf', maxSize: '20', isMandatory: false },
    { id: '3', docId: '3', stepId: '1', name: 'Address Proof', extensions: 'pdf, png, jpg', maxSize: '5', isMandatory: true },
    { id: '4', docId: '4', stepId: '3', name: 'Income Certificate', extensions: 'pdf', maxSize: '15', isMandatory: false },
    { id: '5', docId: '5', stepId: '2', name: 'Experience Letter', extensions: 'pdf, docx', maxSize: '12', isMandatory: true },
    { id: '6', docId: '6', stepId: '1', name: 'Aadhaar Card', extensions: 'pdf, jpg, png', maxSize: '2', isMandatory: true },
    { id: '7', docId: '7', stepId: '1', name: 'Pan Card', extensions: 'pdf, png', maxSize: '2', isMandatory: true },
    { id: '8', docId: '8', stepId: '2', name: 'Voter ID Card', extensions: 'pdf, jpg', maxSize: '5', isMandatory: false },
    { id: '9', docId: '9', stepId: '4', name: 'Passport Size Photograph', extensions: 'jpg, jpeg, png', maxSize: '1', isMandatory: true },
    { id: '10', docId: '10', stepId: '3', name: 'Property Tax Receipt', extensions: 'pdf', maxSize: '10', isMandatory: true },
    { id: '11', docId: '11', stepId: '2', name: 'Electricity Bill', extensions: 'pdf, jpg', maxSize: '4', isMandatory: false },
    { id: '12', docId: '12', stepId: '5', name: 'Caste Certificate', extensions: 'pdf', maxSize: '3', isMandatory: false },
    { id: '13', docId: '13', stepId: '3', name: 'Rent Agreement', extensions: 'pdf, docx', maxSize: '15', isMandatory: true },
    { id: '14', docId: '14', stepId: '4', name: 'Bank Statement', extensions: 'pdf', maxSize: '20', isMandatory: true },
    { id: '15', docId: '15', stepId: '6', name: 'Educational Certificate', extensions: 'pdf', maxSize: '12', isMandatory: false },
    { id: '16', docId: '16', stepId: '2', name: 'Business Registration Certificate', extensions: 'pdf', maxSize: '25', isMandatory: true },
    { id: '17', docId: '17', stepId: '5', name: 'Partnership Deed', extensions: 'pdf, doc', maxSize: '30', isMandatory: false },
    { id: '18', docId: '18', stepId: '1', name: 'Driving License', extensions: 'pdf, jpg, png', maxSize: '3', isMandatory: false },
    { id: '19', docId: '19', stepId: '4', name: 'Salary Slip', extensions: 'pdf, png', maxSize: '5', isMandatory: true },
    { id: '20', docId: '20', stepId: '7', name: 'Affidavit of Declaration', extensions: 'pdf', maxSize: '8', isMandatory: true }
  ];

  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState('asc');

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

  const toggleMandatory = (id) => {
    setData(data.map(item => 
      item.id === id ? { ...item, isMandatory: !item.isMandatory } : item
    ));
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setTotalEntries(filteredData.length);
  }, [filteredData.length, setTotalEntries]);

  const startIndex = (currentPage - 1) * pageSize;
  const visibleData = filteredData.slice(startIndex, startIndex + pageSize);

  return (
    <div className="w-full overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
            <th className="py-4.5 px-5 w-20 text-center">S.No</th>
            <th onClick={() => handleSort('name')} className="py-4.5 px-5 text-sm cursor-pointer select-none hover:text-slate-900">
              Document Name {sortOrder === 'asc' ? '▲' : '▼'}
            </th>
            <th onClick={() => handleSort('stepId')} className="py-4.5 px-5 text-sm cursor-pointer select-none hover:text-slate-900">
              Workflow Step ID {sortOrder === 'asc' ? '▲' : '▼'}
            </th>
            <th className="py-4.5 px-5 text-center">Allowed Extensions</th>
            <th className="py-4.5 px-5 text-center">Max Size (MB)</th>
            <th className="py-4.5 px-5 text-center">Is Mandatory</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
          {visibleData.map((item, index) => (
            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="py-4 px-5 text-center font-medium text-slate-400">
                {startIndex + index + 1}
              </td>
              <td className="py-4 px-5 font-bold text-slate-900 text-[14px]">
                {item.name}
              </td>
              <td className="py-3.5 px-5 text-center font-medium text-slate-700">
                {item.stepId}
              </td>
              <td className="py-3.5 px-5 text-center">
                <span className="text-slate-600 font-normal">
                  {item.extensions}
                </span>
              </td>
              <td className="py-3.5 px-5 text-center font-semibold text-slate-800">
                {item.maxSize} MB
              </td>
              <td className="py-3.5 px-5 text-center">
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    onClick={() => toggleMandatory(item.id)}
                    className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ${
                      item.isMandatory ? 'bg-blue-600' : 'bg-slate-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        item.isMandatory ? 'translate-x-4' : 'translate-x-0'
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
  );
}
