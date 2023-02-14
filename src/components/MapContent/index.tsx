import { Marker, Popup, useMap, useMapEvents, LayersControl, LayerGroup, CircleMarker, FeatureGroup } from "react-leaflet"
import { useEffect } from "react"
import Leaflet from "leaflet";

export default function MapContent() {
  const mapInstance = useMap()
  useMapEvents({
    popupopen: (e) => console.log(e)
  })

  useEffect(() => {
    mapInstance.setView([-29.6864242,-53.8143911], 13)

    setTimeout(() => {
      Leaflet.marker([-29.6837553,-53.8137447]).addTo(mapInstance);
    }, 5000)
  }, [mapInstance])



  return (
    <>
      <Marker
        icon={Leaflet.icon({
          iconUrl: 'http://www.github.com/guiselair.png',
          iconSize: [30, 30],
        })} 
        position={[-29.6864242,-53.8143911]}
        eventHandlers={{
          click: () => console.log("CLICOU")
        }}
      >
        <Popup>Você mora aqui</Popup>
      </Marker>

      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Supermercados de Santa Maria">
          <FeatureGroup>
            <CircleMarker center={[-29.7043853,-53.8204057]} radius={20}>
              <Popup>Supermercado Beltrame Matriz</Popup>
            </CircleMarker>
            <CircleMarker center={[-29.6848373,-53.7972317]} radius={20}>
              <Popup>Supermercado Peruzzo Filial 01</Popup>
            </CircleMarker>
            <CircleMarker center={[-29.6888703,-53.8325837]} radius={20}>
              <Popup>Supermercado Peruzzo Filial 02</Popup>
            </CircleMarker>
          </FeatureGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Supermercado Carrefour">
          <FeatureGroup>
            <CircleMarker center={[-29.6837362,-53.8091315]} radius={20} pathOptions={{ color: 'green', fillColor: 'green' }}>
              <Popup>Hipermercado Carrefour</Popup>
            </CircleMarker>
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>

      {/* Sobrepondo marker */}
      <Marker 
        position={[-29.6837599,-53.8091315]}
        zIndexOffset={2}
      >
        <Popup>Marker 01</Popup>
      </Marker>

      <Marker 
        position={[-29.6837362,-53.8091315]}
      >
        <Popup>Marker 02</Popup>
      </Marker>
    </>
  )
}
