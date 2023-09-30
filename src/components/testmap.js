import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

class SeaRouteMap extends Component {
  componentDidMount() {
    const { startPoint, endPoint } = this.props;

    // Create a Leaflet map
    const map = L.map('map').setView([0, 0], 2); // Center and zoom level

    // Add a base tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Create markers for start and end points
    const startMarker = L.marker(startPoint).addTo(map);
    const endMarker = L.marker(endPoint).addTo(map);

    // Create the routing control
    L.Routing.control({
      waypoints: [
        L.latLng(startPoint),
        L.latLng(endPoint),
      ],
    }).addTo(map);
  }

  render() {
    return (
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    );
  }
}

export default SeaRouteMap;