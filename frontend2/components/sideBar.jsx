// components/Sidebar.jsx

import {
  LayoutDashboard,
  Factory,
  ShieldCheck,
  FileText,
  Settings,
  Bell,
  BarChart3,
  ClipboardList,
  Users,
  Wrench,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  LogOut
} from "lucide-react"

import { useState } from "react"

function Sidebar() {

  const [collapsed, setCollapsed] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>

      {/* TOP SECTION */}

      <div>

        <div className="top-bar">

          {!collapsed && (
            <h2 className="logo">Shop Floor Planning</h2>
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

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          {!collapsed && (
            <div>
              <h4>Saurabh</h4>
              <p>Assistant Manager</p>
            </div>
          )}

        </div>

        {/* MENU */}

        <ul className="menu">

          <li className="active">
            <LayoutDashboard size={20} />
            {!collapsed && <span>Dashboard</span>}
          </li>

          <li>
            <Factory size={20} />
            {!collapsed && <span>Production Plan</span>}
          </li>

          <li>
            <ShieldCheck size={20} />
            {!collapsed && <span>Master Data</span>}
          </li>

          <li>
            <BarChart3 size={20} />
            {!collapsed && <span>Resultant</span>}
          </li>

          <li>
            <ClipboardList size={20} />
            {!collapsed && <span>Add Master data</span>}
          </li>

          <li>
            <Bell size={20} />
            {!collapsed && <span>Add Production Plans</span>}
          </li>

          <li>
            <Users size={20} />
            {!collapsed && <span>Delete Data</span>}
          </li>

          <li>
            <Wrench size={20} />
            {!collapsed && <span>Maintenance</span>}
          </li>

          <li>
            <Settings size={20} />
            {!collapsed && <span>Settings</span>}
          </li>

        </ul>

      </div>

      {/* BOTTOM SECTION */}

      <div>

        {/* DARK MODE */}

        <button
          className="dark-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}

          {!collapsed && (
            <span>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          )}
        </button>

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