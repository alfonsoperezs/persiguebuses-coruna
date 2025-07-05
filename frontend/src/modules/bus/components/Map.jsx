import { MapContainer, Marker, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import backend from "../../../backend";
import { useParams, useSearchParams } from 'react-router-dom';
import {Error} from '../../common'


const Map = () => {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);
    const {id} = useParams();
    const [searchParams] = useSearchParams()

    useEffect(() => {
        backend.buses.getBusPosition(id, searchParams.get('line')).then(data =>{
            setPosition(data.position);
            setError(data.error);
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

    if (error != null){
        return(
            <Error/>
        )
    }
}

export default Map;