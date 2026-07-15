import React, { useState } from "react";
import Footer from "./footer.js";
import Link from "next/link";
import AddWorkflowStepModal from "../AddWorkflowStepModal.js";

const workflowSteps = [
  {
    workflowStepId: 1,
    workflowId: 1,
    stepCode: "SCR",
    stepName: "Scrutiny",
    sequenceNo: 1,
    slaType: "Hours",
    slaValue: 48,
    reminderBefore: 4,
    escalationAfter: 48,
    workingHoursOnly: 1,
    excludeHolidays: 1,
  },
  {
    workflowStepId: 2,
    workflowId: 1,
    stepCode: "APR",
    stepName: "Approval",
    sequenceNo: 2,
    slaType: "Days",
    slaValue: 2,
    reminderBefore: 1,
    escalationAfter: 2,
    workingHoursOnly: 1,
    excludeHolidays: 1,
  },
  {
    workflowStepId: 3,
    workflowId: 1,
    stepCode: "APR",
    stepName: "Approval",
    sequenceNo: 3,
    slaType: "Days",
    slaValue: 2,
    reminderBefore: 1,
    escalationAfter: 2,
    workingHoursOnly: 1,
    excludeHolidays: 1,
  },
  {
    workflowStepId: 4,
    workflowId: 1,
    stepCode: "APR",
    stepName: "Approval",
    sequenceNo: 4,
    slaType: "Days",
    slaValue: 2,
    reminderBefore: 1,
    escalationAfter: 2,
    workingHoursOnly: 1,
    excludeHolidays: 1,
  },
  {
    workflowStepId: 5,
    workflowId: 1,
    stepCode: "APR",
    stepName: "Approval",
    sequenceNo: 5,
    slaType: "Days",
    slaValue: 2,
    reminderBefore: 1,
    escalationAfter: 2,
    workingHoursOnly: 1,
    excludeHolidays: 1,
  },
];

export default function WorkflowStep() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 bg-[#f5f7fb] min-h-screen font-sans text-slate-700">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="m-0 text-[30px] leading-tight font-semibold text-[#1E293B] tracking-tight">
            Workflow Step
          </h1>

          <div className="mt-2 text-[13px] font-medium">
            <a href="/dashboard" className="text-blue-600 hover:underline">
              Dashboard
            </a>

            <span className="mx-2 text-slate-400">{">"}</span>

            <a href="/masters" className="text-blue-600 hover:underline">
              Masters
            </a>

            <span className="mx-2 text-slate-400">{">"}</span>

            <a href="/workflow" className="text-blue-600 hover:underline">
              Workflow
            </a>

            <span className="mx-2 text-slate-400">{">"}</span>

            <span className="text-slate-500">Workflow Step</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="px-6 py-5 border-b border-gray-200 ">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <input
              type="text"
              placeholder="Search workflow step..."
              className="w-[300px] px-4 py-2.5 border border-slate-200/80 rounded-lg text-[13px] text-slate-600 focus:outline-none bg-slate-50"
            />

            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-[13px] font-semibold hover:bg-blue-700 transition-colors"
            >
              + Add Workflow Type
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {[
                  "WorkflowStepId",
                  "WorkflowId",
                  "StepCode",
                  "StepName",
                  "SequenceNo",
                  "SLA Type",
                  "SLA Value",
                  "Reminder Before",
                  "Escalation After",
                  "Working Hours Only",
                  "Exclude Holidays",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-4 py-3 text-left border-b border-gray-200 text-[11px] font-bold uppercase tracking-wider text-slate-500"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {workflowSteps.map((item) => (
                <tr
                  key={item.workflowStepId}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.workflowStepId}
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.workflowId}
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    <span className="inline-flex item-center px-3 py-1 rounded-md bg-[#f1f5f9] text-[#334155] text-xs font-semibold border border-[#e2e8f0]">
                    {item.stepCode}
                    </span>
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.stepName}
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.sequenceNo}
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.slaType}
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.slaValue}
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.reminderBefore}
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.escalationAfter}
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.workingHoursOnly}
                  </td>

                  <td className="px-4 py-3 border-b border-slate-200 text-[13px] text-slate-500 font-bold">
                    {item.excludeHolidays}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="h-5"></div>

          <Footer />

          {showModal && (
            <AddWorkflowStepModal onClose={() => setShowModal(false)} />
          )}
        </div>
      </div>
    </div>
  );
}