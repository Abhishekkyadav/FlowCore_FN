import React, { useState } from 'react';

export default function Popup({ isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const [workflowStepId, setWorkflowStepId] = useState("");
  const [assignmentType, setAssignmentType] = useState("");
  const [hierarchyNodeType, setHierarchyNodeType] = useState("");
  const [dynamicFunctionId, setDynamicFunctionId] = useState("");
  const [isPoolEnabled, setIsPoolEnabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workflowStepId || !assignmentType || !hierarchyNodeType) {
      alert("Please fill out all required fields!");
      return;
    }
    onSave({
      workflowStepId,
      assignmentType,
      hierarchyNodeType,
      dynamicFunctionId: dynamicFunctionId || "N/A",
      isPoolEnabled
    });
    // Reset fields
    setWorkflowStepId(""); setAssignmentType(""); setHierarchyNodeType(""); setDynamicFunctionId(""); setIsPoolEnabled(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl flex flex-col z-10 max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-lg">⚖️</div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-800">Add Assignment Rule</h2>
              <p className="text-[10px] text-slate-400">Configure core task routing constraints</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 font-semibold text-sm">✕</button>
        </div>
        
        {/* Fields */}
        <form onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
          <div className="p-6 space-y-4 overflow-y-auto bg-slate-50/30">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Workflow Step ID *</label>
              <input type="text" placeholder="e.g., STEP-1" value={workflowStepId} onChange={(e) => setWorkflowStepId(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Assignment Type *</label>
              <select value={assignmentType} onChange={(e) => setAssignmentType(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:border-indigo-500">
                <option value="">Select Assignment Engine Type</option>
                <option value="Hierarchy">Hierarchy</option>
                <option value="Dynamic">Dynamic</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Hierarchy Node Type *</label>
              <select value={hierarchyNodeType} onChange={(e) => setHierarchyNodeType(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:border-indigo-500">
                <option value="">Select Node Level</option>
                <option value="Block">Block</option>
                <option value="District">District</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Dynamic Function ID</label>
              <input type="text" placeholder="e.g., 1, 2" value={dynamicFunctionId} onChange={(e) => setDynamicFunctionId(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500" />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" id="isPoolEnabled" checked={isPoolEnabled} onChange={(e) => setIsPoolEnabled(e.target.checked)} className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" />
              <label htmlFor="isPoolEnabled" className="text-xs font-bold text-slate-700 select-none cursor-pointer">Enable Task Pooling</label>
            </div>
          </div>
          
          <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-end gap-2.5 px-6">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-500/10">Save Rule</button>
          </div>
        </form>
      </div>
    </div>
  );
}