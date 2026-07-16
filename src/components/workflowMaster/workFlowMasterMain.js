import { useState } from "react";
import WorkflowTable from "./WorkflowTable"; // Make sure this is capitalized!

export default function WorkflowMasterMain() {
    const [search, setSearch] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10); 
    
    // Modal State & Form State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newWorkflow, setNewWorkflow] = useState({
        name: "",
        workflowcode: "",
        workflowtype: "",
        version: "1",
        published: "No",
        description: ""
    });

    const [workflows, setWorkflows] = useState([
        { 
            id: 1, 
            name: "Trade License Workflow", 
            workflowcode: "TRD-001",
            workflowtype: "Trade License", 
            version: "1", published: "Yes", 
            status: true },
        { 
            id: 2, 
            name: "Citizen Petition Workflow", 
            workflowcode: "PET-001", 
            workflowtype: "Petition", 
            version: "1", 
            published: "Yes", 
            status: true },
        { 
            id: 3, 
            name: "Leave Application Workflow", 
            workflowcode: "LEV-001", 
            workflowtype: "Leave", 
            version: "1", 
            published: "No", 
            status: true },
        { 
            id: 4, 
            name: "Grievance Redressal Workflow", 
            workflowcode: "GRV-001", 
            workflowtype: "Grievance", 
            version: "2", 
            published: "Yes", 
            status: true },
        { 
            id: 5, 
            name: "Document Verification", 
            workflowcode: "DOC-001", 
            workflowtype: "Verification", 
            version: "1", 
            published: "Yes", 
            status: true },
        { 
            id: 6, 
            name: "Building Permission Workflow", 
            workflowcode: "BLD-001", 
            workflowtype: "Building Permission", 
            version: "1", 
            published: "Yes", 
            status: true },

        { 
            id: 7, 
            name: "Property Tax Assessment", 
            workflowcode: "PTX-001", 
            workflowtype: "Property Tax", 
            version: 1, 
            published: true, 
            status: true },
        { 
            id: 8, 
            name: "Water Connection Request", 
            workflowcode: "WTR-001", 
            workflowtype: "Utility Services", 
            version: 1, 
            published: true, 
            status: true },
        { 
            id: 9, 
            name: "Vendor Registration", 
            workflowcode: "VND-001", 
            workflowtype: "Procurement", 
            version: 2, 
            published: true, 
            status: false },
        { 
            id: 10, 
            name: "No Objection Certificate", 
            workflowcode: "NOC-001", 
            workflowtype: "Certification", 
            version: 1, 
            published: false, 
            status: true },
        { 
            id: 11, 
            name: "Birth Certificate Application", 
            workflowcode: "BRT-001", 
            workflowtype: "Registry", 
            version: 1, 
            published: true, 
            isActive: true },
        
    ]);

    const handleToggle = (id) => {
        setWorkflows(prev => prev.map(w => w.id === id ? { ...w, status: !w.status } : w));
    };

    // Handle adding the new workflow item
    const handleAddWorkflow = (e) => {
        e.preventDefault();
        
        if (!newWorkflow.name || !newWorkflow.workflowcode || !newWorkflow.workflowtype) {
            alert("Please fill out all fields.");
            return;
        }

        const newId = workflows.length > 0 ? Math.max(...workflows.map(w => w.id)) + 1 : 1;
        
        const addedItem = {
            id: newId,
            name: newWorkflow.name,
            workflowcode: newWorkflow.workflowcode,
            workflowtype: newWorkflow.workflowtype,
            version: newWorkflow.version || "1",
            published: newWorkflow.published,
            status: true
        };

        setWorkflows([addedItem, ...workflows]);
        
        // Reset and close modal
        setNewWorkflow({ name: "", workflowcode: "", workflowtype: "", version: "1", published: "No", description: "" });
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#f3f4f6] p-6 font-sans relative">
            <div className="max-w-full mx-auto space-y-5">
                
                {/* Header Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Workflow Master</h1>
                        <nav className="text-xs text-slate-400 mt-1">
                            Dashboard &gt; Types &gt; <span className="text-blue-600 font-semibold">Workflow</span>
                        </nav>
                    </div>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1e60ff] hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                        <span className="text-base font-bold">+</span> Add New Workflow 
                    </button>
                </div>

                {/* Main Table Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
                    
                    {/* Top Controls: Search and Page Size Dropdown */}
                    <div className="flex items-center justify-between">
                        <div className="relative w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search workflow name or code..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 text-sm bg-[#fcfdfe] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700 transition"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <select
                                value={entriesPerPage}
                                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                                className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700 cursor-pointer font-medium shadow-sm min-w-[110px]"
                            >
                                <option value={5}>5 Rows</option>
                                <option value={10}>10 Rows</option>
                                <option value={20}>20 Rows</option>
                                <option value={50}>50 Rows</option>
                            </select>
                        </div>
                    </div>

                    {/* The Inner Table Wrapper */}
                    <WorkflowTable 
                        search={search}
                        workflows={workflows}
                        workflowtoggle={handleToggle}
                        entriesPerPage={entriesPerPage}
                        setEntriesPerPage={setEntriesPerPage}
                    />

                </div>
            </div>

            {/* --- RESTYLED POPUP MODAL (Matches Image Perfectly) --- */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-[24px] w-full max-w-4xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                        
                        {/* 1. Modal Header */}
                        <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                                    {/* Small custom page/database icon representing Add Workflow */}
                                    <svg className="w-6 h-6 text-[#5c59eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-slate-800">Add Workflow</h2>
                                    <p className="text-[11px] text-slate-400 font-medium tracking-wide">Create a new workflow and configure its details</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-slate-300 hover:text-slate-500 transition cursor-pointer"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* 2. Scrollable Form Fields */}
                        <form onSubmit={handleAddWorkflow} className="flex-1 overflow-y-auto p-8 space-y-6">
                            
                            {/* Workflow Information Section Box */}
                            <div className="border border-slate-100 rounded-2xl p-6 bg-white space-y-5">
                                <div className="flex items-center gap-2 pb-1 border-b border-slate-50">
                                    <span className="text-sm">📋</span>
                                    <h3 className="text-xs font-bold text-[#5c59eb] uppercase tracking-wider">Workflow Information</h3>
                                </div>

                                {/* Row 1: Workflow Type & Workflow Code */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            Workflow Type <span className="text-rose-500">*</span>
                                        </label>
                                        <select 
                                            required
                                            value={newWorkflow.workflowtype}
                                            onChange={(e) => setNewWorkflow({ ...newWorkflow, workflowtype: e.target.value })}
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white text-slate-600 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition appearance-none cursor-pointer"
                                        >
                                            <option value="">Select workflow type</option>
                                            <option value="Trade License">Trade License</option>
                                            <option value="Petition">Petition</option>
                                            <option value="Leave">Leave</option>
                                            <option value="Grievance">Grievance</option>
                                            <option value="Verification">Verification</option>
                                        </select>
                                        <span className="text-[10px] text-slate-400 mt-1 block">Choose the category this workflow belongs to</span>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            Workflow Code <span className="text-rose-500">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            required
                                            placeholder="Enter workflow code"
                                            value={newWorkflow.workflowcode}
                                            onChange={(e) => setNewWorkflow({ ...newWorkflow, workflowcode: e.target.value })}
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition"
                                        />
                                        <span className="text-[10px] text-slate-400 mt-1 block">Unique code for this workflow (e.g., PET-001)</span>
                                    </div>
                                </div>

                                {/* Row 2: Workflow Name */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                        Workflow Name <span className="text-rose-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="Enter workflow name"
                                        value={newWorkflow.name}
                                        onChange={(e) => setNewWorkflow({ ...newWorkflow, name: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition"
                                    />
                                    <span className="text-[10px] text-slate-400 mt-1 block">Enter a descriptive name for this workflow</span>
                                </div>

                                {/* Row 3: Version & Published */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            Version <span className="text-rose-500">*</span>
                                        </label>
                                        <input 
                                            type="number" 
                                            required
                                            placeholder="1"
                                            value={newWorkflow.version}
                                            onChange={(e) => setNewWorkflow({ ...newWorkflow, version: e.target.value })}
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition"
                                        />
                                        <span className="text-[10px] text-slate-400 mt-1 block">Workflow version number</span>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            Published <span className="text-rose-500">*</span>
                                        </label>
                                        <select 
                                            required
                                            value={newWorkflow.published}
                                            onChange={(e) => setNewWorkflow({ ...newWorkflow, published: e.target.value })}
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white text-slate-600 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition appearance-none cursor-pointer"
                                        >
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                        <span className="text-[10px] text-slate-400 mt-1 block">Make workflow active for use</span>
                                    </div>
                                </div>
                            </div>

                            {/* Optional Description Field */}
                            <div className="border border-slate-100 rounded-2xl p-6 bg-white space-y-3">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xs font-bold text-slate-700">Description</h3>
                                    <span className="text-[10px] text-slate-400">{newWorkflow.description.length} / 500</span>
                                </div>
                                <textarea 
                                    rows="3"
                                    maxLength="500"
                                    placeholder="Enter description here..."
                                    value={newWorkflow.description}
                                    onChange={(e) => setNewWorkflow({ ...newWorkflow, description: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition resize-none"
                                />
                            </div>

                            {/* 3. Modal Footer Sticky Actions */}
                            <div className="flex gap-3 justify-end pt-4 border-t border-slate-50">
                                <button 
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2.5 text-xs font-bold text-slate-500 hover:bg-slate-50 border border-slate-200 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                                >
                                    <span>✕</span> Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="px-6 py-2.5 text-xs font-bold text-white bg-[#5c59eb] hover:bg-indigo-700 rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                                >
                                    <span>💾</span> Save Workflow
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}