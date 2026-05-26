import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { trainingData } from "../data/trainingData"

const COLORS = [
  "#06b6d4",
  "#8b5cf6",
  "#f59e0b",
  "#ef4444"
]

const Analytics = () => {
  return (
    <div className="flex bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 flex-1 p-8">

        <Navbar />

        <div className="glass p-6 rounded-2xl h-[500px]">

          <h1 className="text-2xl font-bold mb-6 text-cyan-400">
            Analytics
          </h1>

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={trainingData}
                dataKey="trainings"
                nameKey="city"
                outerRadius={180}
                label
              >

                {trainingData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  )
}

export default Analytics
