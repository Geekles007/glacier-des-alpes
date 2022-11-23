import React, {memo, useState} from "react";
import {MAP_BOX_TOKEN} from "../../constants";
import ReactMapGL, {Marker} from "react-map-gl";

type MapBoxProps = {}

const MapBox = ({}: MapBoxProps) => {

    const [lng, setLng] = useState(4.0659983282091);
    const [lat, setLat] = useState(9.736586672708617);
    const [zoom, setZoom] = useState(6);

    const [viewport, setViewport] = React.useState({
        longitude: lng,
        latitude: lat,
        zoom: zoom,
        mapboxApiAccessToken: MAP_BOX_TOKEN
    });

    return (
        <>
            <ReactMapGL mapStyle="mapbox://styles/geekles007/ckpgybhd11utk17qkavbs7adw" {...viewport} height="100%" onViewportChange={setViewport}>
                <Marker longitude={4.0659983282091} latitude={9.736586672708617} />
            </ReactMapGL>
        </>
    );

}

export default memo(MapBox);
