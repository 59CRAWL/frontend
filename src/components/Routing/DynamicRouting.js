import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const CreateRoutineMachineLayer = (props) => {
    var coords = [L.latLng(props.end[0], props.end[1])]

    // FIXME: shipIcon not loading
    let shipIcon = new L.Icon({
        iconUrl: 'leaflet/images/cargo-ship.png',
        iconSize: [25, 50],
        iconAnchor: [8, 10],
    });

    const instance = L.Routing.control({
        waypoints: coords,
        createMarker: function (i, wp, nWps) {
            if (i === 0) {
                return L.marker(wp.latLng, {icon: shipIcon}).bindTooltip(props.ship.vesselName, { permanent: true, direction: "left" })
            }
        },

        lineOptions: {
            // missingRouteStyles: [{ color: "#6FA1EC", weight: 6 }],
            styles: [{ color: "#6FA1EC", weight: 0 }],
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
    });
    return instance;
};

const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;