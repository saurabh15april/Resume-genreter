// components/Navbar.jsx

import {
  Bell,
  Search,
  Settings,
  Moon,
  Sun,
  UserCircle2
} from "lucide-react"

function Navbar() {
  return (
    <div className="navbar">

      {/* LEFT */}

      <div className="nav-left">

        <div>
          <h2>Production Dashboard</h2>
          <p>Welcome back, Saurabh 👋</p>
        </div>

      </div>

      {/* CENTER */}

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search anything..."
        />

      </div>

      {/* RIGHT */}

      <div className="nav-right">

        <button className="icon-btn">
          <Moon size={20} />
        </button>

        <button className="icon-btn notification-btn">
          <Bell size={20} />

          <span className="notification-dot"></span>
        </button>

        <button className="icon-btn">
          <Settings size={20} />
        </button>

       

      </div>

    </div>
  )
}

export default Navbar