import { useState, useEffect } from "react"; 

// 1. Capitalized function name so React recognizes it as a component
export default function workflowTable({
    search,
    workflows,
    workflowtoggle,
    entriesPerPage,    
    setEntriesPerPage
}) { 

    const [sortField, setSortField] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);

    // 2. Reset to page 1 whenever the user types in the search box
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    const filteredworkflows = workflows.filter((workflow) =>
         workflow.name.toLowerCase().includes(search.toLowerCase()) ||
         workflow.workflowcode.toLowerCase().includes(search.toLowerCase())
    ); 

    const sortedWorkflows = [...filteredworkflows].sort((a, b) => {
        if (!sortField) return 0;

        let valA = a[sortField] !== undefined && a[sortField] !== null ? a[sortField].toString().toLowerCase() : "";
        let valB = b[sortField] !== undefined && b[sortField] !== null ? b[sortField].toString().toLowerCase() : "";

        if (sortField === "version") {
            valA = Number(a[sortField]) || 0;
            valB = Number(b[sortField]) || 0;
        }

        if (valA < valB) return sortDirection === "asc" ? -1 : 1;
        if (valA > valB) return sortDirection === "asc" ? 1 : -1;
        return 0;
    });

    // Pagination Calculations
    const totalEntries = sortedWorkflows.length;
    const totalPages = Math.ceil(totalEntries / (entriesPerPage || 10)) || 1;
    const activePage = currentPage > totalPages ? 1 : currentPage;

    const indexOfLastEntry = activePage * (entriesPerPage || 10);
    const indexOfFirstEntry = indexOfLastEntry - (entriesPerPage || 10);
    const currentDisplayedWorkflows = sortedWorkflows.slice(indexOfFirstEntry, indexOfLastEntry);

    // Custom SVG Sort Arrow Icons for the Header UI
    const renderSortIcon = (field) => {
        if (sortField !== field) {
            return (
                <svg className="w-3.5 h-3.5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3.25a.75.75 0 01.53.22l3.25 3.25a.75.75 0 11-1.06 1.06L12.75 5.81v12.38l1.97-1.97a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0l-3.25-3.25a.75.75 0 111.06-1.06l1.97 1.97V5.81L9.28 7.78a.75.75 0 01-1.06-1.06l3.25-3.25a.75.75 0 01.53-.22z" />
                </svg>
            );
        }
        return sortDirection === "asc" ? (
            <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.53 3.47a.75.75 0 00-1.06 0l-4 4a.75.75 0 001.06 1.06L11 5.81V19a.75.75 0 001.5 0V5.81l2.47 2.47a.75.75 0 001.06-1.06l-4-4z" />
            </svg>
        ) : (
            <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.47 20.53a.75.75 0 001.06 0l4-4a.75.75 0 00-1.06-1.06L13 18.19V5a.75.75 0 00-1.5 0v13.19l-2.47-2.47a.75.75 0 00-1.06 1.06l4 4z" />
            </svg>
        );
    };

    return (
        <div className="space-y-6">
            
            {/* The Inner Border Box wrapped around the Table */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                <table className="w-full border-collapse">
                    <thead className="bg-[#f8fafc]">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-20">S.No</th>
                            <th onClick={() => handleSort("name")}
                                className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                                <div className="flex items-center gap-1.5">
                                    Workflow Name {renderSortIcon("name")}
                                </div>
                            </th>
                            <th onClick={() => handleSort("workflowcode")}
                                className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                                <div className="flex items-center gap-1.5">
                                    Workflow Code {renderSortIcon("workflowcode")}
                                </div>
                            </th>
                            <th onClick={() => handleSort("workflowtype")}
                                className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                                <div className="flex items-center gap-1.5">
                                    Workflow Type {renderSortIcon("workflowtype")}
                                </div>
                            </th>
                            <th onClick={() => handleSort("version")}
                                className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors w-24">
                                <div className="flex items-center gap-1.5">
                                    Version {renderSortIcon("version")}
                                </div>
                            </th>
                            <th className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-32">Published</th>
                            <th className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-32">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {currentDisplayedWorkflows.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-12 text-center text-sm font-medium text-slate-400 bg-white">
                                    No workflows found matching your criteria.
                                </td>
                            </tr>
                        ) : (
                            currentDisplayedWorkflows.map((workflow, index) => (
                                <tr key={workflow.id} className="hover:bg-slate-50/50 transition">
                                    {/* Updated py-4.5 to py-4 for standard Tailwind compatability */}
                                    <td className="px-6 py-4 text-sm text-slate-400 font-medium">
                                        {indexOfFirstEntry + index + 1}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-800">{workflow.name}</td>
                                    <td className="px-6 py-4 text-sm text-slate-500 font-medium">{workflow.workflowcode}</td>
                                    <td className="px-6 py-4 text-sm text-slate-500 font-medium">{workflow.workflowtype}</td>
                                    <td className="px-6 py-4 text-sm text-slate-800 font-bold">{workflow.version}</td>
                                    
                                    {/* Published badge */}
                                    <td className="px-6 py-4 text-center">
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold ${
                                            workflow.published.toLowerCase() === "yes"
                                                ? "bg-emerald-50 text-emerald-600 border border-emerald-200/50"
                                                : "bg-rose-50 text-rose-600 border border-rose-200/50"
                                        }`}>
                                            {workflow.published.toLowerCase() === "yes" ? "✓ Yes" : "✕ No"}
                                        </span>
                                    </td>

                                    {/* Toggle switch */}
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex justify-center items-center">
                                            <label className="relative inline-flex items-center cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={workflow.status}
                                                    onChange={() => workflowtoggle(workflow.id)} 
                                                    className="sr-only peer"
                                                />
                                                {/* Updated h-5.5 to h-6 for standard Tailwind compatibility */}
                                                <div className="w-10 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 group-hover:scale-105 transition-transform"></div>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Bottom Pagination Box */}
            <div className="bg-[#fcfdfe] border border-slate-100 rounded-2xl px-6 py-4 flex items-center justify-end gap-6 shadow-sm">
                <div className="flex items-center gap-1">
                    <button 
                        onClick={() => setCurrentPage(1)}
                        disabled={activePage === 1}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                            activePage === 1 
                            ? "text-slate-300 cursor-not-allowed" 
                            : "text-slate-500 hover:bg-slate-50 cursor-pointer"
                        }`}
                    >
                        First
                    </button>

                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={activePage === 1}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1 ${
                            activePage === 1 
                            ? "text-slate-300 cursor-not-allowed" 
                            : "text-slate-500 hover:bg-slate-50 cursor-pointer"
                        }`}
                    >
                        ‹ Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNum = index + 1;
                        return (
                            <button
                                key={pageNum}
                                onClick={() => setCurrentPage(pageNum)}
                                className={`w-8 h-8 text-xs font-bold rounded-lg transition ${
                                    activePage === pageNum
                                    ? "bg-[#1e60ff] text-white shadow-sm shadow-blue-500/20"
                                    : "text-slate-500 hover:bg-slate-50 cursor-pointer"
                                }`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={activePage === totalPages}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1 ${
                            activePage === totalPages 
                            ? "text-slate-300 cursor-not-allowed" 
                            : "text-slate-500 hover:bg-slate-50 cursor-pointer"
                        }`}
                    >
                        Next ›
                    </button>

                    <button 
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={activePage === totalPages}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                            activePage === totalPages 
                            ? "text-slate-300 cursor-not-allowed" 
                            : "text-slate-500 hover:bg-slate-50 cursor-pointer"
                        }`}
                    >
                        Last
                    </button>
                </div>
            </div>

        </div>
    );
}