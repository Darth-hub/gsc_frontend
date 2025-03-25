import React, { useEffect, useState } from "react";
import profile from "../../../Components/images/profilepic.png";
import { HashLink as Link } from "react-router-hash-link";
import eclyralogo from "../../../Components/images/eclyralogo.png";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const User_profile = () => {
    const { user } = useAuth(); // Destructure user from context

    const [color, setcolor] = useState("");

    const [pickups, setPickups] = useState([]); // Store pickup data
    const [loading, setLoading] = useState(true); // Loader
    const [error, setError] = useState(null); // Error handling
    const [sellerEmail, setSellerEmail] = useState("");



    // ✅ Set sellerEmail when user data is available
    useEffect(() => {
        if (user?.email) {
            setSellerEmail(user.email);
        }
    }, [user]); // Runs when user data changes

    // ✅ Fetch seller pickups when sellerEmail is set
    useEffect(() => {
        const fetchPickups = async () => {
            if (!sellerEmail) return; // Don't fetch if email is empty
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/getallsellerpickups/${sellerEmail}`
                );
                setPickups(response.data.data);
            } catch (err) {
                console.error("API Error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (sellerEmail) fetchPickups(); // Fetch only if email exists
    }, [sellerEmail]); // Runs when sellerEmail updates



    console.log(pickups);



    return (
        <>
            <div className="bg-[#1b2316]"><Header /></div>
            <div className=" flex justify-center gap-5 items-center h-screen bg-[#1b2316]">
                {/* Sidebar */}
                <div className="bg-[#3D8D7A] flex flex-col gap-2.5 p-8 items-center rounded-xl w-[25%] h-[90%]">
                    <div className="flex items-end gap-2.5">
                        <div>
                            <img src={profile} alt="Profile" className="w-[70px] aspect-square" />
                        </div>
                        <div className="text-xl">
                            <h3>Hi,</h3>
                            <h1>{user?.displayName || "User"}</h1>
                            <h2 className="text-sm">{user?.email || "No email found"}</h2>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="w-[90%] h-full flex flex-col items-center mt-10 p-5">
                        <h1 className="text-4xl">QUICK LINKS</h1>
                        <div className="flex flex-col items-center mt-5 gap-1 flex-1">
                            <Link smooth to="/" className="hover:scale-110 hover:font-medium">HOME</Link>
                            <Link smooth to="/scrap_rate" className="hover:scale-110 hover:font-medium">SCRAP RATE</Link>
                            <Link smooth to="/store" className="hover:scale-110 hover:font-medium">STORE</Link>
                            <Link smooth to="/community" className="hover:scale-110 hover:font-medium">JOIN COMMUNITY</Link>
                            <Link smooth to="/contact" className="hover:scale-110 hover:font-medium">CONTACT US</Link>
                            <Link smooth to="/terms&condition" className="hover:scale-110 hover:font-medium">TERMS AND CONDITIONS</Link>
                        </div>

                        {/* Logo fixed at the bottom */}
                        <div className="flex items-end scale-150 justify-center gap-4 mb-10">
                            <img src={eclyralogo} className="h-[3.5rem]" alt="Eclyra Logo" />
                            <h1 className="text-3xl">ECLYRA</h1>
                        </div>
                    </div>

                </div>

                {/* Right Section - Pickups Data */}
                <div className="bg-[#3D8D7A] flex overflow-y-scroll scrollbar-hide flex-col gap-2.5 p-8 items-center rounded-xl w-[68%] h-[90%]">
                    {loading ? (
                        <p className="text-white">Loading...</p>
                    ) : error ? (
                        <p className="text-red-500">Error: {error}</p>
                    ) : (
                        <div className="text-white flex flex-wrap gap-5">
                            {pickups.length > 0 ? (
                                pickups.map((pickup, index) => {
                                    // Determine background color based on status
                                    let statusColor = "bg-blue-400"; // Default to red for unknown status

                                    if (pickup.status == "completed") {
                                        statusColor = "bg-green-400";
                                    } else if (pickup.status == "pending") {
                                        statusColor = "bg-yellow-400";
                                    }

                                    return (
                                        <div className="w-[45%] bg-[#377212]  p-5 rounded-xl mt-5" key={index}>
                                            <p><strong>Location:</strong> {pickup.pickUpLocation}</p>
                                            <p><strong>Weight:</strong> {pickup.estimatedWeight} kg</p>
                                            <p><strong>Scheduled:</strong> {pickup.scheduledDate} at {pickup.scheduledTime}</p>
                                            {/* Apply dynamic background color */}
                                            <div className={`${statusColor} text-center rounded-lg text-black w-[100px] mt-2`}>
                                                {pickup.status}
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No pickups found.</p>
                            )}
                        </div>


                    )}
                </div>
            </div>
            <div><Footer /> </div>
        </>
    );
};

export default User_profile
