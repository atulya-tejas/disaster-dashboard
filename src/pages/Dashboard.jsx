import Navbar from "../components/Navbar"
import StatCard from "../components/StatCard"
import IndiaMap from "../components/IndiaMap"
import TrainingChart from "../components/TrainingChart"

const Dashboard = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white">

      <Navbar />

      <div className="p-4 md:p-8">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-8
        ">

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

        <div className="mb-8">
          <IndiaMap />
        </div>

        <TrainingChart />

      </div>

    </div>
  )
}

export default Dashboard