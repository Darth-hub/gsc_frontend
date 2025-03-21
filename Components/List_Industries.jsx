import { IconPencil, IconTrash } from '@tabler/icons-react';
import IndustryCard from './IndustryCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

    const data = [
        {
          id:1,
          industry_name: "GreenCycle Solutions",
          industry_description: "A leading electronic waste recycling company that specializes in the safe disposal and refurbishment of old electronics, reducing landfill waste and promoting sustainability.",
          industry_location: "San Jose, California, USA",
          industry_image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        },
        {
            id:2,
          industry_name: "EcoPlast Recyclers",
          industry_description: "A plastic recycling firm focused on converting post-consumer plastic waste into reusable raw materials for the packaging and textile industries.",
          industry_location: "Berlin, Germany",
          industry_image: "https://images.unsplash.com/photo-1584679109591-6066ce34b8d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        },
        {
            id:3,
          industry_name: "Metal Renew Ltd.",
          industry_description: "A scrap metal recycling plant that processes and recycles ferrous and non-ferrous metals, reducing the demand for new metal extraction and minimizing environmental impact.",
          industry_location: "Mumbai, India",
          industry_image: "https://images.unsplash.com/photo-1558882264-54653803c41c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        },
        {
            id:4,
          industry_name: "BioWaste Converters",
          industry_description: "An organic waste recycling company that turns food and agricultural waste into biofuel, compost, and renewable energy solutions.",
          industry_location: "São Paulo, Brazil",
          industry_image: "https://images.unsplash.com/photo-1604673462110-b223fbe39a13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        },
        {
            id:5,
          industry_name: "PaperCycle Industries",
          industry_description: "A paper recycling enterprise that collects and processes waste paper to produce eco-friendly paper products, reducing deforestation and carbon emissions.",
          industry_location: "London, United Kingdom",
          industry_image: "https://images.unsplash.com/photo-1527515637460-3c7b67cb66b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        },
        {
            id:6,
          industry_name: "Textile ReNew",
          industry_description: "A sustainable textile recycling company that repurposes used fabrics and clothing into new garments and industrial materials.",
          industry_location: "Shanghai, China",
          industry_image: "https://images.unsplash.com/photo-1574539473171-f3c43dc23cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        },
        {
            id:7,
          industry_name: "GlassEco Refineries",
          industry_description: "A glass recycling firm that transforms used glass bottles and containers into new glass products, reducing the need for raw materials and energy consumption.",
          industry_location: "Sydney, Australia",
          industry_image: "https://images.unsplash.com/photo-1590005685571-6630a9ec75b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        }
      ];
      
      

const jobColors = {
  engineer: 'bg-blue-100 text-blue-800',
  manager: 'bg-cyan-100 text-cyan-800',
  designer: 'bg-pink-100 text-pink-800',
};
      // const response = await axios.post(
      //   url,
      //   {
      //     origin: {
      //       location: {
      //         latLng: {
      //           latitude: originLatLng.lat,
      //           longitude: originLatLng.lng,
      //         },
      //       },
      //     },
      //     destination: {
      //       location: {
      //         latLng: {
      //           latitude: destinationLatLng.lat,
      //           longitude: destinationLatLng.lng,
      //         },
      //       },
      //     },
      //     travelMode: "DRIVE",
      //     routingPreference: "TRAFFIC_AWARE",
      //     computeAlternativeRoutes: false,
      //     routeModifiers: {
      //       avoidTolls: false,
      //       avoidHighways: false,
      //       avoidFerries: false,
      //     },
      //     languageCode: "en-US",
      //     units: "IMPERIAL",
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       "X-Goog-Api-Key": GOOGLE_MAPS_API_KEY,
      //       "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline",
      //     },
      //   }
      // );

      // const encodedPolyline = response.data.routes[0]?.polyline?.encodedPolyline;

      // if (!encodedPolyline) {
      //   alert("No route found!");
      //   return;
      // }

      // Decode polyline
      // const decodedPath = window.google.maps.geometry.encoding.decodePath(encodedPolyline);

      // Remove old route if it exists
      // if (routePolyline) {
      //   routePolyline.setMap(null);
      // }

      // Draw new route
      // const polyline = new window.google.maps.Polyline({
      //   path: decodedPath,
      //   geodesic: true,
      //   strokeColor: "#FF0000",
      //   strokeOpacity: 1.0,
      //   strokeWeight: 4,
      //   map: map,
      // });

    // const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;


const List_Industies = () => {
  
  function openMap(e){
    const item = data.find((pickup) => pickup.id == e.target.getAttribute('datakey'))
    locationGetter(item.location,item)
  }

  return (
    <div className="w-full bg-[#1B2316] rounded-xl">


      <table className="w-full">
        <tbody>
          {data.map((item) => (
            <tr onClick={openMap} key={item.id} datakey={item.id} className="flex flex-col h-fit w-[10] rounded-xl  border-b hover:bg-green-500">
              <td datakey={item.id} className="p-2 flex items-center gap-3">
                <img datakey={item.id} src={item.avatar} alt="avatar" className="w-15 h-15 rounded-full" />
                <span datakey={item.id} className="text-xl font-medium">{item.name}</span>
              </td>
              <td datakey={item.id} className="p-3 flex item-center gap-3 flex items-baseline">  
                <img datakey={item.id} src="../Components/images/map_icon.png" width="15" height="15"/>    
                <span datakey={item.id} className="text-sm font-medium">{item.location}</span>
              </td>
              <td datakey={item.id} className="p-3 flex item-center gap-3 flex items-baseline">  
                <img datakey={item.id} src="../Components/images/telephone.png" width="15" height="15"/>    
                <span datakey={item.id} className="text-sm font-medium">{item.phone}</span>
              </td>
              <td datakey={item.id} className="p-3 flex item-center gap-3 flex items-baseline">
              <img datakey={item.id} src="../Components/images/garbage.png" width="15" height="15"/>    
              <span datakey={item.id} className="text-sm font-medium">{item.estimated_Weight} kg (expected by user)</span>
              </td>
              <td datakey={item.id} className="p-3 flex justify-between">
                <button datakey={item.id} className="text-blue-600 hover:underline text-sm">{item.email}</button>
                <button datakey={item.id} className="p-2 text-red-600 hover:text-red-800">
                  <IconTrash size={16} stroke={1.5} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List_Industies