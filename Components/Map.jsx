import { useEffect, useRef, useState } from "react";
import axios from "axios";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY; // Replace with your API key

const MapWithRoute = ({ originLocation, destinationLocation, getDistance }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [origin, setOrigin] = useState(originLocation);
  const [destination, setDestination] = useState(destinationLocation);
  const [routePolyline, setRoutePolyline] = useState(null);
  const [distance, setDistance] = useState(null);
  const [eta, setEta] = useState(null);

  // Load Google Maps script and initialize the map
  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=geometry`;
        script.async = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: origin, // Default: San Francisco
        zoom: 12,
      });
      setMap(mapInstance);
    };

    loadGoogleMaps();
  }, []);

  // Plot the route when the map is ready
  useEffect(() => {
    if (map) {
      plotRoute();
    }
  }, [map]);

  // Call getDistance whenever eta or distance changes
  useEffect(() => {
    if (eta !== null && distance !== null) {
      getDistance(eta, distance);
    }
  }, [eta, distance]);

  // Geocode an address to get its lat/lng
  const getLatLng = async (address) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${GOOGLE_MAPS_API_KEY}`
      );

      if (response.data.status === "OK") {
        return response.data.results[0].geometry.location;
      } else {
        console.error("Geocoding failed:", response.data.status);
        return null;
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  };

  // Plot the route between origin and destination
  const plotRoute = async () => {
    if (!origin || !destination) {
      alert("Please enter both origin and destination");
      return;
    }

    const originLatLng = origin;
    const destinationLatLng = await getLatLng(destination);

    if (!originLatLng || !destinationLatLng) {
      alert("Invalid locations. Please enter valid addresses.");
      return;
    }

    const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;

    try {
      const response = await axios.post(
        url,
        {
          origin: {
            location: {
              latLng: {
                latitude: originLatLng.lat,
                longitude: originLatLng.lng,
              },
            },
          },
          destination: {
            location: {
              latLng: {
                latitude: destinationLatLng.lat,
                longitude: destinationLatLng.lng,
              },
            },
          },
          travelMode: "DRIVE",
          routingPreference: "TRAFFIC_AWARE",
          computeAlternativeRoutes: false,
          routeModifiers: {
            avoidTolls: false,
            avoidHighways: false,
            avoidFerries: false,
          },
          languageCode: "en-US",
          units: "IMPERIAL",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": GOOGLE_MAPS_API_KEY,
            "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline",
          },
        }
      );

      const encodedPolyline = response.data.routes[0]?.polyline?.encodedPolyline;

      if (!encodedPolyline) {
        alert("No route found!");
        return;
      }

      // Decode polyline
      const decodedPath = window.google.maps.geometry.encoding.decodePath(encodedPolyline);

      // Remove old route if it exists
      if (routePolyline) {
        routePolyline.setMap(null);
      }

      // Draw new route
      const polyline = new window.google.maps.Polyline({
        path: decodedPath,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 4,
        map: map,
      });

      // Update state with ETA and distance
      setEta(response.data.routes[0].duration);
      setDistance((response.data.routes[0].distanceMeters / 1000).toFixed(1));

      // Place markers
      new window.google.maps.Marker({
        position: originLatLng,
        map: map,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          scaledSize: new window.google.maps.Size(40, 40),
        },
      });
      new window.google.maps.Marker({ position: destinationLatLng, map: map });

      // Fit map to bounds
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(originLatLng);
      bounds.extend(destinationLatLng);
      map.fitBounds(bounds);
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  return (
    <div>
      <div className="w-full h-full"></div>
      <div ref={mapRef} className="rounded-md h-[600px]" />
    </div>
  );
};

export default MapWithRoute;