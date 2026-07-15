export default function WorkflowTable({
    search,
    workflows
}) {



    const filteredworkflows = workflows.filter((workflow) =>
         workflow.name.toLowerCase().includes(search.toLowerCase())); 
  
    return(
<div className="bg-white rounded-xl shadow-md mt-6 overflow-hidden">
<table className="w-full">
<thead className="bg-gray-100">
<tr>
<th className="px-6 py-4 text-left">Workflow Name</th>
<th className="px-6 py-4 text-left">Workflow Code</th>
<th className="px-6 py-4 text-left">Workflow Type</th>
<th className="px-6 py-4 text-left">Published</th>
<th className="px-6 py-4 text-center">Status</th>
</tr>
</thead>
<tbody>
  {filteredworkflows.map((workflow) => (
    <tr
      key={workflow.id}
      className="border-t hover:bg-gray-50 transition"
    >
      <td className="px-6 py-4">{workflow.name}</td>
      <td className="px-6 py-4">{workflow.workflowcode}</td>
      <td className="px-6 py-4">{workflow.workflowtype}</td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            workflow.published === "yes"
              ? "bg-green-100 text-green-700"
              : workflow.published === "n0"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {workflow.published}
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <button className="text-xl text-gray-500 hover:text-blue-600">
          ⋮
        </button>
      </td>
    </tr>
  ))}
</tbody>
</table>
</div>
    );
}