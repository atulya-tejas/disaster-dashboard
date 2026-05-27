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
    <div className="bg-slate-900 min-h-screen text-white">

      <Navbar />

      <div className="p-4 md:p-8">

        <div className="
          glass
          p-4
          md:p-6
          rounded-2xl
          h-[400px]
          md:h-[500px]
        ">

          <h1 className="
            text-2xl
            font-bold
            mb-6
            text-cyan-400
          ">
            Analytics
          </h1>

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={trainingData}
                dataKey="trainings"
                nameKey="city"
                outerRadius={120}
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