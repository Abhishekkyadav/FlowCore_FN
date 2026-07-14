export default function Popup() {
  return (
    <>
     <div className="fixed inset-0 flex justify-center items-center bg-black/30">

      <div className="w-[500px] bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold mb-8 text-blue-600">
          Add Task Permission
        </h2>

        <div className="space-y-5">

          <div>

            <label className="block mb-2 font-medium text-gray-600">
              Workflow
            </label>

            <select className="w-full border rounded-lg p-3 text-blue-500">

              <option>Select Workflow</option>

            </select>

          </div>

          <div>

            <label className="block mb-2 font-medium text-gray-600">
              Workflow Step
            </label>

            <select className="w-full border rounded-lg p-3 text-blue-500">

              <option>Select Step</option>

            </select>

          </div>

          <div>

            <label className="block mb-2 font-medium text-gray-600">
              Role
            </label>

            <select className="w-full border rounded-lg p-3 text-blue-500">

              <option>Select Role</option>

            </select>

          </div>

          <div>

            <label className="block mb-2 font-medium text-gray-600">
              Permission
            </label>

            <select className="w-full border rounded-lg p-3 text-blue-500">

              <option>Read</option>

              <option>Write</option>

              <option>Approve</option>

            </select>

          </div>

        </div>

        <div className="flex justify-end gap-3 mt-10">

          <button className="border px-5 py-2 rounded-lg text-blue-500">
            Cancel
          </button>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Save
          </button>

        </div>
      </div>
      </div>
    </>
  );
}