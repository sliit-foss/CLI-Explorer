import React, { Component, useState, useEffect } from "react";
import { SideNav, Footer } from "components/layout";
import ExplorerContent from "components/explorerContent";


const App = () =>  {
  const [selectedItem, setSelectedItem] = useState("Git");
    return (
      <div className="bg-blue-bg min-h-screen ">
        <SideNav setContent = {setSelectedItem}/>
        <div className="flex flex-col justify-between h-full bg-blue-bg dark:bg-[#00183A] transition duration-500">
          <ExplorerContent selectedItem = {selectedItem}/>
          <Footer />
        </div>
      </div>
    );
  }

export default App;
