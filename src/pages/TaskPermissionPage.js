import React, { useState } from 'react';
import AddButton from '../components/task-permission/AddButton';
import SearchBar from '../components/task-permission/SearchBar';
import Table from '../components/task-permission/Table';
import Popup from '../components/task-permission/Popup';

export default function TaskPermissionPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(10); // Page size moved to master level

  const [permissions, setPermissions] = useState([
    { id: 1, stepName: 'Accounts Audit', stepCode: 'AUDIT-03', workflow: 'Leave Application Workflow', canView: false, canEdit: true, canApprove: true, canReject: false },
    { id: 2, stepName: 'Document Verification', stepCode: 'VERIFY-02', workflow: 'Building Permission Workflow', canView: true, canEdit: false, canApprove: false, canReject: true },
    { id: 3, stepName: 'Initial Scrutiny', stepCode: 'SCRUTINY-01', workflow: 'Citizen Petition Workflow', canView: true, canEdit: true, canApprove: false, canReject: false },
  ]);

  const handleTogglePermission = (id, field) => {
    setPermissions(prev => prev.map(row => row.id === id ? { ...row, [field]: !row[field] } : row));
  };

  const handleSavePermission = (newPermission) => {
    setPermissions([...permissions, { id: permissions.length + 1, ...newPermission }]);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 text-slate-800">
      <div className="w-full space-y-5">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Task Permission</h1>
            <p className="text-[11px] text-slate-400 mt-0.5">Dashboard &gt; Settings &gt; <span className="text-indigo-600 font-semibold">Task Permission Master</span></p>
          </div>
          <AddButton onOpen={() => setModalOpen(true)} />
        </div>

        {/* Action Controls & Data Container */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          
          {/* Search Bar & Page Size Row (Aligned side by side) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            
            {/* Show Entries Dropdown shifted to the Right side */}
            <div className="flex items-center space-x-1.5 text-[11px] text-slate-400 font-medium sm:pr-2">
              <span>Show</span>
              <select 
                value={pageSize} 
                onChange={(e) => setPageSize(Number(e.target.value))} 
                className="border border-slate-200 rounded-lg py-1 px-1.5 text-xs bg-white font-bold text-slate-700 focus:outline-none focus:border-indigo-500 shadow-sm transition-all"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
              <span>entries</span>
            </div>
          </div>

          {/* Table Container */}
          <Table 
            permissions={permissions} 
            searchTerm={searchTerm} 
            pageSize={pageSize} 
            onToggle={handleTogglePermission} 
          />
        </div>
      </div>

      <Popup isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSavePermission} />
    </div>
  );
}