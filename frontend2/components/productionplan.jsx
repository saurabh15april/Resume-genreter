// PRODUCTION PLAN

import { useState } from "react";


function ProductionPlan() {

  const [showPopup, setShowPopup] = useState(false);

  const [completedQty, setCompletedQty] =
    useState("");

  const [componentData, setComponentData] =
  useState({
    clientName: "Reliance Industries",

    componentName: "Gear Housing",

    componentNumber: "GH-2026-001",

    cycleTime: "20 min",

    qty: 250,

    machines: [
      {
        operation: "OP10",
        machine: "VMC-01",
        status: "completed",
      },

      {
        operation: "OP20",
        machine: "HMC-02",
        status: "completed",
      },

      {
        operation: "OP30",
        machine: "CNC-05",
        status: "running",
      },

      {
        operation: "OP40",
        machine: "VTL-01",
        status: "pending",
      },

      {
        operation: "OP50",
        machine: "Grinding",
        status: "pending",
      },
    ],
  });

  // Complete Button
// HandlComplete
  const handleComplete = () => {

  const qty = Number(completedQty);

  // Validation

  if (!qty || qty <= 0) {
    alert("Enter valid qty");
    return;
  }

  if (qty > componentData.qty) {
    alert("Qty exceeds available quantity");
    return;
  }

  // Minus Qty

  setComponentData((prev) => ({
    ...prev,
    qty: prev.qty - qty,
  }));

  console.log("Completed Qty :", qty);

  console.log(
    "Remaining Qty :",
    componentData.qty - qty
  );

  // Close Popup

  setShowPopup(false);

  setCompletedQty("");
};
  return (
    <div className="app">

      {/* Main Card */}

      <div className="production-card">

        {/* Header */}

        <div className="card-header">

          <div>
            <h2>
              {
                componentData.componentName
              }
            </h2>

            <p>
              Client :
              <span>
                {
                  componentData.clientName
                }
              </span>
            </p>
          </div>
           <div className="info-card">
              <h4>
                Component Number
              </h4>

              <p>
                {
                  componentData.componentNumber
                }
              </p>
            </div>

            <div className="info-card">
              <h4>Cycle Time</h4>

              <p>
                {
                  componentData.cycleTime
                }
              </p>
            </div>

          <div className="qty-box">
            Qty :
            <span>
              {componentData.qty}
            </span>
          </div>

        </div>

        {/* Body */}

        <div className="card-body">


          {/* MACHINE FLOW */}

<div className="machine-flow">

  {componentData.machines.map(
    (item, index) => (
      <div
        className="flow-step"
        key={index}
      >

        {/* Machine Circle */}

        <div
          className={`machine-node ${item.status}`}
        >
          <h4>{item.machine}</h4>

          <span>{item.operation}</span>
        </div>

        {/* Line */}

        {index !==
          componentData.machines.length -
            1 && (
          <div
            className={`flow-line ${
              item.status ===
              "completed"
                ? "active"
                : ""
            }`}
          ></div>
        )}
      </div>
    )
  )}

</div>

          {/* Buttons */}

          <div className="button-group">

            <button className="btn drawing">
              Show Drawing
            </button>

            <button
              className="btn complete"
              onClick={() =>
                setShowPopup(true)
              }
            >
              Complete
            </button>

            <button className="btn accept">
              Accept
            </button>

            <button className="btn running">
              Running
            </button>

            <button className="btn stop">
              Stop
            </button>

            <button className="btn rm">
              RM Not Avl
            </button>

          </div>

        </div>
      </div>

      {/* Popup */}

      {showPopup && (
        <div className="popup-overlay">

          <div className="popup">

            <h2>
              Enter Completed Qty
            </h2>

            <input
              type="number"
              placeholder="Enter Qty"
              value={completedQty}
              onChange={(e) =>
                setCompletedQty(
                  e.target.value
                )
              }
            />

            <div className="popup-buttons">

              <button
                className="save-btn"
                onClick={handleComplete}
              >
                Submit
              </button>

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowPopup(false)
                }
              >
                Cancel
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default ProductionPlan;