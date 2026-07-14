const permissions = [
  {
    TaskPermissionId: 1,
    WorkflowStepId: 1,
    CanView: 1,
    CanEdit: 1,
    CanApprove: 0,
    CanReject: 0,
  },
  {
    TaskPermissionId: 2,
    WorkflowStepId: 2,
    CanView: 1,
    CanEdit: 0,
    CanApprove: 1,
    CanReject: 1,
  },
];

export default function Table() {
  return (
    <>
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left text-gray-700 font-semibold">Task Permission ID</th>

              <th className="p-4 text-left text-gray-700 font-semibold">Workflow Step ID</th>

              <th className="p-4 text-left text-gray-700 font-semibold">Can View</th>

              <th className="p-4 text-left text-gray-700 font-semibold">Can edit</th>

              <th className="p-4 text-left text-gray-700 font-semibold">Can Approve</th>

              <th className="p-4 text-left text-gray-700 font-semibold">Can Reject</th>

            </tr>

          </thead>

          <tbody>

            {permissions.map((item) => (

              <tr
                key={item}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4 text-gray-700">{item.TaskPermissionId}</td>

                <td className="p-4 text-gray-700">{item.WorkflowStepId}</td>

                <td className="p-4">
                    <input
                        type="checkbox"
                        checked={item.CanView === 1}
                        readOnly
                    />
                    </td>

                    <td className="p-4">
                    <input
                        type="checkbox"
                        checked={item.CanEdit === 1}
                        readOnly
                    />
                    </td>

                    <td className="p-4">
                    <input
                        type="checkbox"
                        checked={item.CanApprove === 1}
                        readOnly
                    />
                    </td>

                    <td className="p-4">
                    <input
                        type="checkbox"
                        checked={item.CanReject === 1}
                        readOnly
                    />
                    </td>


              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}