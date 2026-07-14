
export default function Header() {
  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Task Permission
        </h1>

        <p className="text-gray-600 mt-2">
          Dashboard &gt; Masters &gt; Task Permission
        </p>

        <div className="flex justify-between items-center mt-6">
          
          <input
            type="text"
            placeholder="Search task permission..."
            className="w-80 border border-gray-900 rounded-lg px-4 py-2 outline-none text-black placeholder:text-blue-500"
          />
          

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
            + Add Task Permission
          </button>
        </div>
      </div>
    </>
  );
}