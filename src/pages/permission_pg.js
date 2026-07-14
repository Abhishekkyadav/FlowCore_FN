import Header from "../components/task-permission/Header";
import Table from "../components/task-permission/Table";
import Popup from "../components/task-permission/Popup";

export default function PermissionPage() {
  return (
    <>
      <div className="min-h-screen bg-[#F5F7FB] P-6">
      <Header />
      <Table />
      <Popup /> 

      </div>
    </>
  );
}

