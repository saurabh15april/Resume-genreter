// components/Sidebar.jsx
import { Link } from "react-router-dom"
import {
  LayoutDashboard,
  Factory,
  ShieldCheck,
  Settings,
  Bell,
  BarChart3,
  ClipboardList,
  Projector,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Trash
} from "lucide-react"

import { useState } from "react"

function Sidebar() {

  const [collapsed, setCollapsed] = useState(false)
  

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>

      {/* TOP SECTION */}

      <div>

        <div className="top-bar">

          {!collapsed && (
            <h2 className="logo">Shop Floor</h2>
          )}

          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>

        </div>

        {/* PROFILE */}

        <div className="profile-card">

         

          {!collapsed && (
            
            <div>
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />
              <h4>Saurabh Dubey</h4>
              <p>Assistant Manager</p>
            </div>
          )}

        </div>

        {/* MENU */}

        <ul className="menu">

          <li >
            <LayoutDashboard size={20} />
            {!collapsed && <Link to="/"  className="menu-btn">
            <span>Dashboard</span>
       
      </Link>}
          </li>

          <li>
            <Factory size={20} />
            {!collapsed && <Link to="/Production-Plan"  className="menu-btn">
            <span>Production Plan</span>
       
      </Link>}
          </li>

          <li>
            <ShieldCheck size={20} />
             {!collapsed && <Link to="/All-routing"  className="menu-btn">
            <span>Master Data</span>
       
      </Link>}
          </li>

          <li>
            <BarChart3 size={20} />
             {!collapsed && <Link to="/Resultant"  className="menu-btn">
            <span>Resultant</span>
       
      </Link>}
          </li>

          <li>
            <ClipboardList size={20} />
             {!collapsed && <Link to="/Add-Routing"  className="menu-btn">
            <span>Add Master data</span>
       
      </Link>}
          </li>

          <li>
            <Bell size={20} />
             {!collapsed && <Link to="/Add-Production-Plan"  className="menu-btn">
            <span>Add Production Plans</span>
       
      </Link>}
          </li>

          <li>
            <Trash size={20} />
             {!collapsed && <Link to="/Delete"  className="menu-btn">
            <span>Delete Data</span>
       
      </Link>}
          </li>

          <li>
            <Projector size={20} />
             {!collapsed && <Link to="/machine/:id"  className="menu-btn">
            <span>Machine Wise Loading</span>
       
      </Link>}
          </li>

          <li>
            <Settings size={20} />
             {!collapsed && <Link to="/"  className="menu-btn">
            <span>Settings</span>
       
      </Link>}
          </li>

        </ul>

      </div>

      {/* BOTTOM SECTION */}

      <div>

        {/* DARK MODE */}

        {/* <button
          className="dark-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}

          {!collapsed && (
            <span>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          )}
        </button> */}

        {/* LOGOUT */}

        <button className="logout-btn">
          <LogOut size={18} />

          {!collapsed && <span>Logout</span>}
        </button>

      </div>

    </div>
  )
}

export default Sidebar