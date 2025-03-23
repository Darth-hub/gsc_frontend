import { useEffect, useRef, useState } from "react";
import axios from "axios";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY; // Replace with your API key

const MultiMap = ({ locations }) => {
  const mapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(userLocation);
      },
      (error) => {
        console.error("Geolocation error:", error.message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  useEffect(() => {
    if (currentLocation) {
      loadGoogleMaps();
    }
  }, [currentLocation]);

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
    if (!currentLocation) return;

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: currentLocation,
      zoom: 12,
    });

    new window.google.maps.Marker({
      position: currentLocation,
      map: mapInstance,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        scaledSize: new window.google.maps.Size(40, 40),
      },
    });

    setMap(mapInstance);
  };

  useEffect(() => {
    if (map) {
      plotRoute();
    }
  }, [map]);

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

  const plotRoute = async () => {
    if (!map || !locations.length) return;

    try {
      const locationPromises = locations.map((location) => getLatLng(location));
      const resolvedLocations = await Promise.all(locationPromises);
      const validLocations = resolvedLocations.filter((loc) => loc !== null);

      validLocations.forEach((latLng) => {
        new window.google.maps.Marker({
          position: latLng,
          map: map,
        });
      });

      const bounds = new window.google.maps.LatLngBounds();
      validLocations.forEach((latLng) => bounds.extend(latLng));

      map.fitBounds(bounds);
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  return (
    <div>
      <div ref={mapRef} className="rounded-md w-full h-[60vh]" />
    </div>
  );
};

export default MultiMap;
