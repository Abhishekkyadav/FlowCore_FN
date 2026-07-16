import React, { useState } from 'react';
import AddButton from '../components/assignment-rule/AddButton';
import SearchBar from '../components/assignment-rule/SearchBar';
import Table from '../components/assignment-rule/Table';
import Popup from '../components/assignment-rule/Popup';

export default function AssignmentRulePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(5);

  const [rules, setRules] = useState([
    { id: 1, workflowStepId: '1', assignmentType: 'Hierarchy', hierarchyNodeType: 'Block', dynamicFunctionId: 'N/A', isPoolEnabled: true },
    { id: 2, workflowStepId: '2', assignmentType: 'Dynamic', hierarchyNodeType: 'District', dynamicFunctionId: '1', isPoolEnabled: false },
    { id: 3, workflowStepId: '3', assignmentType: 'Hierarchy', hierarchyNodeType: 'District', dynamicFunctionId: 'N/A', isPoolEnabled: true },
    { id: 4, workflowStepId: '4', assignmentType: 'Dynamic', hierarchyNodeType: 'Block', dynamicFunctionId: '2', isPoolEnabled: false },
    { id: 5, workflowStepId: '5', assignmentType: 'Hierarchy', hierarchyNodeType: 'Block', dynamicFunctionId: 'N/A', isPoolEnabled: true },
    { id: 6, workflowStepId: '6', assignmentType: 'Dynamic', hierarchyNodeType: 'District', dynamicFunctionId: '4', isPoolEnabled: true },
    { id: 7, workflowStepId: '7', assignmentType: 'Dynamic', hierarchyNodeType: 'District', dynamicFunctionId: '4', isPoolEnabled: true },
    { id: 8, workflowStepId: '8', assignmentType: 'Dynamic', hierarchyNodeType: 'District', dynamicFunctionId: '4', isPoolEnabled: true },
    { id: 9, workflowStepId: '9', assignmentType: 'Dynamic', hierarchyNodeType: 'District', dynamicFunctionId: '4', isPoolEnabled: true },
    { id: 10, workflowStepId: '10', assignmentType: 'H', hierarchyNodeType: 'District', dynamicFunctionId: '4', isPoolEnabled: true },
    { id: 11, workflowStepId: '11', assignmentType: 'Dynamic', hierarchyNodeType: 'District', dynamicFunctionId: '4', isPoolEnabled: true },
    { id: 12, workflowStepId: '12', assignmentType: 'Dynamic', hierarchyNodeType: 'District', dynamicFunctionId: '4', isPoolEnabled: true },
    { id: 13, workflowStepId: '13', assignmentType: 'Dynamic', hierarchyNodeType: 'District', dynamicFunctionId: '4', isPoolEnabled: true },
    { id: 14, workflowStepId: '14', assignmentType: 'Dynamic', hierarchyNodeType: 'District', dynamicFunctionId: '4', isPoolEnabled: true },
  ]);

  const handleTogglePool = (id) => {
    setRules(prev => prev.map(row => row.id === id ? { ...row, isPoolEnabled: !row.isPoolEnabled } : row));
  };

  const handleSaveRule = (newRule) => {
    setRules([...rules, { id: rules.length + 1, ...newRule }]);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 text-slate-800">
      <div className="w-full space-y-5">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Assignment Rule</h1>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Dashboard &gt; Settings &gt; <span className="text-indigo-600 font-semibold">Assignment Rule Master</span>
            </p>
          </div>
          <AddButton onOpen={() => setModalOpen(true)} />
        </div>

        {/* Content Box */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            
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

          <Table 
            rules={rules} 
            searchTerm={searchTerm} 
            pageSize={pageSize} 
            onTogglePool={handleTogglePool} 
          />
        </div>
      </div>

      <Popup isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSaveRule} />
    </div>
  );
}