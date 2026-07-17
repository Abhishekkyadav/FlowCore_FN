import React, { useEffect, useState } from 'react';

const initialFormData = {
  externalUserId: '',
  hierarchyNodeId: '',
  roleCode: '',
  isPrimary: 'false',
  effectiveFrom: '',
  effectiveTo: '',
};

export default function AddUserHierarchyNode({
  isOpen,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormData);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.externalUserId.trim() ||
      !formData.hierarchyNodeId.trim() ||
      !formData.roleCode.trim() ||
      !formData.effectiveFrom
    ) {
      alert('Please complete all required fields.');
      return;
    }

    onSave({
      externalUserId: formData.externalUserId.trim(),
      hierarchyNodeId: formData.hierarchyNodeId.trim(),
      roleCode: formData.roleCode.trim().toUpperCase(),
      isPrimary: formData.isPrimary === 'true',
      effectiveFrom: formData.effectiveFrom,
      effectiveTo: formData.effectiveTo,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark blurred background */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Main Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col z-10 max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm7-3h6m-3-3v6"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-800">
                Add User Hierarchy Mapping
              </h2>

              <p className="text-xs text-slate-400 mt-0.5">
                Map a consumer user to a hierarchy node
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-all text-sm font-semibold"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col overflow-hidden"
        >
          {/* Scrollable Content */}
          <div className="p-8 space-y-8 overflow-y-auto max-h-[calc(92vh-170px)] bg-slate-50/30">
            {/* Mapping Information */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold border-b border-slate-50 pb-3">
                <span>📋</span>
                <span>Mapping Information</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* External User ID */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    External User ID{' '}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="externalUserId"
                    value={formData.externalUserId}
                    onChange={handleChange}
                    placeholder="Enter external user ID"
                    className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500"
                  />

                  <p className="text-[10px] text-slate-400 mt-1">
                    Consumer application's unique user identifier
                  </p>
                </div>

                {/* Hierarchy Node ID */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Hierarchy Node ID{' '}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="hierarchyNodeId"
                    value={formData.hierarchyNodeId}
                    onChange={handleChange}
                    placeholder="Enter hierarchy node ID"
                    className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500"
                  />

                  <p className="text-[10px] text-slate-400 mt-1">
                    Select the hierarchy node assigned to the user
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Role Code */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Role Code{' '}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="roleCode"
                    value={formData.roleCode}
                    onChange={handleChange}
                    placeholder="Enter role code, e.g. DEO"
                    className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500"
                  />

                  <p className="text-[10px] text-slate-400 mt-1">
                    Role assigned to the user within this node
                  </p>
                </div>

                {/* Is Primary */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Is Primary{' '}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="isPrimary"
                    value={formData.isPrimary}
                    onChange={handleChange}
                    className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500"
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>

                  <p className="text-[10px] text-slate-400 mt-1">
                    Mark this as the user's primary hierarchy node
                  </p>
                </div>
              </div>
            </div>

            {/* Effective Period */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold border-b border-slate-50 pb-3">
                <span>📅</span>
                <span>Effective Period</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Effective From */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Effective From{' '}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="date"
                    name="effectiveFrom"
                    value={formData.effectiveFrom}
                    onChange={handleChange}
                    className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500"
                  />

                  <p className="text-[10px] text-slate-400 mt-1">
                    Date from which this mapping becomes active
                  </p>
                </div>

                {/* Effective To */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Effective To
                  </label>

                  <input
                    type="date"
                    name="effectiveTo"
                    value={formData.effectiveTo}
                    onChange={handleChange}
                    min={formData.effectiveFrom || undefined}
                    className="w-full p-2.5 border border-slate-200 rounded-xl text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500"
                  />

                  <p className="text-[10px] text-slate-400 mt-1">
                    Leave blank when the mapping has no end date
                  </p>
                </div>
              </div>
            </div>

            {/* Usage Information */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold border-b border-slate-50 pb-3">
                <span>⚙️</span>
                <span>Mapping Usage</span>
              </div>

              <p className="text-xs leading-5 text-slate-500">
                This mapping connects consumer users with one or
                more hierarchy nodes while keeping the workflow
                package independent from consumer business tables.
              </p>

              <div>
                <p className="text-xs font-bold text-slate-700 mb-2">
                  Used By
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Create File',
                    'Inbox',
                    'Task Assignment',
                    'Approval',
                    'History',
                    'Dashboard',
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-semibold text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-end gap-3 px-8">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-1.5"
            >
              ✕ Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-500/10 transition-all flex items-center gap-1.5"
            >
              💾 Save Mapping
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}