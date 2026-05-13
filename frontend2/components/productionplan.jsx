// components/MachineTable.jsx

import {
  Cpu,
  Clock3,
  Users,
  Activity,
  CircleAlert
} from "lucide-react"

const ProductionPan = [
  {
    machine: "GR-820",
    component: "Godet Shaft",
    status: "Running",
    shift: "A",
    manpower: 6,
    totalTime: "124h",
    efficiency: "92%"
  },

  {
    machine: "VMC-204",
    component: "Center Plug",
    status: "Maintenance",
    shift: "B",
    manpower: 4,
    totalTime: "88h",
    efficiency: "76%"
  },

  {
    machine: "HMC-500",
    component: "Gear Housing",
    status: "Idle",
    shift: "C",
    manpower: 2,
    totalTime: "64h",
    efficiency: "58%"
  },

  {
    machine: "CNC-110",
    component: "Rotor Sleeve",
    status: "Running",
    shift: "A",
    manpower: 5,
    totalTime: "140h",
    efficiency: "95%"
  }
]

function MachineTable() {
  return (
    <div className="table-wrapper">

      {/* TOP */}

      <div className="table-header">

        <div>
          <h2>Machine Live Status</h2>
          <p>Real-time CNC production monitoring</p>
        </div>

        <button className="live-btn">
          ● Live Monitoring
        </button>

      </div>

      {/* TABLE */}

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Machine</th>
              <th>Component</th>
              <th>Status</th>
              <th>Shift</th>
              <th>Manpower</th>
              <th>Total Time</th>
              <th>Efficiency</th>
            </tr>

          </thead>

          <tbody>

            {machineTableData.map((item, index) => (

              <tr key={index}>

                <td>

                  <div className="machine-cell">

                    <div className="machine-icon-table">
                      <Cpu size={18} />
                    </div>

                    <span>{item.machine}</span>

                  </div>

                </td>

                <td>{item.component}</td>

                <td>

                  <div
                    className={`table-status ${
                      item.status === "Running"
                        ? "running"
                        : item.status === "Maintenance"
                        ? "maintenance"
                        : "idle"
                    }`}
                  >

                    {item.status === "Running" ? (
                      <Activity size={15} />
                    ) : (
                      <CircleAlert size={15} />
                    )}

                    {item.status}

                  </div>

                </td>

                <td>
                  <span className="shift-badge">
                    {item.shift}
                  </span>
                </td>

                <td>

                  <div className="table-flex">
                    <Users size={16} />
                    {item.manpower}
                  </div>

                </td>

                <td>

                  <div className="table-flex">
                    <Clock3 size={16} />
                    {item.totalTime}
                  </div>

                </td>

                <td>

                  <div>

                    <div className="efficiency-text">
                      {item.efficiency}
                    </div>

                    <div className="table-progress">

                      <div
                        className="table-progress-fill"
                        style={{
                          width: item.efficiency
                        }}
                      ></div>

                    </div>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default ProductionPlan;