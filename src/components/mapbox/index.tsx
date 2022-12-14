import React, {memo, useState} from "react";
import {MAP_BOX_TOKEN} from "../../constants";
import ReactMapGL, {FullscreenControl, Marker, NavigationControl} from "react-map-gl";

type MapBoxProps = {}

const MapBox = ({}: MapBoxProps) => {

    const [lng, setLng] = useState(4.0659983282091);
    const [lat, setLat] = useState(9.736586672708617);
    const [zoom, setZoom] = useState(8);

    const [viewport, setViewport] = React.useState({
        longitude: lng,
        latitude: lat,
        zoom: zoom,
        mapboxApiAccessToken: MAP_BOX_TOKEN
    });

    return (
        <>
            <ReactMapGL mapStyle="mapbox://styles/geekles007/ckpgybhd11utk17qkavbs7adw" {...viewport} height="100%"  width={"100%"} onViewportChange={setViewport}>
                <Marker longitude={4.0659983282091} latitude={9.736586672708617}>
                    <div className="animate-ping w-3 h-3 bg-yellow-400 rounded-full"></div>
                </Marker>
                <FullscreenControl className={"absolute left-4 top-4"}/>
                <NavigationControl className={"absolute left-4 top-4"}/>
            </ReactMapGL>
        </>
    );

}

export default memo(MapBox);
