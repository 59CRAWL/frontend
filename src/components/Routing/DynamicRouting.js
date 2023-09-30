import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import icon from '../../assets/cargo-ship.png';
//import "./JourneyRoute.css";
import Ship from "@components/ships";
import { useContext } from "react";
import { Message_data } from "src/context/shipContext";

var coords = [L.latLng(1.255822, 103.788229),
L.latLng(1.269822, 103.780229)]


const CreateRoutineMachineLayer = () => {
    let shipIcon = new L.Icon({
        iconUrl: icon,
        iconSize: [25, 50],
        iconAnchor: [-16, 20],
    });

    var TooltipClass = {
        'className': 'class-tooltip'
      }

    const instance = L.Routing.control({ 
        waypoints: coords
            // Previous properly aligned way points
            // L.latLng(1.0703, 104.2192),
            // L.latLng(0.9885398340769811,103.85805624764262),
            // L.latLng(1.0703, 103.7567)
            //New way points
            // L.latLng(1.2230, 103.8542),
            // L.latLng(1.240111, 103.830933),
            // L.latLng(1.2065,103.7709),
            //Sent by mani na
            // L.latLng(1.2875422104568421, 103.66667134765369),
            // L.latLng(1.247449, 103.596),
            // L.latLng(1.2160194097204378, 103.64611489779371),
        ,
        createMarker: function (i, wp, nWps) {

            if (i === 0) {
                return L.circleMarker(wp.latLng,{fillColor: "blue",color: "blue",fillOpacity: 1}).bindTooltip("Journey Starting Point",{permanent: true,direction: "right",...TooltipClass})
            } else if (i === 1) {
                return L.marker(wp.latLng,{icon: shipIcon}).bindTooltip(`7.1 KM`,{permanent: true,direction: "left",...TooltipClass}) //`Current vessel location LatLng : (${wp.latLng.lat},${wp.latLng.lng})`
            } else if (i === 2) {
                return L.circleMarker(wp.latLng,{fillColor: "green",color: "green",fillOpacity: 0.8}).bindTooltip("Journey Ending Point 9.8 KM",{permanent: true,direction: "right",...TooltipClass})
            }
        },

        lineOptions: {
            missingRouteStyles: [{ color: "#6FA1EC", weight: 6 }],
            styles: [{ color: "#6FA1EC", weight: 6 }],
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