"use client";

export default function HierarchyTable({ currentDisplayedNodes, indexOfFirstEntry, handleSort, sortField, sortDirection, handleToggle }) {
    
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
        <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm overflow-x-auto">
            <table className="w-full border-collapse min-w-[1000px]">
                <thead className="bg-[#f8fafc]">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-20">S.No</th>
                        <th onClick={() => handleSort("hierarchyNodeId")} className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-1.5">Node ID {renderSortIcon("hierarchyNodeId")}</div>
                        </th>
                        <th onClick={() => handleSort("parentHierarchyNodeId")} className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-1.5">Parent ID {renderSortIcon("parentHierarchyNodeId")}</div>
                        </th>
                        <th onClick={() => handleSort("hierarchyLevel")} className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-1.5">Level {renderSortIcon("hierarchyLevel")}</div>
                        </th>
                        <th onClick={() => handleSort("nodeType")} className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-1.5">Node Type {renderSortIcon("nodeType")}</div>
                        </th>
                        <th onClick={() => handleSort("nodeName")} className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-1.5">Node Name {renderSortIcon("nodeName")}</div>
                        </th>
                        <th onClick={() => handleSort("externalEntityType")} className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-1.5">Ext. Entity Type {renderSortIcon("externalEntityType")}</div>
                        </th>
                        <th onClick={() => handleSort("externalEntityId")} className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-1.5">Ext. Entity ID {renderSortIcon("externalEntityId")}</div>
                        </th>
                        <th className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-32">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {currentDisplayedNodes.length === 0 ? (
                        <tr>
                            <td colSpan={9} className="px-6 py-12 text-center text-sm font-medium text-slate-400 bg-white">
                                No hierarchy nodes found matching your criteria.
                            </td>
                        </tr>
                    ) : (
                        currentDisplayedNodes.map((node, index) => (
                            <tr key={node.hierarchyNodeId} className="hover:bg-slate-50/50 transition">
                                <td className="px-6 py-4 text-sm text-slate-400 font-medium">{indexOfFirstEntry + index + 1}</td>
                                <td className="px-6 py-4 text-sm font-bold text-slate-800">{node.hierarchyNodeId}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">{node.parentHierarchyNodeId || "-"}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">{node.hierarchyLevel}</td>
                                <td className="px-6 py-4 text-sm font-semibold text-slate-800">{node.nodeType}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">{node.nodeName}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">{node.externalEntityType}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">{node.externalEntityId}</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <label className="relative inline-flex items-center cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={node.isActive}
                                                onChange={() => handleToggle(node.hierarchyNodeId)} 
                                                className="sr-only peer"
                                            />
                                            <div className="w-10 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 group-hover:scale-105 transition-transform"></div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}