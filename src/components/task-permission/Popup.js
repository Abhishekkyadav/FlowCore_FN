import React, { useState } from 'react';

export default function Popup({ onClose, onSave }) {
  
  const [stepName, setStepName] = useState("");
  const [stepCode, setStepCode] = useState("");
  const [workflow, setWorkflow] = useState("");
  
  // Permissions checkbox states 
  const [canView, setCanView] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [canApprove, setCanApprove] = useState(false);
  const [canReject, setCanReject] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!stepName || !stepCode || !workflow) {
      alert("Please fill out all text fields!");
      return;
    }

    
    onSave({
      stepName,
      stepCode: stepCode.toUpperCase(),
      workflow,
      canView,
      canEdit,
      canApprove,
      canReject
    });

    onClose(); 
  };

  return (
    /* 1. BACKGROUND OVERLAY CONTAINER:
      
    */
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      {/* Popup White Box */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden border border-slate-100">
        
        {/* Header Section */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="text-lg font-bold text-slate-900">Add New Task Permission</h2>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 font-bold text-lg">✕</button>
        </div>

        {/* Form Fields Section */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Step Name */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Step Name</label>
            <input 
              type="text" 
              placeholder="e.g., Verification"
              value={stepName}
              onChange={(e) => setStepName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 bg-slate-50"
            />
          </div>

          {/* Step Code */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Step Code</label>
            <input 
              type="text" 
              placeholder="e.g., VERIFY"
              value={stepCode}
              onChange={(e) => setStepCode(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 bg-slate-50"
            />
          </div>

          {/* Workflow Definition */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Workflow Definition</label>
            <input 
              type="text" 
              placeholder="e.g., Document Verification Workflow"
              value={workflow}
              onChange={(e) => setWorkflow(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 bg-slate-50"
            />
          </div>

          {/* Checkboxes Group */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Set Initial Permissions</span>
            
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                <input type="checkbox" checked={canView} onChange={(e) => setCanView(e.target.checked)} className="w-4 h-4 text-blue-600 border-slate-300 rounded" />
                <span>Can View</span>
              </label>

              <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                <input type="checkbox" checked={canEdit} onChange={(e) => setCanEdit(e.target.checked)} className="w-4 h-4 text-blue-600 border-slate-300 rounded" />
                <span>Can Edit</span>
              </label>

              <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                <input type="checkbox" checked={canApprove} onChange={(e) => setCanApprove(e.target.checked)} className="w-4 h-4 text-blue-600 border-slate-300 rounded" />
                <span>Can Approve</span>
              </label>

              <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                <input type="checkbox" checked={canReject} onChange={(e) => setCanReject(e.target.checked)} className="w-4 h-4 text-blue-600 border-slate-300 rounded" />
                <span>Can Reject</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm font-semibold bg-white hover:bg-slate-50"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold"
            >
              Save Permission
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}