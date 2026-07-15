import React, { useState } from 'react';
import SearchBar from '../components/WorkflowType/SearchBar';
import WorkflowTypeTable from '../components/WorkflowType/WorkflowTypeTable';
import AddWorkflowTypeModal from '../components/WorkflowType/AddWorkflowTypeModal';
import AddButton from '../components/WorkflowType/AddButton';

export default function WorkflowTypePage() {
  const [modalOpen, setModalOpen] = useState(false);
  
  // 1. Ek simple state banayi rows count store karne ke liye (Default 10)
  const [pageSize, setPageSize] = useState(10); 

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="w-full space-y-5">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Workflow Type</h1>
            <p className="text-xs text-slate-400 mt-1">
              Dashboard &gt; Types &gt; <span className="text-blue-600 font-semibold">Workflow Type</span>
            </p>
          </div>
          <AddButton onOpen={() => setModalOpen(true)} />
        </div>

        {/* Content Section */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex justify-between items-center w-full">
            <div className="w-full max-w-xs">
              <SearchBar />
            </div>
            
            {/* 2. Dropdown jahan se user size select karega */}
            <div>
              <select 
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white cursor-pointer outline-none shadow-sm text-slate-700"
              >
                <option value={2}>2 Rows (Testing)</option>
                <option value={10}>10 Rows</option>
                <option value={20}>20 Rows</option>
                <option value={50}>50 Rows</option>
              </select>
            </div>
          </div>

          {/* 3. Table ke andar pageSize ko bhej diya */}
          <WorkflowTypeTable pageSize={pageSize} />
        </div>

      </div>

      <AddWorkflowTypeModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
}