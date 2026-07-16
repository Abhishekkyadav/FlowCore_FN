import React, { useState } from "react";
import Footer from "../WorkflowStep/footer.js";
import Link from "next/link";
import AddWorkflowTransitionModal from "./AddWorkFlowTransitionModal.js";
import Header from "./Transitionheader.js"

const WorkflowTransition = [
  {
    TransitionId: 1,
    workflowId: 1,
    FromStepId: 2,
    ToStepId: 1,
    ActionCode: "APPROVE",
    ActionName: "APPROVE" ,
  },
  {
   TransitionId: 1,
    workflowId: 1,
    FromStepId: 2,
    ToStepId: 1,
    ActionCode: "APPROVE",
    ActionName: "APPROVE" ,
  },
  {
    TransitionId: 1,
    workflowId: 1,
    FromStepId: 2,
    ToStepId: 1,
    ActionCode: "APPROVE",
    ActionName: "APPROVE" ,
  },
  {
   TransitionId: 1,
    workflowId: 1,
    FromStepId: 2,
    ToStepId: 1,
    ActionCode: "RETURN",
    ActionName: "APPROVE" ,
  },
  {TransitionId: 1,
    workflowId: 1,
    FromStepId: 2,
    ToStepId: 1,
    ActionCode: "APPROVE",
    ActionName: "RETURN" ,
  },
];

export default function WorkFlowTransition() {
  const [showModal, setShowModal] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  // code for the sorting of table headings
  const [sortConfig, setSortConfig] = useState({
  key: "",
  direction: "asc",
});
const handleSort = (key) => {
  let direction = "asc";

  if (
    sortConfig.key === key &&
    sortConfig.direction === "asc"
  ) {
    direction = "desc";
  }

  setSortConfig({
    key,
    direction,
  });

  // Sorting logic can be added later when API comes
};

  return (
    <div className="p-6 bg-[#f5f7fb] min-h-screen font-sans text-slate-700">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Header */}
       <Header/>
        {/* Search Section */}
        <div className="px-6 py-5 border-b border-gray-200 ">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <input
              type="text"
              placeholder="Search workflow Transition..."
              className="w-[300px] px-4 py-2.5 border border-slate-200/80 rounded-lg text-[13px] text-slate-600 focus:outline-none bg-slate-50"
            />
            {/* Show Entries */}
      <div className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
        <span>Show</span>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="inline-flex item-center px-3 py-1 rounded-md bg-[#f1f5f9] text-[#334155] text-xs font-semibold border border-[#e2e8f0]">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>

        <span>entries</span>
      </div>

            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-[13px] font-semibold hover:bg-blue-700 transition-colors"
            >
              + Add Workflow Transition
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
           
<thead>
  <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">

    {[
      { label: "TransitionId", key: "TransitionId" },
      { label: "WorkflowId", key: "workflowId" },
      { label: "FromStepId", key: "FromStepId" },
      { label: "ToStepId", key: "ToStepId" },
      { label: "ActionCode", key: "ActionCode" },
      { label: "ActionName", key: "ActionName" },
    ].map((column) => (
      <th
        key={column.key}
        onClick={() => handleSort(column.key)}
        className="px-6 py-4 text-left border-b border-gray-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
        <div className="flex items-center gap-2">
          <span>{column.label}</span>

          <span className="text-gray-400 text-xs">
            {sortConfig.key === column.key ? (
              sortConfig.direction === "asc" ? (
                "▲"
              ) : (
                "▼"
              )
            ) : (
              "↕"
            )}
          </span>
        </div>
      </th>
    ))}

  </tr>
</thead>
            <tbody>
              {WorkflowTransition.slice(0,pageSize).map((item) => (
                <tr
                  key={item.TransitionId}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 p-4 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.TransitionId}
                  </td>

                  <td className="px-6 py-4 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.workflowId}
                  </td>

                  <td className="px-6 py-4 border-b border-slate-200  text-[13px] text-slate-500 font-bold">    
                    {item.FromStepId}
                  </td>

                  <td className="px-6 py-4  border-b border-slate-200 text-align center text-[13px] text-slate-500 font-bold">
                    {item.ToStepId}
                  </td>

                  <td className="px-6 py-4 border-b border-slate-200 text-align center text-[13px] text-slate-500 font-bold">
                    {item.ActionCode}
                  </td>

                  <td className="px-6 py-4 border-b border-slate-200  text-align center text-[13px] text-slate-500 font-bold">
                    {item.ActionName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="h-5"></div>

          <Footer />

          {showModal && (
            <AddWorkflowTransitionModal onClose={() => setShowModal(false)} />
          )}
        </div>
      </div>
    </div>
  );
}