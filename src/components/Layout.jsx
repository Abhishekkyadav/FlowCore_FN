import { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)} childrens={children} />

      {/* <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main> */}
    </div>
  );
};

export default Layout;