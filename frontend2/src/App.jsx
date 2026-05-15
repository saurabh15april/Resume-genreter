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

import AddNewMasterData from "../components/addNewMasterData"
import AddNewPPData from "../components/addNewPPData"
import DeletePP from "../components/deletePP.jsx"
import MachineWiseLoading from "../components/machineWiseLoading"
import MasterData from "../components/masterData"
import Resultant from "../components/resultant"


const appRoutes = [

  {
    path: "/",
    element: <DashboardCards/>
  },

  {
    path: "/Production-Plan",
    element: <ProductionPlan/>
  },

  {
    path: "/Add-Routing",
    element: <AddNewMasterData/>
  },

  {
    path: "/Add-Production-Plan",
    element: <AddNewPPData />
  },

  {
    path: "/machine/:id",
    element: <MachineWiseLoading/>
  },

  {
    path: "/All-routing",
    element: <MasterData />
  },

  {
    path: "/Resultant",
    element: <Resultant />
  },

  {
    path: "/Delete",
    element: <DeletePP/>
  }


]






function App() {
  return (

    <div className="app-layout">

      <Sidebar routes={appRoutes} />

      <div className="main-section">
        <Navbar />

        <Routes>

          {
            appRoutes.map((route, index) => (

              <Route
                key={index}
                path={route.path}
                element={route.element}
              />

            ))
          }

        </Routes>

      </div>

    </div>
  )
}

export default App