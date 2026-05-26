const StatCard = ({ title, value, color }) => {
  return (
    <div className="glass p-6 rounded-2xl">

      <h3 className="text-gray-300 text-sm">
        {title}
      </h3>

      <p className={`text-3xl font-bold mt-3 ${color}`}>
        {value}
      </p>

    </div>
  )
}

export default StatCard