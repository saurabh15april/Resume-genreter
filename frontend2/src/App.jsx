// App.jsx
import {
  Routes,
  Route
} from "react-router-dom"

import "./App.css"
import Sidebar from "../components/sideBar"
import Navbar from "../components/navbar"
import DashboardCards from "../components/dashboard"
import ProductionPlan from "../components/productionplan"

import addNewMasterData from "../components/addNewMasterData"
import addNewPPData from "../components/addNewPPData"
import deletePP from "../components/deletePP.jsx"
import machineWiseLoading from "../components/machineWiseLoading"
import masterData from "../components/masterData"
import resultant from "../components/resultant"
function App() {
  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-section">
        <Navbar />
        <DashboardCards/>
        <ProductionPlan/>

      </div>

    </div>
  )
}

export default App