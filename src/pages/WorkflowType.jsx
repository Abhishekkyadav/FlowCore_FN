import React, { useState } from 'react';
import AddButton from '../components/WorkflowType/AddButton';
import SearchBar from '../components/WorkflowType/SearchBar';
import WorkflowTypeTable from '../components/WorkflowType/WorkflowTypeTable';
import AddWorkflowTypeModal from '../components/WorkflowType/AddWorkflowTypeModal';

export default function WorkflowTypePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* w-full se ab ye pure browser page par bada hokar fit ho jayega */}
      <div className="w-full space-y-5">
        
        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Workflow Type</h1>
            <p className="text-xs text-slate-400 mt-1">
              Dashboard &gt; Types &gt; <span className="text-blue-600 font-semibold">Workflow Type</span>
            </p>
          </div>
          
          <AddButton onOpen={() => setModalOpen(true)} />
        </div>

        {/* Main Data Container */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
          <SearchBar />
          <WorkflowTypeTable />
        </div>

      </div>

      {/* Center Popup Window */}
      <AddWorkflowTypeModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
}