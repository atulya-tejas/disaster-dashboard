import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet"

import { trainingData } from "../data/trainingData"

const getColor = (count) => {
  if (count > 250) return "red"
  if (count > 150) return "orange"
  if (count > 80) return "yellow"
  return "green"
}

const IndiaMap = () => {
  return (
    <div className="glass rounded-2xl overflow-hidden">

      <div className="p-4 border-b border-slate-700">
        <h2 className="text-xl font-bold">
          Trainings Map
        </h2>
      </div>

      <MapContainer
        center={[22.5937, 78.9629]}
        zoom={5}
        style={{
          height: "500px",
          width: "100%"
        }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {trainingData.map((item, index) => (
          <CircleMarker
            key={index}
            center={[item.lat, item.lng]}
            radius={20}
            pathOptions={{
              color: getColor(item.trainings),
              fillColor: getColor(item.trainings),
              fillOpacity: 0.8
            }}
          >

            <Popup>
              <div className="text-black">

                <h2 className="font-bold text-lg">
                  {item.city}
                </h2>

                <p>
                  Trainings: {item.trainings}
                </p>

                <p>
                  Participants: {item.participants}
                </p>

              </div>
            </Popup>

          </CircleMarker>
        ))}

      </MapContainer>

    </div>
  )
}

export default IndiaMap