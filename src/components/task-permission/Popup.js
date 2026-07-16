import React, { useState } from 'react';

export default function Popup({ isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const [stepName, setStepName] = useState("");
  const [stepCode, setStepCode] = useState("");
  const [workflow, setWorkflow] = useState("");
  
  const [canView, setCanView] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [canApprove, setCanApprove] = useState(false);
  const [canReject, setCanReject] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!stepName || !stepCode || !workflow) {
      alert("Please fill out all required fields!");
      return;
    }
    onSave({ stepName, stepCode: stepCode.toUpperCase(), workflow, canView, canEdit, canApprove, canReject });
    setStepName(""); setStepCode(""); setWorkflow("");
    setCanView(false); setCanEdit(false); setCanApprove(false); setCanReject(false);
    onClose();
  };

  return ( 
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-200" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col z-10 max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm text-xl">🔑</div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-800">Add Task Permission</h2>
              <p className="text-xs text-slate-400 mt-0.5">Configure step details and initial user control access rules</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-all text-sm font-semibold">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="p-8 space-y-8 overflow-y-auto max-h-[calc(92vh-170px)] bg-slate-50/30">
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold border-b border-slate-50 pb-3"><span>📋</span><span>Step Information</span></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Step Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="e.g., Scrutiny" value={stepName} onChange={(e) => setStepName(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Step Code <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="e.g., SCRUTINY-01" value={stepCode} onChange={(e) => setStepCode(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Workflow Definition Relation <span className="text-red-500">*</span></label>
                <select value={workflow} onChange={(e) => setWorkflow(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500">
                  <option value="">Select associated master workflow</option>
                  <option value="Citizen Petition Workflow">Citizen Petition Workflow</option>
                  <option value="Building Permission Workflow">Building Permission Workflow</option>
                  <option value="Leave Application Workflow">Leave Application Workflow</option>
                  <option value="Public Grievance Workflow">Public Grievance Workflow</option>
                </select>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold border-b border-slate-50 pb-3"><span>⚙️</span><span>Set Initial Matrix Access Rules</span></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[['👁️', 'Can View', 'Read logs', canView, setCanView], ['📝', 'Can Edit', 'Modify props', canEdit, setCanEdit], ['✓', 'Can Approve', 'Pass states', canApprove, setCanApprove], ['✕', 'Can Reject', 'Cancel tasks', canReject, setCanReject]].map(([icon, title, desc, val, setVal], i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 border border-slate-100 rounded-2xl">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs">{icon}</div>
                      <div>
                        <p className="text-xs font-bold text-slate-700">{title}</p>
                        <p className="text-[9px] text-slate-400">{desc}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={val} onChange={(e) => setVal(e.target.checked)} className="sr-only peer" />
                      <div className="w-8 h-4.5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-end gap-3 px-8">
            <button type="button" onClick={onClose} className="px-6 py-2.5 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 transition-all">✕ Cancel</button>
            <button type="submit" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-500/10 transition-all">💾 Save Permission</button>
          </div>
        </form>
      </div>
    </div>
  );
}