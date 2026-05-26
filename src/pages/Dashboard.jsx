import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import StatCard from "../components/StatCard"
import IndiaMap from "../components/IndiaMap"
import TrainingChart from "../components/TrainingChart"

const Dashboard = () => {
  return (
    <div className="flex bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 flex-1 p-8">

        <Navbar />

        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <StatCard
            title="Active Trainings"
            value="312"
            color="text-red-400"
          />

          <StatCard
            title="Participants"
            value="56,000"
            color="text-cyan-400"
          />

          <StatCard
            title="Alerts"
            value="7"
            color="text-yellow-400"
          />

          <StatCard
            title="Pending Reports"
            value="18"
            color="text-purple-400"
          />

        </div>

        {/* Map */}

        <div className="mb-8">
          <IndiaMap />
        </div>

        {/* Charts */}

        <TrainingChart />

      </div>

    </div>
  )
}

export default Dashboard
