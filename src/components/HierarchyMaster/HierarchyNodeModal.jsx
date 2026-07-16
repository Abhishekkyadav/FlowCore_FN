"use client";

import { useState } from "react";

export default function AddHierarchyNodeModal({ isOpen, onClose, onSave }) {
    const [newNode, setNewNode] = useState({
        parentHierarchyNodeId: "",
        hierarchyLevel: "",
        nodeType: "",
        nodeName: "",
        externalEntityType: "",
        externalEntityId: "",
        isActive: true,
        description: ""
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newNode.hierarchyLevel || !newNode.nodeType || !newNode.nodeName) {
            alert("Please fill out all mandatory fields.");
            return;
        }
        onSave(newNode);
        setNewNode({
            parentHierarchyNodeId: "",
            hierarchyLevel: "",
            nodeType: "",
            nodeName: "",
            externalEntityType: "",
            externalEntityId: "",
            isActive: true,
            description: ""
        });
    };

    return (
        <div className="fixed inset-0 w-screen h-screen bg-slate-900/60 backdrop-blur-md flex justify-center items-center z-[9999] p-4 overflow-hidden">
            <div className="bg-white rounded-[24px] w-full max-w-4xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                
                {/* Modal Header */}
                <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                            <svg className="w-6 h-6 text-[#5c59eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-extrabold text-slate-800">Add Hierarchy Node</h2>
                            <p className="text-[11px] text-slate-400 font-medium tracking-wide">Create a new hierarchy node and configure its details</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-slate-300 hover:text-slate-500 transition cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Form Content */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-6">
                    <div className="border border-slate-100 rounded-2xl p-6 bg-white space-y-5">
                        <div className="flex items-center gap-2 pb-1 border-b border-slate-50">
                            <span className="text-sm">📋</span>
                            <h3 className="text-xs font-bold text-[#5c59eb] uppercase tracking-wider">Hierarchy Node Information</h3>
                        </div>

                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Node Type *</label>
                                <div className="relative">
                                    <select 
                                        required
                                        value={newNode.nodeType}
                                        onChange={(e) => setNewNode({ ...newNode, nodeType: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white text-slate-600 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition appearance-none cursor-pointer"
                                    >
                                        <option value="">Select node type</option>
                                        <option value="District">District</option>
                                        <option value="Block">Block</option>
                                        <option value="Panchayat">Panchayat</option>
                                        <option value="Department">Department</option>
                                        <option value="Branch">Branch</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Node Name *</label>
                                <input 
                                    type="text" required placeholder="Enter node name"
                                    value={newNode.nodeName}
                                    onChange={(e) => setNewNode({ ...newNode, nodeName: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Parent Hierarchy Node ID</label>
                                <input 
                                    type="number" placeholder="Enter Parent Node ID"
                                    value={newNode.parentHierarchyNodeId}
                                    onChange={(e) => setNewNode({ ...newNode, parentHierarchyNodeId: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Hierarchy Level *</label>
                                <input 
                                    type="number" required placeholder="e.g. 1"
                                    value={newNode.hierarchyLevel}
                                    onChange={(e) => setNewNode({ ...newNode, hierarchyLevel: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition"
                                />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">External Entity Type</label>
                                <input 
                                    type="text" placeholder="Enter External Type"
                                    value={newNode.externalEntityType}
                                    onChange={(e) => setNewNode({ ...newNode, externalEntityType: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">External Entity ID</label>
                                <input 
                                    type="number" placeholder="Enter External ID"
                                    value={newNode.externalEntityId}
                                    onChange={(e) => setNewNode({ ...newNode, externalEntityId: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Description Text Box */}
                    <div className="border border-slate-100 rounded-2xl p-6 bg-white space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xs font-bold text-slate-700">Description</h3>
                            <span className="text-[10px] text-slate-400">{newNode.description.length} / 500</span>
                        </div>
                        <textarea 
                            rows="3" maxLength="500" placeholder="Enter additional description here..."
                            value={newNode.description}
                            onChange={(e) => setNewNode({ ...newNode, description: e.target.value })}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition resize-none"
                        />
                    </div>

                    {/* Footer Actions */}
                    <div className="flex gap-3 justify-end pt-4 border-t border-slate-50">
                        <button type="button" onClick={onClose} className="px-6 py-2.5 text-xs font-bold text-slate-500 hover:bg-slate-50 border border-slate-200 rounded-xl transition flex items-center gap-1.5 cursor-pointer">
                            <span>✕</span> Cancel
                        </button>
                        <button type="submit" className="px-6 py-2.5 text-xs font-bold text-white bg-[#5c59eb] hover:bg-indigo-700 rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer">
                            <span>💾</span> Save Node
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}