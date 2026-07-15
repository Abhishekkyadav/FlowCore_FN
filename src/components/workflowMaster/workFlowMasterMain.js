import WorkflowTable from"./workflowTable";
import WorkflowHeader from "./workflowHeader";
import SearchBar from "./SearchBar";
import {useState}from"react";
// import "../app/global.css";

export default function WorkflowMasterMain()


{
    const[search, setSearch]=useState("");

    const [workflows, setWorkflows] = useState([
  {
    id: 1,
    name: "Citizen Petition Workflow",
    workflowtype: "Petition",
    workflowcode: "PET-001",
    published: "yes",
  },
  {
    id: 2,
    name: "Building Permission Workflow",
    workflowtype: "Building Permission",
    workflowcode: "BLD-001",
    published: "yes",
  },
  {
    id: 3,
    name: "Leave Application Workflow",
   workflowtype: "Leave",
    workflowcode: "LEV-001",
    published:"No",
  },
  {
    id: 4,
    name: "Grievance Redressal Workflow",
   workflowtype: "Greivance",
    workflowcode: "GRV-001",
    published:"yes",
  },
  {
    id: 5,
    name: "Trade Licence Workflow",
   workflowtype: "Trade Licence",
    workflowcode: "TRD-001",
    published:"yes",
  },
]);
const [showModal, setShowModal] = useState(false);
    return(
        <div className="min-h-screen bg-[#F7F9FC] p-8">
            <WorkflowHeader/>

            <div className="flex justify-between items-center mt-8 mb-6">
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

               <button
               onClick={()=>setShowModal(true)}
  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow hover:bg-blue-700 hover:scale-105 transition-all duration-300"
>
  <span className="text-x1">+</span>
  <span>Add</span>
</button>
            </div>
            <WorkflowTable 
            search={search}
            workflows={workflows}/>
            {showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white w-[850px] rounded-2xl shadow-2xl p-8">

      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">

        <h2 className="text-2xl font-bold text-gray-800">
          Add New Workflow
        </h2>

        <button
          onClick={() => setShowModal(false)}
          className="text-2xl text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

      </div>

      {/* Form */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        <div>
          <label className="block text-sm font-medium mb-2">
            Workflow Type*
          </label>

          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Select workflow type"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Workflow Code*
          </label>

          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Enter department"
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium mb-2">
            Workflow Name*
          </label>

          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Enter workflow name"
          />
        </div>
        

        <div>
          <label className="block text-sm font-medium mb-2">
            Published
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>yes</option>
            <option>yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Version*
          </label>

          <input
            type=""
            className="w-full border rounded-lg p-3"
          />
        </div>


         <div>
          <label className="block text-sm font-medium mb-2">
            Discription*
          </label>

          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Enter workflow description(optional)"
         
          />
        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={() => setShowModal(false)}
          className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Save Workflow
        </button>

      </div>

    </div>

  </div>
)}
        </div>
    );    
}