// components/DashboardCards.jsx

import {
  Cpu,
  Clock3,
  Users
} from "lucide-react"

const machineData = [
  {
    machine: "GR-820",
    component: "Godet Shaft",
    status: "Running",
    time: "124h",
    manpower: 6,
    efficiency: "92%"
  },

  {
    machine: "VMC-204",
    component: "Center Plug",
    status: "Maintenance",
    time: "88h",
    manpower: 4,
    efficiency: "76%"
  },

  {
    machine: "HMC-500",
    component: "Gear Housing",
    status: "Idle",
    time: "64h",
    manpower: 2,
    efficiency: "58%"
  },

  {
    machine: "CNC-110",
    component: "Rotor Sleeve",
    status: "Running",
    time: "140h",
    manpower: 5,
    efficiency: "95%"
  }
]

function DashboardCards() {
  return (
    <div className="dashboard-container">

      {machineData.map((item, index) => (

        <div className="machine-card" key={index}>

          <div className="live-badge">
            ● LIVE
          </div>

          {/* TOP */}

          <div className="card-top">

            <div className="machine-left">

              <div className="machine-icon">
                <Cpu />
              </div>

              <div>

                <div className="machine-name">
                  {item.machine}
                </div>

                <div className="component-name">
                  {item.component}
                </div>

              </div>

            </div>

            <div
              className={`status ${
                item.status === "Running"
                  ? "running"
                  : item.status === "Maintenance"
                  ? "maintenance"
                  : "idle"
              }`}
            >
              {item.status}
            </div>

          </div>

          {/* STATS */}

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-top">
                <Clock3 />
              </div>

              <div className="stat-value">
                {item.time}
              </div>

              <div className="stat-label">
                Total Time Req
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-top">
                <Users />
              </div>

              <div className="stat-value">
                {item.manpower}
              </div>

              <div className="stat-label">
                Manpower Used
              </div>

            </div>

          </div>

          {/* EFFICIENCY */}

          <div className="efficiency-section">

            <div className="efficiency-header">

              <span>Efficiency</span>

              <span>{item.efficiency}</span>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: item.efficiency
                }}
              ></div>

            </div>

          </div>

        </div>

      ))}

    </div>
  )
}

export default DashboardCards