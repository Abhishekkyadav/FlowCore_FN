"use client";
import React, { useState } from 'react';
import SearchBar from '../components/DocumentConfiguration/SearchBar';
import AddButton from '../components/DocumentConfiguration/AddButton';
import DocumentConfigurationTable from '../components/DocumentConfiguration/DocumentConfigurationTable';
import AddDocumentConfigurationModal from '../components/DocumentConfiguration/AddDocumentConfigurationModal';

export default function DocumentConfiguration() {
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(20); 

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen space-y-4">
      
      {/* BOX 1: HEADER & ADD BUTTON BOX */}
      <div className="bg-white px-6 py-4 rounded-xl border border-slate-200/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Document Configuration</h1>
          <p className="text-xs text-slate-400 mt-1">
            Dashboard &gt; Masters &gt; <span className="text-blue-600 font-semibold">Document Configuration</span>
          </p>
        </div>
        <AddButton onClick={() => setIsModalOpen(true)} />
      </div>

      {/* BOX 2: SEARCH BAR & TABLE BOX */}
      <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm space-y-5">
        <SearchBar 
          pageSize={pageSize} 
          setPageSize={setPageSize} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        <DocumentConfigurationTable 
          pageSize={pageSize} 
          searchQuery={searchQuery} 
          currentPage={currentPage}
          setTotalEntries={setTotalEntries}
        />
      </div>

      {/* BOX 3: PAGINATION FOOTER BOX */}
      <div className="bg-white px-6 py-4 rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-between text-xs text-slate-500 font-medium">
        <div>
          Showing {totalEntries === 0 ? 0 : (currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, totalEntries)} of {totalEntries} entries
        </div>

        <div className="flex items-center gap-1 text-[12px] text-slate-600 font-normal">
          <button onClick={() => handlePageChange(1)} className="px-2 py-1 text-slate-400 hover:text-slate-800 transition-colors">First</button>
          <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} className="px-2 py-1 text-slate-400 hover:text-slate-800 mr-1.5">‹ Prev</button>
          
          {[1, 2, 3, 4].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-2.5 py-1 text-center rounded transition-all min-w-[26px] ${
                currentPage === pageNumber ? 'bg-blue-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          <button onClick={() => handlePageChange(Math.min(currentPage + 1, 4))} className="px-2 py-1 text-slate-400 hover:text-slate-800 ml-1.5">Next ›</button>
          <button onClick={() => handlePageChange(4)} className="px-2 py-1 text-slate-400 hover:text-slate-800">Last</button>
        </div>
      </div>

      {/* Form Overlay Modal */}
      <AddDocumentConfigurationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}