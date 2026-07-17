import React, { useState } from "react";
import Link from "next/link";
export default function Header() {

return (
    <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="m-0 text-[30px] leading-tight font-semibold text-[#1E293B] tracking-tight">
            Workflow
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

            <a href="/workflowTransition" className="text-blue-600 hover:underline">
              Workflow Transition
            </a>

            <span className="mx-2 text-slate-400">{">"}</span>

            <span className="text-slate-500">Workflow Step</span>
          </div>
        </div>
    );
}