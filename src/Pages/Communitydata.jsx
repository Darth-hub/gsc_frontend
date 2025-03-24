import { createContext, useContext, useState } from "react";
import community1 from "../../Components/images/community1.jpg";
import community2 from "../../Components/images/community2.jpg";
import community3 from "../../Components/images/community3.jpg";
import community4 from "../../Components/images/community4.jpg";
import community5 from "../../Components/images/community5.jpg";
import community6 from "../../Components/images/community6.jpg";
import community7 from "../../Components/images/community7.jpg";
import community8 from "../../Components/images/community8.jpg";
import community9 from "../../Components/images/community9.jpg";
import community10 from "../../Components/images/community10.jpg";

const CommunityDataContext = createContext();

export const CommunityDataProvider = ({ children }) => {
  const [communities] = useState([
    {
      name: "E-Waste Warriors",
      location: "Prayagraj, Uttar Pradesh",
      recentCampaigns: ["E-Waste Collection Drive 2025", "Recycle Awareness Program"],
      members: 1200,
      imgPosts: [community1],
      about: "A leading community in Prayagraj focusing on e-waste collection, proper disposal, and recycling. It organizes awareness programs and collaborates with local authorities for sustainable waste management.",
      vision: "To create a sustainable e-waste disposal system and promote responsible recycling.",
    },
    {
      name: "GreenTech Recyclers",
      location: "Varanasi, Uttar Pradesh",
      recentCampaigns: ["Tech Device Reuse Initiative", "Electronic Waste Sorting Workshop"],
      members: 950,
      imgPosts: [community2],
      about: "An innovative group working to develop eco-friendly recycling techniques, ensuring minimal environmental impact from e-waste in the Varanasi region.",
      vision: "Innovating sustainable e-waste recycling methods to minimize environmental impact.",
    },
    {
      name: "EcoSmart Disposal",
      location: "Prayagraj, Uttar Pradesh",
      recentCampaigns: ["Battery & Charger Recycling Drive", "Tech for Trees Campaign"],
      members: 780,
      imgPosts: [community3],
      about: "A community dedicated to responsible disposal of batteries, chargers, and obsolete gadgets, making Prayagraj cleaner and greener.",
      vision: "To ensure proper disposal of electronics and reduce e-waste pollution.",
    },
    {
      name: "Future Earth Initiative",
      location: "Mirzapur, Uttar Pradesh",
      recentCampaigns: ["Smartphone Recycling Awareness", "Old Laptop Donation Drive"],
      members: 1100,
      imgPosts: [community4],
      about: "Future Earth Initiative aims to create a circular economy by promoting e-waste recycling, donations, and reuse practices.",
      vision: "Creating a circular economy for electronic waste through reuse and recycling.",
    },
    {
      name: "TechTrash Solution",
      location: "Prayagraj, Uttar Pradesh",
      recentCampaigns: ["Local Repair & Reuse Campaign", "Electronics Donation Fair"],
      members: 650,
      imgPosts: [community5],
      about: "A volunteer-driven organization helping local communities repair, recycle, and donate old electronics rather than discarding them.",
      vision: "Making e-waste management accessible to local communities through workshops and drives.",
    },
    {
      name: "Zero E-Waste UP",
      location: "Varanasi, Uttar Pradesh",
      recentCampaigns: ["Zero Landfill Mission", "Digital Detox for a Greener Future"],
      members: 890,
      imgPosts: [community6],
      about: "Zero E-Waste UP is dedicated to achieving 100% e-waste recycling and minimizing landfill contribution across the state.",
      vision: "Aiming for 100% e-waste recycling and zero landfill contribution in Uttar Pradesh.",
    },
    {
      name: "Ecycle Movement",
      location: "Kaushambi, Uttar Pradesh",
      recentCampaigns: ["Smartphones to Schools", "E-Waste Drop-Off Centers Launch"],
      members: 720,
      imgPosts: [community7],
      about: "This initiative repurposes old electronics for educational purposes, ensuring discarded tech benefits students in need.",
      vision: "Transforming discarded electronics into opportunities for education and innovation.",
    },
    {
      name: "Recycle Tech Hub",
      location: "Chitrakoot, Uttar Pradesh",
      recentCampaigns: ["Safe Battery Disposal Drive", "Corporate E-Waste Recycling"],
      members: 510,
      imgPosts: [community8],
      about: "Recycle Tech Hub partners with businesses and individuals to promote safe battery and corporate e-waste disposal.",
      vision: "Encouraging responsible e-waste disposal by partnering with corporations and individuals.",
    },
    {
      name: "Green Circuit Initiative",
      location: "Bhadohi, Uttar Pradesh",
      recentCampaigns: ["Repair & Reuse Fair", "Tech for Good Donation Campaign"],
      members: 600,
      imgPosts: [community9],
      about: "A youth-led movement educating people on sustainable electronics usage, repairs, and safe disposal practices.",
      vision: "Educating people about sustainable electronics use and repair culture.",
    },
    
  ]);

  return (
    <CommunityDataContext.Provider value={{ communities }}>
      {children}
    </CommunityDataContext.Provider>
  );
};

export const useCommunityData = () => useContext(CommunityDataContext);
