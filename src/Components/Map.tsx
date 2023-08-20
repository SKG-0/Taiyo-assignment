import axios from "axios";
import { useQuery } from "react-query";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../App.css";
import "leaflet/dist/leaflet.css";

const Map = () => {
  //fetching maps data from the API using axios and useQuery
  function useMap() {
    return useQuery({
      queryKey: ["Maps"],
      queryFn: async () => {
        const { data } = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        return data;
      },
    });
  }
  const { data } = useMap();
  return (
    <div className="my-2 mx-2">
      <div>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={3}
          scrollWheelZoom={false}
          style={{ height: 500 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data?.map((country: any, i: any) => (
            //marking the pointers according to country
            <Marker
              key={i}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup
                position={[country.countryInfo.lat, country.countryInfo.long]}
              >
                <div>
                  <h2>{"Country : " + country.country}</h2>
                  <p>{"Total Caeses : " + country.cases}</p>
                  <p>{"Total Recovered : " + country.recovered}</p>
                  <p>{"Total Deaths : " + country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
