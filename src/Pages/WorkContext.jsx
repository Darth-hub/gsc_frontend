import { createContext, useState } from "react";

// Create context
const WorkContext = createContext(null);

// Create provider component
const WorkProvider = ({ children }) => {
    const [work] = useState([
        {
            "title": "Schedule a Pickup",
            "description": "Eclyra makes recycling effortless by allowing users to schedule a scrap pickup at their convenience. Simply visit our platform, select the type of waste you want to recycle—be it e-waste, plastic, metal, or paper—and choose a date and time that suits you. Our system ensures that every request is handled efficiently, connecting you with trusted collection partners. To further streamline the process, we provide real-time tracking, so you know exactly when our team will arrive. By scheduling a pickup, you not only get rid of unwanted waste hassle-free but also contribute to a greener planet with just a few clicks.",
            "image": "/images/Schedule2.png",
        },
        {
            "title": "Smart Sorting & Fair Pricing",
            "description": "Once your scrap is collected, it undergoes a thorough sorting process to ensure each material is categorized correctly. Our smart sorting system separates recyclable materials efficiently, ensuring they go to the right processing units. Pricing is transparent, based on real-time market rates, so you get the best value for your recyclables. Our goal is to empower individuals and businesses by providing a fair and rewarding recycling experience. With Eclyra, waste is not just disposed of—it's transformed into economic opportunity.",
            "image": "/images/Pickup2.png",
        },
        {
            "title": "Eco-Friendly Processing",
            "description": "The sorted materials are sent to certified recycling partners who ensure responsible processing. E-waste is safely dismantled, plastics are repurposed, and metals are refined for reuse. This process minimizes landfill waste, conserves natural resources, and reduces pollution. By choosing Eclyra, you actively support a circular economy, where discarded materials get a second life. Our commitment to sustainability ensures that every piece of scrap is utilized efficiently, creating a cleaner and more eco-conscious world.",
            "image": "/images/factory2.png",
        },
    ]);

    // Provide the correct value
    const value = {
        work
    };

    return (
        <WorkContext.Provider value={value}>
            {children}
        </WorkContext.Provider>
    );
};

// Export both the provider and context
export { WorkProvider, WorkContext };
