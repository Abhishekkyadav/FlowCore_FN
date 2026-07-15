import WorkflowTable from "./workflowTable";
import WorkflowHeader from "./workflowHeader";
import SearchBar from "./SearchBar";
import { useState } from "react";

// 1. Properly declared initial data array outside the component block
const initialWorkflows = [
  {
    id: 1,
    name: "Citizen Petition Workflow",
    workflowtype: "Petition",
    workflowcode: "PET-001",
    published: "yes",
    status: true,
  },
  {
    id: 2,
    name: "Building Permission Workflow",
    workflowtype: "Building Permission",
    workflowcode: "BLD-001",
    published: "yes",
    status: true,
  },
  {
    id: 3,
    name: "Leave Application Workflow",
    workflowtype: "Leave",
    workflowcode: "LEV-001",
    published: "No",
    status: true,
  },
  {
    id: 4,
    name: "Grievance Redressal Workflow",
    workflowtype: "Greivance",
    workflowcode: "GRV-001",
    published: "yes",
    status: true,
  },
  {
    id: 5,
    name: "Trade Licence Workflow",
    workflowtype: "Trade Licence",
    workflowcode: "TRD-001",
    published: "yes",
    status: true,
  },
];

export default function WorkflowMasterMain() {
  const [search, setSearch] = useState("");
  const [workflows, setWorkflows] = useState(initialWorkflows);
  const [showModal, setShowModal] = useState(false);

  // Clean, immutable toggle handler function
  const handleToggle = (id) => {
    setWorkflows((prevWorkflows) =>
      prevWorkflows.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] p-8">
      <WorkflowHeader />

      <div className="flex justify-between items-center mt-8 mb-6">
        <SearchBar search={search} setSearch={setSearch} />

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow hover:bg-blue-700 hover:scale-105 transition-all duration-300"
        >
          <span className="text-xl">+</span>
          <span>Add</span>
        </button>
      </div>

      {/* Passed handleToggle directly to match the prop name inside the table component */}
      <WorkflowTable
        search={search}
        workflows={workflows}
        workflowtoggle={handleToggle}
      />

      {/* Modal View Block */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[850px] rounded-2xl shadow-2xl p-8">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Add Workflow
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-2xl text-gray-400 hover:text-red-500 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Form Wrapper */}
            <div className="flex flex-col gap-6 mt-6 max-h-[70vh] overflow-y-auto pr-2">

              {/* Header: Workflow Information Section Divider */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">Workflow Information</span>
                <div className="h-[1px] bg-blue-100 w-full ml-1"></div>
              </div>

              {/* Inputs Grid Layout */}
              <div className="grid grid-cols-2 gap-y-5 gap-x-6 text-slate-700">
                
                {/* 1. Workflow Type (Left) */}
                <div className="col-span-1">
                  <label className="block text-xs font-semibold mb-1.5 text-slate-700">
                    Workflow Type <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500">
                    <option value="" disabled selected hidden>Select workflow type</option>
                    <option>Petition</option>
                    <option>Building Permission</option>
                    <option>Leave</option>
                    <option>Grievance</option>
                    <option>Trade Licence</option>
                  </select>
                </div>

                {/* 2. Workflow Code (Right) */}
                <div className="col-span-1">
                  <label className="block text-xs font-semibold mb-1.5 text-slate-700">
                    Workflow Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 placeholder:text-slate-400"
                    placeholder="Enter workflow code"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Unique code for this workflow</p>
                </div>

                {/* 3. Workflow Name (Full Width) */}
                <div className="col-span-2">
                  <label className="block text-xs font-semibold mb-1.5 text-slate-700">
                    Workflow Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 placeholder:text-slate-400"
                    placeholder="Enter workflow name"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Enter a descriptive name for this workflow</p>
                </div>

                {/* 4. Version (Left) */}
                <div className="col-span-1">
                  <label className="block text-xs font-semibold mb-1.5 text-slate-700">
                    Version <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="1"
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                  />
                </div>

                {/* 5. Published Status (Right) */}
                <div className="col-span-1">
                  <label className="block text-xs font-semibold mb-1.5 text-slate-700">
                    Published <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                  <p className="text-[11px] text-slate-400 mt-1">Make workflow active for use</p>
                </div>

                {/* 6. Description (Full Width - Textarea) */}
                <div className="col-span-2">
                  <label className="block text-xs font-semibold mb-1.5 text-slate-700">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 placeholder:text-slate-400 resize-none"
                    placeholder="Enter workflow description (optional)"
                  ></textarea>
                  <p className="text-[11px] text-slate-400 mt-1">Optional description about this workflow</p>
                </div>

              </div>
            </div>

            {/* Actions Footer */}
            <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-slate-100">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-slate-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                Save Workflow
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}