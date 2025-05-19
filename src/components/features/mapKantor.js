import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const KantorMap = () => {
  const position = [1.3157375975309686, 124.91219059557814];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h3 className="text-lg md:text-4xl font-semibold mb-6 text-center text-gray-800">
        Lokasi Kantor Kami
      </h3>
      <div className="w-full min-h-[180px] h-[220px] md:h-[280px] lg:h-[320px] rounded-xl overflow-hidden border border-gray-300 shadow-lg">
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Dinas Penanaman Modal dan PTSP</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default KantorMap;
