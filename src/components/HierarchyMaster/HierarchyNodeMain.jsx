"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import HierarchyNodeModal from "./HierarchyNodeModal";
import HierarchyTable from "./HierarchyTable";

export default function HierarchyNodeMain() {
    const [search, setSearch] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Table sorting states
    const [sortField, setSortField] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);

    const [nodes, setNodes] = useState([
    { hierarchyNodeId: 1, parentHierarchyNodeId: "", hierarchyLevel: 1, nodeType: "District", nodeName: "Amritsar", externalEntityType: "District", externalEntityId: 10, isActive: true },
    { hierarchyNodeId: 2, parentHierarchyNodeId: 1, hierarchyLevel: 2, nodeType: "Block", nodeName: "Ajnala", externalEntityType: "Block", externalEntityId: 22, isActive: true },
    { hierarchyNodeId: 3, parentHierarchyNodeId: "", hierarchyLevel: 1, nodeType: "District", nodeName: "Ludhiana", externalEntityType: "District", externalEntityId: 14, isActive: true },
    { hierarchyNodeId: 4, parentHierarchyNodeId: 3, hierarchyLevel: 2, nodeType: "Block", nodeName: "Jagraon", externalEntityType: "Block", externalEntityId: 35, isActive: false },
    { hierarchyNodeId: 5, parentHierarchyNodeId: 1, hierarchyLevel: 2, nodeType: "Block", nodeName: "Rayya", externalEntityType: "Block", externalEntityId: 28, isActive: true },
    { hierarchyNodeId: 6, parentHierarchyNodeId: "", hierarchyLevel: 1, nodeType: "District", nodeName: "Jalandhar", externalEntityType: "District", externalEntityId: 12, isActive: true },
    { hierarchyNodeId: 7, parentHierarchyNodeId: 6, hierarchyLevel: 2, nodeType: "Tehsil", nodeName: "Phillaur", externalEntityType: "Tehsil", externalEntityId: 41, isActive: true },
    { hierarchyNodeId: 8, parentHierarchyNodeId: 7, hierarchyLevel: 3, nodeType: "Village", nodeName: "Apra", externalEntityType: "Village", externalEntityId: 105, isActive: true },
    { hierarchyNodeId: 9, parentHierarchyNodeId: 3, hierarchyLevel: 2, nodeType: "Block", nodeName: "Khanna", externalEntityType: "Block", externalEntityId: 38, isActive: true },
    { hierarchyNodeId: 10, parentHierarchyNodeId: 2, hierarchyLevel: 3, nodeType: "Village", nodeName: "Chamrai", externalEntityType: "Village", externalEntityId: 112, isActive: false }
]);

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    const handleToggle = (id) => {
        setNodes(prev => prev.map(node => 
            node.hierarchyNodeId === id ? { ...node, isActive: !node.isActive } : node
        ));
    };

    const handleSaveNewNode = (submittedNodeData) => {
        const nextId = nodes.length > 0 ? Math.max(...nodes.map(n => n.hierarchyNodeId)) + 1 : 1;
        
        const completeNode = {
            hierarchyNodeId: nextId,
            parentHierarchyNodeId: submittedNodeData.parentHierarchyNodeId ? Number(submittedNodeData.parentHierarchyNodeId) : "",
            hierarchyLevel: Number(submittedNodeData.hierarchyLevel),
            nodeType: submittedNodeData.nodeType,
            nodeName: submittedNodeData.nodeName,
            externalEntityType: submittedNodeData.externalEntityType || "",
            externalEntityId: submittedNodeData.externalEntityId ? Number(submittedNodeData.externalEntityId) : "",
            isActive: submittedNodeData.isActive
        };

        setNodes([completeNode, ...nodes]);
        setIsModalOpen(false);
    };

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    // Filter logic
    const filteredNodes = nodes.filter((node) =>
         node.nodeName.toLowerCase().includes(search.toLowerCase()) ||
         node.nodeType.toLowerCase().includes(search.toLowerCase())
    ); 

    // Sort logic
    const sortedNodes = [...filteredNodes].sort((a, b) => {
        if (!sortField) return 0;
        let valA = a[sortField] !== undefined && a[sortField] !== null ? a[sortField].toString().toLowerCase() : "";
        let valB = b[sortField] !== undefined && b[sortField] !== null ? b[sortField].toString().toLowerCase() : "";

        if (["hierarchyNodeId", "parentHierarchyNodeId", "hierarchyLevel", "externalEntityId"].includes(sortField)) {
            valA = Number(a[sortField]) || 0;
            valB = Number(b[sortField]) || 0;
        }

        if (valA < valB) return sortDirection === "asc" ? -1 : 1;
        if (valA > valB) return sortDirection === "asc" ? 1 : -1;
        return 0;
    });

    // Pagination calculations
    const totalEntries = sortedNodes.length;
    const totalPages = Math.ceil(totalEntries / entriesPerPage) || 1;
    const activePage = currentPage > totalPages ? 1 : currentPage;
    const indexOfLastEntry = activePage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentDisplayedNodes = sortedNodes.slice(indexOfFirstEntry, indexOfLastEntry);

    return (
        <div className="min-h-screen bg-[#f3f4f6] font-sans w-full p-6 space-y-5">
            {/* New Standalone Header Component */}
            <Header onAddNodeClick={() => setIsModalOpen(true)} />

            <main className="space-y-5 overflow-x-hidden w-full">
                {/* Table Control Layout */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="relative w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search node name or type..."
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

                    {/* Modular Table Component */}
                    <HierarchyTable 
                        currentDisplayedNodes={currentDisplayedNodes}
                        indexOfFirstEntry={indexOfFirstEntry}
                        handleSort={handleSort}
                        sortField={sortField}
                        sortDirection={sortDirection}
                        handleToggle={handleToggle}
                    />

                    {/* Pagination Interface */}
                    <div className="bg-[#fcfdfe] border border-slate-100 rounded-2xl px-6 py-4 flex items-center justify-end gap-6 shadow-sm">
                        <div className="flex items-center gap-1">
                            <button onClick={() => setCurrentPage(1)} disabled={activePage === 1} className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activePage === 1 ? "text-slate-300 cursor-not-allowed" : "text-slate-500 hover:bg-slate-50 cursor-pointer"}`}>First</button>
                            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={activePage === 1} className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activePage === 1 ? "text-slate-300 cursor-not-allowed" : "text-slate-500 hover:bg-slate-50 cursor-pointer"}`}>‹ Prev</button>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={`w-8 h-8 text-xs font-bold rounded-lg transition ${activePage === index + 1 ? "bg-[#1e60ff] text-white" : "text-slate-500 hover:bg-slate-50 cursor-pointer"}`}>{index + 1}</button>
                            ))}
                            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={activePage === totalPages} className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activePage === totalPages ? "text-slate-300 cursor-not-allowed" : "text-slate-500 hover:bg-slate-50 cursor-pointer"}`}>Next ›</button>
                            <button onClick={() => setCurrentPage(totalPages)} disabled={activePage === totalPages} className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activePage === totalPages ? "text-slate-300 cursor-not-allowed" : "text-slate-500 hover:bg-slate-50 cursor-pointer"}`}>Last</button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal Component */}
            <HierarchyNodeModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveNewNode}
            />
        </div>
    );
}