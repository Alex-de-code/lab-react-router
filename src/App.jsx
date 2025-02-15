import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <Nav /> 
      <Routes>
        <Route 
          path="/" 
          element={<Home employees={employees} owners={owners} pets={pets} />}
        />
        <Route 
          path="/staff"
          index element={<StaffList employees={employees} />}
        />

        <Route path="/pets">
          {/* whole pet list  */}
          <Route index element={<PetsList pets={pets} />} /> 
          {/* path dependent on kind of pet */}
          <Route path=":kind" element={<PetsList pets={pets} />} />
        </Route>
        
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
