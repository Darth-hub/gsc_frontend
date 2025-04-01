import { createContext, useState } from "react";
const BlogContext = createContext(null);
const BlogProvider = ({ children }) => {

    const [blogs] = useState([
      {
        "id": 1,
        "category": "Waste Renewal",
        "title": "The Future of Waste Renewal: Turning Trash into Treasure",
        "description": " Waste renewal is an advanced process of transforming discarded materials into reusable resources, significantly reducing landfill waste and environmental pollution. Unlike traditional waste disposal methods, waste renewal focuses on innovative technologies like pyrolysis and anaerobic digestion, which convert waste into energy and useful byproducts.Pyrolysis breaks down plastic waste into fuel, offering a sustainable alternative to fossil fuels. Anaerobic digestion, on the other hand, processes organic waste into biogas, a renewable energy source that can power homes and industries. These technologies play a crucial role in sustainable waste management, promoting a circular economy where materials are continuously repurposed instead of discarded.Industries are investing in waste renewal solutions to reduce their ecological footprint and create new business opportunities. Government policies and environmental regulations are also encouraging companies to adopt eco-friendly waste disposal techniques. Community participation is another critical factor, as local waste collection initiatives and awareness campaigns help promote responsible disposal and recycling habits.By adopting waste renewal practices, we can reduce the strain on natural resources, cut down carbon emissions, and create a cleaner environment. Future advancements in waste-to-energy technologies and material recovery systems will further enhance the efficiency of waste renewal, making it a vital component of global sustainability efforts.",
        "image": "../../public/images/Renewal.png",
        "author": {
          "name": "Ayush Ranjan",
          "date": "10 Oct 2023",
          "avatar": ""
        }
      },
      {
        "id": 2,
        "category": "Recycling",
        "title": "5 Simple Steps to Start Recycling at Home",
        "description": "5 Simple Steps to Start Recycling at Home Recycling is one of the easiest ways to contribute to a healthier environment. By reducing waste and reusing materials, we can conserve resources and decrease pollution. If you’re new to recycling, don’t worry! Here are five simple steps to help you start recycling at home effectively. The first step in starting a recycling routine is knowing what materials can be recycled. While recycling rules vary by location, common recyclable materials include Paper and Cardboard (newspapers, magazines, office paper, cereal boxes), Plastics (bottles, containers, jugs with recycling symbols #1 and #2), Glass (jars and bottles, preferably rinsed), Metals (aluminum cans, tin cans, and certain foil products), and Electronics (batteries, old phones, chargers—often collected separately). Check with your local waste management facility to ensure you are following the correct guidelines. Once you know what can be recycled, designate specific bins for different types of waste. A simple three-bin system can include one for recyclables (paper, plastic, glass, and metal), one for general waste, and one for compostable items (food scraps, biodegradable waste). Label your bins clearly to avoid confusion and place them in accessible locations such as the kitchen, garage, or backyard. To ensure that your recyclables are processed properly, rinse out food containers, bottles, and cans before placing them in the bin. Contaminated recyclables (such as greasy pizza boxes) can lead to entire batches being rejected at recycling centers. Also, remove bottle caps, and flatten boxes to save space. Recycling is essential, but reducing waste and reusing items is even better. Consider these tips to minimize waste: Use reusable bags, bottles, and containers instead of single-use plastic, repurpose glass jars for storage instead of discarding them, donate old clothes and furniture rather than throwing them away, and opt for digital options (e.g., e-bills and emails instead of paper mail). By reducing your waste first, you decrease the overall need for recycling and landfill space. Making recycling a habit takes time, but consistency is key. Encourage your family members to follow the system and educate them on the importance of recycling. If you have children, make recycling fun by turning it into a game or challenge. You can also take recycling efforts beyond your home by supporting local recycling programs, joining community clean-up drives, and spreading awareness on social media. Starting a recycling routine at home is simple when you follow these five steps. By understanding what can be recycled, setting up a system, cleaning and sorting materials, reducing waste, and staying consistent, you can make a meaningful impact on the environment. Small actions add up—so start today and help create a cleaner, greener planet for future generations!",
        "image": "/images/recycling_tips.png",
        "author": {
          "name": "Rohit Khallar",
          "date": "15 Sep 2023",
          "avatar": ""

        }
      },
      {
        "id": 3,
        "category": "E-Waste",
        "title": "The Hidden Dangers of E-Waste and How to Dispose of It Safely",
        "description": "The Hidden Dangers of E-Waste and How to Dispose of It Safely Electronic waste, or e-waste, is one of the fastest-growing waste streams in the world, posing significant environmental and health risks. With the rapid advancement of technology, devices such as smartphones, laptops, and televisions quickly become obsolete, leading to an increase in discarded electronics. The hidden dangers of e-waste lie in the toxic materials it contains, including lead, mercury, cadmium, and brominated flame retardants, which can leach into soil and water if not disposed of properly. These hazardous substances can cause severe health issues, such as respiratory problems, kidney damage, and neurological disorders, especially when e-waste is dumped in landfills or incinerated. To dispose of e-waste safely, individuals should follow best practices such as recycling through certified e-waste recycling programs, donating functional devices to those in need, and participating in manufacturer take-back schemes. Many electronics companies and retailers offer drop-off locations for old devices, ensuring proper recycling and disposal. Additionally, some municipalities organize e-waste collection drives to encourage responsible disposal. Before recycling, individuals should remove personal data from devices to protect their privacy. Choosing sustainable products, extending the lifespan of gadgets through repairs, and reducing unnecessary electronic purchases can also help mitigate the e-waste crisis. By understanding the dangers of e-waste and adopting responsible disposal methods, we can protect both human health and the environment while contributing to a more sustainable future..",
        "image": "/images/ewaste_dangers.png",
        "author": {
          "name": "Ayush Kumar",
          "date": "20 Aug 2023",
          "avatar": ""
        }
      },
      {
        "id": 4,
        "category": "Scrap Workers",
        "title": "The Unsung Heroes: The Role of Scrap Workers in Waste Management",
        "description": "Scrap workers play a crucial role in waste management by collecting, sorting, and recycling materials that would otherwise end up in landfills. This blog sheds light on their contributions, challenges, and how we can support their efforts for a cleaner planet.",
        "image": "/images/scrapworkers.png",
        "author": {
          "name": "Tanisha Rattan",
          "date": "25 Jul 2023",
          "avatar": ""
        }
      },
      {
        "id": 5,
        "category": "Scrap Recycling Industries",
        "title": "How Scrap Recycling Industries Are Driving the Circular Economy",
        "description": "Scrap recycling industries are at the forefront of the circular economy, turning waste into valuable resources. This blog explores how these industries operate, the technologies they use, and their impact on reducing carbon emissions and conserving natural resources.",
        "image": "/images/RecycleCT.png",
        "author": {
          "name": "Ayush Kumar",
          "date": "30 Jun 2023",
          "avatar": ""
        }
      },
      {
        "id": 6,
        "category": "Recycling Education",
        "title": "Teaching Kids About Recycling: Fun and Educational Activities",
        "description": "Educating the next generation about recycling is essential for a sustainable future. This blog provides fun and engaging activities to teach kids about recycling, from DIY crafts to interactive games. Help your children become eco-conscious citizens!",
        "image": "/images/Education.png",
        "author": {
          "name": "Ayush Ranjan",
          "date": "05 May 2023",
          "avatar": ""
        }
      },
      {
        "id": 7,
        "category": "Carbon Footprints",
        "title": "Understanding Carbon Footprints: How to Measure and Reduce Yours",
        "description": "Your carbon footprint is the total amount of greenhouse gases, primarily carbon dioxide, generated by your actions. From transportation and energy use to food consumption and waste, every choice you make contributes to your carbon footprint. This blog explains how to calculate your carbon footprint using online tools and provides practical tips to reduce it. Learn how small changes, like switching to renewable energy, reducing meat consumption, and using public transport, can make a big difference. Join the movement to combat climate change by taking responsibility for your carbon emissions today.",
        "image": "../../public/images/Carbon.png",
        "author": {
          "name": "Rohit Khallar",
          "date": "18 May 2023",
          "avatar": ""
        }
      },
      {
        "id": 8,
        "category": "Transportation",
        "title": "Sustainable Transportation: How to Reduce Your Commute's Carbon Impact",
        "description": "Transportation is one of the largest contributors to carbon emissions worldwide. This blog explores sustainable transportation options, from electric vehicles and public transit to cycling and carpooling. Learn how to reduce your commute's carbon impact by making smarter choices, planning efficient routes, and advocating for greener infrastructure. Discover how small changes in your daily travel habits can lead to a significant reduction in your carbon footprint and contribute to a healthier planet.",
        "image": "/images/trans.png",
        "author": {
          "name": "Green Commuter",
          "date": "25 Jun 2023",
          "avatar": ""
        }
      },
      {
        "id": 9,
        "category": "Sustainability",
        "title": "Upcycling: Transforming Waste into Creative Treasures",
        "description": "Upcycling is the art of transforming discarded materials into new, functional, and beautiful products. Unlike recycling, which breaks down materials, upcycling gives waste a second life without degrading its quality. In this blog, we explore inspiring upcycling ideas, from turning old jars into stylish planters to crafting furniture from pallets. Learn how upcycling not only reduces waste but also fosters creativity and promotes a sustainable lifestyle. Whether you're a DIY enthusiast or just starting, this guide will inspire you to see waste in a whole new light.",
        "image": "/images/Sustainabillity.png",
        "author": {
          "name": "Rohit Khallar",
          "date": "28 Mar 2023",
          "avatar": ""
        }
      }
    ])
    
    
  

  return <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>;
};

export { BlogContext, BlogProvider };





