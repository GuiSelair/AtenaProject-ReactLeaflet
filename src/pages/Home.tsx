import { MapContainer, TileLayer } from "react-leaflet"
import Leaflet from "leaflet";

import "../styles/Home.css"
import "leaflet/dist/leaflet.css";

import MapContent from "../components/MapContent";

function Home() {
  return (
    <div className="Home">
      <div className="Content">
        <MapContainer 
          center={[51.505, -0.09]} 
          zoom={13} 
          style={{ height: 800 }}
          id="leaflet-map"
          ref={console.log}
          className="Map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapContent />
        </MapContainer>
      </div>
    </div>
  )
}

export default Home
