import React, { useState } from 'react';
import Header from "../components/task-permission/Header";
import Table from "../components/task-permission/Table";
import Popup from "../components/task-permission/Popup";

const initialPermissions = [
  { id: 1, stepName: "Scrutiny", stepCode: "SCR", workflow: "Petition Workflow", canView: true, canEdit: true, canApprove: false, canReject: false },
  { id: 2, stepName: "Approval", stepCode: "APR", workflow: "Building Workflow", canView: true, canEdit: false, canApprove: true, canReject: true }
];

export default function PermissionPage() {
  const [permissions, setPermissions] = useState(initialPermissions);
  const [searchTerm, setSearchTerm] = useState("");
  
  // 1. New state to open and close the popup box
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleToggle = (id, field) => {
    const updatedData = permissions.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: !item[field] };
      }
      return item;
    });
    setPermissions(updatedData);
  };

  // 2. Function to add the new permission from the popup into our table
  const handleAddNewPermission = (newRow) => {
    const newId = permissions.length + 1;
    const completedRow = { id: newId, ...newRow };
    setPermissions([...permissions, completedRow]);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-6 text-slate-700">
      {/* Pass the function to open the popup to the Header */}
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        onAddClick={() => setIsPopupOpen(true)} 
      />
      
      <Table permissions={permissions} searchTerm={searchTerm} onToggle={handleToggle} />

      {/* 3. If isPopupOpen is true, render the Popup component */}
      {isPopupOpen && (
        <Popup 
          onClose={() => setIsPopupOpen(false)} 
          onSave={handleAddNewPermission} 
        />
      )}
    </div>
  );
}