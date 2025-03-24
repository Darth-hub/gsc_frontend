import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { HashLink as Link } from "react-router-hash-link";
import { ToastContainer, toast } from "react-toastify";
import { useCommunityData } from "../Communitydata"; // Import context hook
import { useParams } from "react-router-dom"; // Get dynamic community ID
import { CiLocationOn } from "react-icons/ci";
import coin from "../../../Components/images/coin.png";

const Join_community = () => {
  const { communities } = useCommunityData(); // Get community data
  const { communityName } = useParams(); // Get the community name from the URL params
  const [isRegistered, setIsRegistered] = useState(false); // State for registration
  const [activeTab, setActiveTab] = useState("about"); // State for tab selection

  // Find the community based on the name
  const community = communities.find(
    (comm) => comm.name.toLowerCase().replace(/\s/g, "-") === communityName
  );

  if (!community) {
    return <div className="text-white p-10 text-center">Community Not Found</div>;
  }

  const handleRegister = () => {
    setIsRegistered((prev) => !prev); // Toggle state
    toast(isRegistered ? "Unregistered!" : "Registered!"); // Show toast message
  };

  return (
    <>
      <div className="text-white">
        {/* Header */}
        <div className="p-8 text-5xl flex gap-4">
          <Link smooth to="/community">
            <i className="ri-arrow-left-line"></i>
          </Link>
          <h1>JOIN COMMUNITY</h1>
        </div>

        {/* Community Details */}
        <div className="w-[100vw] h-[280px] bg-[#1D4532] p-5 px-15 flex gap-15">
          <div>
            <img
              src={community.imgPosts}
              alt={community.name}
              className="object-contain h-[220px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[#55B000] text-3xl">{community.name}</h1>
              <h3>
                <p className="text-[0.95em] flex gap-3 items-center">
                  <p className="text-emerald-300 text-lg">Our Vision :</p>
                  {community.vision}
                </p>
              </h3>
            </div>
            <div>
              <div className="flex gap-1 items-center">
                <div className="text-[1.35em]">
                  <CiLocationOn />
                </div>
                <div>
                  <p>{community.location}</p>
                </div>
              </div>
              <p>Registered: {community.members}</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-lg text-amber-300">Participate and Earn : <img src={coin} alt="" className="h-[2.5em]" /> 500 </div>
            </div>
            <div className="flex gap-8">
              <button className="bg-white text-[#277868] rounded-xl px-2 py-1 font-semibold text-[0.80em]">
                <Link smooth to="/CommunityChat">Community Chat</Link>
              </button>
              <button className="bg-white text-[#277868] rounded-xl px-2 py-1 font-semibold text-[0.80em]">
                Reviews
              </button>
              <button
                className={`rounded-xl px-4 py-1 font-semibold text-[0.80em] ${
                  isRegistered
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#277868] text-white cursor-pointer"
                }`}
                onClick={handleRegister}
              >
                {isRegistered ? "Registered" : "Register"}
              </button>
              <ToastContainer className="text-green" />
            </div>
          </div>
        </div>

        {/* Tabs: About / Posts */}
        <div className="flex flex-col items-center">
          <div className="bg-white mt-4 text-black h-[40px] px-30 items-center flex gap-10 w-[99%]">
            <button
              className={`px-4 py-2 cursor-pointer font-bold ${
                activeTab === "about" ? "text-green-600" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("about")}
            >
              ABOUT
            </button>
            <button
              className={`px-4 cursor-pointer py-2 font-bold ${
                activeTab === "posts" ? "text-green-600" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("posts")}
            >
              POSTS
            </button>
          </div>

          {/* Content Rendering Based on Active Tab */}
          <div className="w-[99%] p-4 text-white">
            {activeTab === "about" && (
              <p className="p-4 bg-gray-800 rounded-lg">
                E-waste management has become a pressing issue in Uttar Pradesh, particularly in urban areas like Prayagraj, Varanasi, and Lucknow. Several communities have come forward to tackle this challenge through awareness, recycling initiatives, and responsible disposal programs.

                Organizations such as E-Waste Warriors and TechTrash Solution in Prayagraj focus on collection drives and repair workshops to minimize electronic waste. Meanwhile, GreenTech Recyclers in Varanasi and Future Earth Initiative in Kanpur promote innovative recycling techniques and reuse programs.

                Many of these groups collaborate with local government bodies, businesses, and schools to set up e-waste drop-off centers and organize campaigns like corporate e-waste recycling, battery disposal drives, and tech donation programs. Initiatives like Ecycle Movement in Gorakhpur and Zero E-Waste UP in Allahabad are pioneering efforts to transform discarded electronics into educational tools for students.

                Through these collective efforts, Uttar Pradesh is moving towards a more sustainable and environmentally friendly future.
              </p>
            )}

            {activeTab === "posts" && (
              <div className="flex flex-wrap justify-around gap-4">
                {[...Array(8)].map((_, index) => (
                  <img
                    key={index}
                    src={community.imgPosts}
                    className="w-[20vw] aspect-square object-cover rounded-lg"
                    alt={`Community Post ${index}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Join_community;
