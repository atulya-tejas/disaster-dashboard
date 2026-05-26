import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

import { trainingData } from "../data/trainingData"

const Records = () => {
  return (
    <div className="flex bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 flex-1 p-8">

        <Navbar />

        <div className="glass p-4 md:p-6 rounded-2xl overflow-x-auto">

          <h1 className="text-2xl font-bold mb-6 text-cyan-400">
            Training Records
          </h1>

          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-700 text-left">

                <th className="p-3">City</th>
                <th className="p-3">Trainings</th>
                <th className="p-3">Participants</th>
                <th className="p-3">Status</th>

              </tr>
            </thead>

            <tbody>

              {trainingData.map((item, index) => (

                <tr
                  key={index}
                  className="border-b border-slate-800 hover:bg-slate-800"
                >

                  <td className="p-3">
                    {item.city}
                  </td>

                  <td className="p-3">
                    {item.trainings}
                  </td>

                  <td className="p-3">
                    {item.participants}
                  </td>

                  <td className="p-3 text-green-400">
                    Active
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Records