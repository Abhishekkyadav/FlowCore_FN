import { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)} children={children}/>

      
    </div>
  );
};

export default Layout;