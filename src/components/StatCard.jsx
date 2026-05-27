const StatCard = ({
  title,
  value,
  color
}) => {
  return (
    <div className="
      glass
      p-5
      md:p-6
      rounded-2xl
      hover:scale-105
      transition
      duration-300
    ">

      <h3 className="
        text-gray-300
        text-sm
        md:text-base
      ">
        {title}
      </h3>

      <p className={`
        text-2xl
        md:text-3xl
        font-bold
        mt-3
        ${color}
      `}>
        {value}
      </p>

    </div>
  )
}

export default StatCard