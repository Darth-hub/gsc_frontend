import React from "react";
import "../ScrapRate.css";
import Footer from "../../Components/Footer";


/* e-waste */
import laptop from "../../Components/images/laptop.png";
import mobile from "../../Components/images/mobile.png";
import monitor from "../../Components/images/monitor.png";
import charger from "../../Components/images/charger.png";
import headphone from "../../Components/images/headphone.png";
import speakers from "../../Components/images/speaker.png";
import keyboard from "../../Components/images/keyboard.png";
import camera from "../../Components/images/camera.png";
import Dryer from "../../Components/images/dryer.png";

/* Large Appliances */
import splitac from "../../Components/images/splitac.png";
import ac from "../../Components/images/ac.png";
import washing from "../../Components/images/washing.png";
import fridge from "../../Components/images/fridge.png";
import geyser from "../../Components/images/geyser.png";
import ironCooler from "../../Components/images/IronCooler.png";
import plasticCooler from "../../Components/images/PlasticCooler.png";
import dishwasher from "../../Components/images/Dishwasher.png";
import VaccumCleaner from "../../Components/images/vaccum_cleaner.png";

/* Small Appliances */
import microwave from "../../Components/images/microwave.png";
import printer from "../../Components/images/printer.png";
import ceilingFan from "../../Components/images/ceilingFan.png";
import UPS from "../../Components/images/UPS.png";
import metalWaste from "../../Components/images/metal.png";
import TV from "../../Components/images/TV.png";
import motor from "../../Components/images/motor.png";
import toaster from "../../Components/images/toaster.png";
import Grinder from "../../Components/images/grinder.png";

/* Daily Waste */
import newspaper from "../../Components/images/newspaper.png";
import cardboard from "../../Components/images/cardboard.png";
import steelUtensils from "../../Components/images/steel.png";
import books from "../../Components/images/book.png";
import bottles from "../../Components/images/bottles.png";
import clothes from "../../Components/images/clothes.png";
import toys from "../../Components/images/toys.png";
import bicycle from "../../Components/images/cycle.png";
import Wires from "../../Components/images/wire.png";

const scrapCategories = [
  {
    title: "E-Waste",
    items: [
      { name: "Laptop", price: "₹300/Piece", image: laptop },
      { name: "Mobile", price: "₹150/Piece", image: mobile },
      { name: "Monitor", price: "₹20/KG", image: monitor },
      { name: "Charger", price: "₹225/Piece", image: charger },
      { name: "Headphone", price: "₹250/Piece", image: headphone },
      { name: "Speaker", price: "₹400/Piece", image: speakers },
      { name: "Keyboard", price: "₹100/Piece", image: keyboard },
      { name: "Camera", price: "₹300/Piece", image: camera },
      { name: "Dryer", price: "₹300/Piece", image: Dryer },
    ],
  },
  {
    title: "Large Appliances",
    items: [
      { name: "Split AC (1.5 Ton)", price: "₹4150/Piece", image: splitac },
      { name: "Window AC (1 Ton)", price: "₹4050/Piece", image: ac },
      { name: "Washing Machine", price: "₹1350/Piece", image: washing },
      { name: "Single Door Fridge", price: "₹1100/Piece", image: fridge },
      { name: "Geyser", price: "₹1000/Piece", image: geyser },
      { name: "Iron Cooler", price: "₹30/kg", image: ironCooler },
      { name: "Plastic Cooler", price: "₹40/kg", image: plasticCooler },
      { name: "Dishwasher", price: "₹1100/Piece", image: dishwasher },
      { name: "VaccumCleaner", price: "₹1100/Piece", image: VaccumCleaner },
    ],
  },
  {
    title: "Small Appliances",
    items: [
      { name: "Microwave", price: "₹350/Piece", image: microwave },
      { name: "Printer", price: "₹180/KG", image: printer },
      { name: "Ceiling Fan", price: "₹35/KG", image: ceilingFan },
      { name: "UPS", price: "₹8/KG", image: UPS },
      { name: "Metal Waste", price: "₹8/KG", image: metalWaste },
      { name: "TV", price: "₹58/KG", image: TV },
      { name: "Motor", price: "₹10/KG", image: motor },
      { name: "Toaster", price: "₹150/piece", image: toaster },
      { name: "Grinder", price: "₹150/piece", image: Grinder },
    ],
  },
  {
    title: "Normal Recyclables",
    items: [
      { name: "Newspaper", price: "₹14/KG", image: newspaper },
      { name: "Cardboard", price: "₹8/KG", image: cardboard },
      { name: "Steel Utensils", price: "₹40/KG", image: steelUtensils },
      { name: "Books", price: "₹15/KG", image: books },
      { name: "Bottles", price: "₹20/KG", image: bottles },
      { name: "Clothes", price: "₹50/KG", image: clothes },
      { name: "Toys", price: "₹30/KG", image: toys },
      { name: "Bicycle", price: "₹300/Piece", image: bicycle },
      { name: "Wire", price: "₹300/Piece", image: Wires },
    ],
  },
];

const ScrapRates = () => {
  return (
    <div className="scrap-rates-page">
      {/* Page Header */}
      <h1 className="page-title">Scrap Rates</h1>
      <h2 className ="page-title2">* Prices may vary due to Market fluctuations</h2>

      <div className="categories">
        {scrapCategories.map((category, index) => (
          <div key={index} className="category card">
            <h2 className="category-title">{category.title}</h2>

            <div className="items-container">
              {/* Loop in chunks of 3 to maintain a 3×N layout */}
              {Array.from({ length: Math.ceil(category.items.length / 3) }, (_, rowIndex) => (
                <div key={rowIndex} className="items-row">
                  {category.items.slice(rowIndex * 3, rowIndex * 3 + 3).map((item, idx) => (
                    <div key={idx} className="item">
                      <img src={item.image} alt={item.name} className="scrap-image" />
                      <div className="scrap-text">
                        <p className="item-name">{item.name}</p>
                        <p className="item-price">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ScrapRates;
