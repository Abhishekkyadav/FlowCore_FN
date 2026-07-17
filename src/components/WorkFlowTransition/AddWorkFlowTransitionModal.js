import React from "react";

export default function AddWorkTransitionStepModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 1. Dark Blurred Background Overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-200" 
        onClick={onClose} 
      />

      {/* 2. Premium Center Card Box (Max width 4xl rakha hai taaki zyada bada na lage par content fit ho jaye) */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col z-10 max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            {/* Soft Purple Icon Box */}
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-800">Add Workflow</h2>
              <p className="text-xs text-slate-400 mt-0.5">Create a new workflow and configure its details</p>
            </div>
          </div>
          {/* Close button with circular hover */}
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-all text-sm font-semibold"
          >
            ✕
          </button>
        </div>

        {/* ================= SCROLLABLE CONTENT AREA ================= */}
        <div className="p-8 space-y-8 overflow-y-auto max-h-[calc(92vh-170px)] bg-slate-50/30">
          
          {/* ----- SECTION 1: Workflow Information ----- */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold border-b border-slate-50 pb-3">
              <span>📋</span>
              <span>Workflow Information</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Workflow Transition<span className="text-red-500">*</span>
                </label>
                <select className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500">
                  <option value="">Select workflow type</option>
                  <option value="petition">Petition</option>
                  <option value="building">Building Permission</option>
                  <option value="leave">Leave</option>
                </select>
                <p className="text-[10px] text-slate-400 mt-1">Choose the category this workflow belongs to</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Workflow Code <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter workflow code" 
                  className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500" 
                />
                <p className="text-[10px] text-slate-400 mt-1">Unique code for this workflow (e.g., PET-001)</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Workflow Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter workflow name" 
                className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500" 
              />
              <p className="text-[10px] text-slate-400 mt-1">Enter a descriptive name for this workflow</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Version <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  defaultValue="1" 
                  className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500" 
                />
                <p className="text-[10px] text-slate-400 mt-1">Workflow version number</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Published <span className="text-red-500">*</span>
                </label>
                <select className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500">
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
                <p className="text-[10px] text-slate-400 mt-1">Make workflow active for use</p>
              </div>
            </div>
          </div>

          {/* ----- SECTION 2: Description ----- */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-700">Description</label>
              <span className="text-[10px] text-slate-400">0 / 500</span>
            </div>
            <textarea 
              rows={3} 
              placeholder="Enter workflow description (optional)" 
              className="w-full p-3 border border-slate-200 rounded-xl text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500" 
            />
            <p className="text-[10px] text-slate-400">Provide additional information about this workflow</p>
          </div>

          {/* ----- SECTION 3: Status & Settings ----- */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold border-b border-slate-50 pb-3">
              <span>⚙️</span>
              <span>Status & Settings</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Status <span className="text-red-500">*</span>
                </label>
                <select className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <p className="text-[10px] text-slate-400 mt-1">Set the initial status of this workflow</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Default Priority</label>
                <select className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500">
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="low">Low</option>
                </select>
                <p className="text-[10px] text-slate-400 mt-1">Default priority for tasks in this workflow</p>
              </div>
            </div>
          </div>

          {/* ----- SECTION 4: Additional Settings ----- */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold border-b border-slate-50 pb-3">
              <span>🛠️</span>
              <span>Additional Settings</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Card 1: Enable SLA */}
              <div className="flex items-center justify-between p-4 bg-slate-50/50 border border-slate-100 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm">⏱️</div>
                  <div>
                    <p className="text-xs font-bold text-slate-700">Enable SLA</p>
                    <p className="text-[9px] text-slate-400">Enable SLA for workflow</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-8 h-4.5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Card 2: Allow Rework */}
              <div className="flex items-center justify-between p-4 bg-slate-50/50 border border-slate-100 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm">🔄</div>
                  <div>
                    <p className="text-xs font-bold text-slate-700">Allow Rework</p>
                    <p className="text-[9px] text-slate-400">Allow files to be sent back</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-8 h-4.5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Card 3: File Delegation */}
              <div className="flex items-center justify-between p-4 bg-slate-50/50 border border-slate-100 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm">👥</div>
                  <div>
                    <p className="text-xs font-bold text-slate-700">Allow File Delegation</p>
                    <p className="text-[9px] text-slate-400">Allow users to delegate tasks</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-8 h-4.5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

            </div>
          </div>

        </div>

        {/* ================= FOOTER ACTIONS ================= */}
        <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-end gap-3 px-8">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-1.5"
          >
            ✕ Cancel
          </button>
          <button
            type="button"
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-500/10 transition-all flex items-center gap-1.5"
          >
            💾 Save Workflow
          </button>
        </div>

      </div>
    </div>
  );
}