import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import icon from '../../assets/cargo-ship.png';

const CreateRoutineMachineLayer = (props) => {
    console.log(props)
    var coords = [L.latLng(props.end[0], props.end[1])]

    let shipIcon = new L.Icon({
        iconUrl: icon,
        iconSize: [25, 50],
        iconAnchor: [-16, 20],
    });

    var TooltipClass = {
        'className': 'class-tooltip'
      }

    const instance = L.Routing.control({ 
        waypoints: coords,
        createMarker: function (i, wp, nWps) {
            if (i === 0) {
                return L.marker(wp.latLng,{icon: shipIcon}).bindTooltip(props.ship.vesselName,{permanent: true,direction: "left",...TooltipClass}) //`Current vessel location LatLng : (${wp.latLng.lat},${wp.latLng.lng})`
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