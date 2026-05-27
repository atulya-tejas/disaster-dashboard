import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div
      className="
      w-full
      bg-slate-950
      border-b
      border-slate-800
      px-4
      md:px-8
      py-4
      flex
      flex-col
      md:flex-row
      md:items-center
      md:justify-between
      gap-4
      sticky
      top-0
      z-50
    "
    >
      <h1 className="text-2xl font-bold text-cyan-400">
        Disaster Monitor
      </h1>

      <div
        className="
        flex
        flex-wrap
        gap-4
        text-sm
        md:text-base
      "
      >
        <Link
          to="/dashboard"
          className="hover:text-cyan-400"
        >
          Dashboard
        </Link>

        <Link
          to="/add-training"
          className="hover:text-cyan-400"
        >
          Add Training
        </Link>

        <Link
          to="/records"
          className="hover:text-cyan-400"
        >
          Records
        </Link>

        <Link
          to="/analytics"
          className="hover:text-cyan-400"
        >
          Analytics
        </Link>
      </div>
    </div>
  )
}

export default Navbar