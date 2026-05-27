import Navbar from "../components/Navbar"

const AddTraining = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white">

      <Navbar />

      <div className="p-4 md:p-8">

        <div className="
          glass
          p-6
          md:p-8
          rounded-2xl
          max-w-2xl
          mx-auto
        ">

          <h1 className="
            text-2xl
            md:text-3xl
            font-bold
            text-cyan-400
            mb-8
          ">
            Add Training
          </h1>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Training Name"
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-800
              "
            />

            <input
              type="text"
              placeholder="City"
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-800
              "
            />

            <input
              type="number"
              placeholder="Participants"
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-800
              "
            />

            <select
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-800
              "
            >
              <option>Flood</option>
              <option>Earthquake</option>
              <option>Cyclone</option>
            </select>

            <button
              className="
                w-full
                bg-cyan-500
                p-3
                rounded-lg
                font-bold
                hover:bg-cyan-600
              "
            >
              Submit Training
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AddTraining