import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import backend from "../../../backend"


const Map = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        backend.buses.getBusPosition(393, 11).then(data =>{
            console.log(data.position);
            setPosition(data.position);
        });
    }, []);

    

    if (position != null){
        return (
            <MapContainer center={[position.pos_y, position.pos_x]} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[position.pos_y, position.pos_x]}/>
            </MapContainer>
        );
    }
}

export default Map;