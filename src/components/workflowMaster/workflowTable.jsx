import { useState } from "react"; 

export default function WorkflowTable({
    search,
    workflows,
    workflowtoggle,
    entriesPerPage,    
    setEntriesPerPage
}) { 

    const [sortField, setSortField] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    const filteredworkflows = workflows.filter((workflow) =>
         workflow.name.toLowerCase().includes(search.toLowerCase())
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

    // ⚡ Pagination Math & Slicing Calculations ⚡
    const totalEntries = sortedWorkflows.length;
    const totalPages = Math.ceil(totalEntries / (entriesPerPage || 5)) || 1;
    
    // Safety check to reset back to valid index limits
    const activePage = currentPage > totalPages ? 1 : currentPage;

    const indexOfLastEntry = activePage * (entriesPerPage || 5);
    const indexOfFirstEntry = indexOfLastEntry - (entriesPerPage || 5);
    
    // Slices down the data rows display window dynamically
    const currentDisplayedWorkflows = sortedWorkflows.slice(indexOfFirstEntry, indexOfLastEntry);

    return (
        <div className="bg-white rounded-xl shadow-md mt-6 overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th onClick={() => handleSort("name")}
                            className="px-6 py-4 text-left text-sm font-semibold text-gray-700 cursor-pointer select-none hover:bg-gray-200 transition-colors">
                            Workflow Name {sortField === "name" ? (sortDirection === "asc" ? "▲" : "▼") : "⇅"}
                        </th>
                        <th onClick={() => handleSort("workflowcode")}
                            className="px-6 py-4 text-left text-sm font-semibold text-gray-700 cursor-pointer select-none hover:bg-gray-200 transition-colors">
                            Workflow Code {sortField === "workflowcode" ? (sortDirection === "asc" ? "▲" : "▼") : "⇅"}
                        </th>
                        <th onClick={() => handleSort("workflowtype")}
                            className="px-6 py-4 text-left text-sm font-semibold text-gray-700 cursor-pointer select-none hover:bg-gray-200 transition-colors">
                            Workflow Type {sortField === "workflowtype" ? (sortDirection === "asc" ? "▲" : "▼") : "⇅"}
                        </th>
                        <th onClick={() => handleSort("version")}
                            className="px-6 py-4 text-left text-sm font-semibold text-gray-700 cursor-pointer select-none hover:bg-gray-200 transition-colors">
                            Version {sortField === "version" ? (sortDirection === "asc" ? "▲" : "▼") : "⇅"}
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Published</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Fixed: Iterate over currentDisplayedWorkflows instead of sortedWorkflows */}
                    {currentDisplayedWorkflows.map((workflow) => (
                        <tr
                            key={workflow.id}
                            className="border-t hover:bg-gray-50 transition"
                        >
                            <td className="px-6 py-4 text-sm text-gray-800">{workflow.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{workflow.workflowcode}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{workflow.workflowtype}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{workflow.version}</td>
                            <td className="px-6 py-4 text-center">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                                        workflow.published.toLowerCase() === "yes"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {workflow.published}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex justify-center items-center">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={workflow.status}
                                            onChange={() => workflowtoggle(workflow.id)} 
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Dynamic, Working Pagination Box */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#f8fafd] border-t border-[#eef2f6] rounded-b-xl">
                
                {/* Left Side: Page Size Selector Dropdown & Counter Text */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-500">Show</span>
                        <select
                            value={entriesPerPage}
                            onChange={(e) => {
                                setEntriesPerPage(Number(e.target.value));
                                setCurrentPage(1); 
                            }}
                            className="px-2 py-1 text-sm bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 cursor-pointer font-semibold"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                        <span className="text-sm font-medium text-slate-500">entries</span>
                    </div>

                    <span className="text-sm font-medium text-slate-400">|</span>

                    <span className="text-sm font-medium text-slate-500">
                        Showing {totalEntries === 0 ? 0 : indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
                    </span>
                </div>

                {/* Right Side: Working Navigation Buttons */}
                <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button 
                        disabled={activePage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={`flex items-center justify-center w-8 h-8 rounded-lg border transition ${
                            activePage === 1 
                            ? "text-slate-400 bg-[#f1f5f9] border-slate-200 cursor-not-allowed" 
                            : "text-slate-600 bg-white border-slate-300 hover:bg-gray-50 cursor-pointer"
                        }`}
                    >
                        &lt;
                    </button>
                    
                    {/* Dynamic Page Numbers Generation */}
                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNum = index + 1;
                        return (
                            <button
                                key={pageNum}
                                onClick={() => setCurrentPage(pageNum)}
                                className={`flex items-center justify-center w-8 h-8 font-semibold rounded-lg shadow-sm transition ${
                                    activePage === pageNum
                                    ? "text-white bg-[#0066cc]"
                                    : "text-slate-600 bg-white border border-slate-300 hover:bg-gray-50 cursor-pointer"
                                }`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    {/* Next Button */}
                    <button 
                        disabled={activePage === totalPages}
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={`flex items-center justify-center w-8 h-8 rounded-lg border transition ${
                            activePage === totalPages 
                            ? "text-slate-400 bg-[#f1f5f9] border-slate-200 cursor-not-allowed" 
                            : "text-slate-600 bg-white border-slate-300 hover:bg-gray-50 cursor-pointer"
                        }`}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}