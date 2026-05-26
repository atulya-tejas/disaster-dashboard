import {
  LayoutDashboard,
  PlusCircle,
  Table,
  BarChart3
} from "lucide-react"

import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-full md:w-64 h-auto md:h-screen glass md:fixed p-5 z-50">

      <h1 className="text-2xl font-bold text-cyan-400 mb-10">
        Disaster Monitor
      </h1>

      <div className="flex md:flex-col gap-6 overflow-x-auto">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:text-cyan-400"
        >
          <LayoutDashboard />
          Dashboard
        </Link>

        <Link
          to="/add-training"
          className="flex items-center gap-3 hover:text-cyan-400"
        >
          <PlusCircle />
          Add Training
        </Link>

        <Link
          to="/records"
          className="flex items-center gap-3 hover:text-cyan-400"
        >
          <Table />
          Records
        </Link>

        <Link
          to="/analytics"
          className="flex items-center gap-3 hover:text-cyan-400"
        >
          <BarChart3 />
          Analytics
        </Link>

      </div>
    </div>
  )
}

export default Sidebar