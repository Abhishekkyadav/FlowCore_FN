export default function WorkflowTable({
    search,
    workflows,
    workflowtoggle
}) {

    const filteredworkflows = workflows.filter((workflow) =>
         workflow.name.toLowerCase().includes(search.toLowerCase())
    ); 
  
    return (
        <div className="bg-white rounded-xl shadow-md mt-6 overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Workflow Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Workflow Code</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Workflow Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Published</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredworkflows.map((workflow) => (
                        <tr
                            key={workflow.id}
                            className="border-t hover:bg-gray-50 transition"
                        >
                            <td className="px-6 py-4 text-sm text-gray-800">{workflow.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{workflow.workflowcode}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{workflow.workflowtype}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                                        workflow.published === "yes"
                                            ? "bg-green-100 text-green-700"
                                            : workflow.published === "no"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {workflow.published}
                                </span>
                            </td>
                            {/* Toggle Switch Column */}
                            <td className="px-6 py-4 flex justify-center">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={workflow.status}
                                        onChange={() => workflowtoggle(workflow.id)} 
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Box */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#f8fafd] border-t border-[#eef2f6] rounded-b-xl">
                {/* Left Side: Text */}
                <span className="text-sm font-medium text-slate-500">
                    Showing 1 to {filteredworkflows.length} of {filteredworkflows.length} entries
                </span>

                {/* Right Side: Navigation Buttons */}
                <div className="flex items-center gap-2">
                    {/* Prev Button (Disabled) */}
                    <button 
                        disabled 
                        className="flex items-center justify-center w-8 h-8 text-slate-400 bg-[#f1f5f9] border border-slate-200 rounded-lg cursor-not-allowed"
                    >
                        &lt;
                    </button>
                    
                    {/* Active Page 1 Button */}
                    <button 
                        className="flex items-center justify-center w-8 h-8 font-semibold text-white bg-[#0066cc] rounded-lg shadow-sm"
                    >
                        1
                    </button>
                </div>
            </div>
        </div>
    );
}