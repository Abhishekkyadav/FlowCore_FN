"use client";
import React from 'react';

export default function AddDocumentConfigurationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-blue-50 text-blue-600 rounded-lg text-lg">📄</span>
            <div>
              <h3 className="text-base font-bold text-slate-900">Add Document Configuration</h3>
              <p className="text-xs text-slate-400">Configure required documents and constraints for workflow steps</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl font-medium p-1">✕</button>
        </div>

        {/* Form Body - Detailed fields */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          
          {/* Row 1: Document Name & Document Code */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Document Name *</label>
              <input type="text" placeholder="e.g., Identity Proof" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Document Code / Alias *</label>
              <input type="text" placeholder="e.g., DOC-ID-01" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
          </div>

          {/* Row 2: Workflow Step ID & Max Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Workflow Step ID *</label>
              <input type="text" placeholder="Enter workflow step registration number" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Max Size Allowed (in MB) *</label>
              <input type="number" placeholder="e.g., 10" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
          </div>

          {/* Row 3: Allowed Extensions */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Allowed Extensions *</label>
            <input type="text" placeholder="Enter formats separated by commas (e.g., pdf, jpg, jpeg, png)" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" />
            <p className="text-[11px] text-slate-400 mt-1">Please enter file extensions without dot prefix.</p>
          </div>

          {/* Row 4: Is Mandatory Dropdown */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Is Mandatory *</label>
            <select className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:border-blue-500 text-slate-700">
              <option value="no">No (Optional Document)</option>
              <option value="yes">Yes (Compulsory Document)</option>
            </select>
          </div>

          {/* Row 5: Remarks / Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Upload Remarks / Description (Optional)</label>
            <textarea rows={3} placeholder="Provide any special rules or hints for verification officers..." className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 resize-none" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-slate-50 border-t border-slate-100">
          <button onClick={onClose} className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-medium transition-colors">
            ✕ Cancel
          </button>
          <button onClick={onClose} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-colors">
            💾 Save Document Config
          </button>
        </div>

      </div>
    </div>
  );
}