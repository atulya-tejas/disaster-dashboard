import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { trainingData } from "../data/trainingData"

const chartData = trainingData.map((item) => ({
  city: item.city,
  trainings: item.trainings
}))

const TrainingChart = () => {
  return (
    <div className="glass p-5 rounded-2xl h-[300px] md:h-[400px]">

      <h2 className="text-xl font-bold mb-4">
        Trainings Analytics
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>

          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="trainings"
            fill="#06b6d4"
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default TrainingChart