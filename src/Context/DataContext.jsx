import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {

    const Industrydata = [
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
          industry_image: "https://example.com/green-earth-recycling.jpg"
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
      


  return <DataContext.Provider value={{ Industrydata }}>{props.children}</DataContext.Provider>;
};


