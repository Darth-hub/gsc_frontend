import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import { useCommunityData } from "../Communitydata"; // Import the context hook

const Community_card = () => {
  const { communities } = useCommunityData(); // Fetch community data

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {communities.map((community, index) => (
        <div
          key={index}
          className="w-[30%] relative aspect-video bg-gray-700 text-black p-2 rounded shadow-lg"
        >
          {/* Image Section */}
          <div className="h-[70%] object-contain overflow-hidden">
            <img
              src={community.imgPosts[0]} // Dynamically fetching image
              className="relative -top-5 w-full h-full object-cover"
              alt={community.name}
            />
          </div>

          {/* Community Info */}
          <div className="mt-2 text-white">
            <h1 className="text-lg">{community.name}</h1>
            <p className="text-sm">{community.location}</p>
            <span className="text-xs">{community.members} members</span>
          </div>

          {/* View Details Button */}
          <div>
            <Link to={`/community/${community.name.toLowerCase().replace(/\s/g, "-")}`}>
              <button className="bg-[#277868] duration-150 ease-linear hover:scale-[1.1] text-amber-50 cursor-pointer absolute right-3 bottom-1 rounded w-[35%] p-1">
                <p className="text-center text-[0.9em]">View Details</p>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Community_card;
