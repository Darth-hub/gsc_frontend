import { createContext } from "react";

export const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const campaigns = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/47/ae/d4/47aed4ee31728922504bdf76be62c01d.jpg",
      name: "Clean City Initiative",
      desc: "The Clean City Initiative aims to create awareness about proper waste disposal and recycling. Volunteers participate in city-wide cleanup drives, spreading knowledge about eco-friendly waste management practices. Our goal is to reduce landfill waste by 30% within a year and promote responsible waste disposal habits in communities."
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/25/68/50/256850c5cbee31cc6bfc0768906b3551.jpg",
      name: "E-Waste Recycling Drive",
      desc: "With the rising problem of electronic waste, this campaign encourages individuals and businesses to recycle old and unused electronics. Partnering with certified recyclers, we ensure that hazardous components are disposed of responsibly. Join us in making e-waste recycling a mainstream habit."
    },
    {
      id: 3,
      img: "https://i.pinimg.com/474x/46/6c/c6/466cc67c37b7435328638d2d92bfd7b8.jpg",
      name: "Green Future Project",
      desc: "The Green Future Project educates people on the importance of afforestation and sustainable living. Our campaign includes tree-planting events, workshops on composting, and community-led green initiatives. Be part of the change and help us build a greener tomorrow."
    },
    {
      id: 4,
      img: "https://i.pinimg.com/474x/51/f2/07/51f2076da09a622d0d2c1accd267c52c.jpg",
      name: "Plastic-Free Revolution",
      desc: "This campaign advocates for reducing single-use plastics and promotes alternatives like biodegradable packaging. Schools, offices, and households are encouraged to pledge against plastic pollution. With your support, we can eliminate thousands of tons of plastic waste every year."
    },
    {
      id: 5,
      img: "https://i.pinimg.com/474x/c7/30/53/c73053cd050b50da4efa50b7dd0d480b.jpg",
      name: "Community Cleanup Challenge",
      desc: "An interactive challenge that engages local communities in cleaning their neighborhoods. Participants earn rewards for collecting and recycling waste. The campaign fosters teamwork and encourages a cleaner environment while making cleanup activities fun and rewarding."
    }
  ];

  return (
    <CampaignContext.Provider value={{ campaigns }}>
      {children}
    </CampaignContext.Provider>
  );
};
