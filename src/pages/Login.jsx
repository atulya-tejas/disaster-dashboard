import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">

      <div className="glass p-10 rounded-3xl w-96">

        <h1 className="text-3xl font-bold text-cyan-400 text-center mb-8">
          Disaster Monitor
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-slate-800 mb-6"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-cyan-500 p-3 rounded-lg font-bold hover:bg-cyan-600"
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login