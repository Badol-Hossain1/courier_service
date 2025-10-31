import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Fuse from "fuse.js";
import "leaflet/dist/leaflet.css";

// Fix Leaflet’s default icon path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const BangladeshMap = ({data}) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Fuse.js fuzzy search setup
  const fuse = new Fuse(data, {
    keys: ["district", "city", "region"],
    threshold: 0.3,
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setFilteredData(data);
    } else {
      const result = fuse.search(value);
      setFilteredData(result.map((r) => r.item));
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="w-full max-w-md p-2">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search by district or city..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <MapContainer
        center={[23.685, 90.3563]} // Bangladesh center
        zoom={7}
        className="w-full h-full"
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />

        {filteredData.map((loc, idx) => (
          <Marker key={idx} position={[loc.latitude, loc.longitude]}>
            <Popup>
              <div className="text-sm">
                <h2 className="font-bold text-lg mb-1">{loc.district}</h2>
                <p><strong>Region:</strong> {loc.region}</p>
                <p><strong>City:</strong> {loc.city}</p>
                <p>
                  <strong>Covered Areas:</strong> {loc.covered_area.join(", ")}
                </p>
                <a
                  href={loc.flowchart}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Flowchart
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
