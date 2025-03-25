import { Heart, ShoppingCart, Minus, Plus, Maximize2 } from "lucide-react"
import { useState } from "react"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"


export default function Store() {
  const [activeTab, setActiveTab] = useState("ALL")
  const [zoomLevel, setZoomLevel] = useState(53)

  const products = [
    {
      id: 1,
      title: "Eclyra T-Shirt",
      price: 500,
      image: "../Components/images/tshirt.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Eclyra Hoodie",
      price: 600,
      image: "../Components/images/hoodie2.jpg",
      isSale: true,
    },
    {
      id: 3,
      title: "Eclyra Towel",
      price: 700,
      image: "../Components/images/towel.png",
    },
    {
      id: 4,
      title: "Eclyra Notebook",
      price: 200,
      image: "../Components/images/notebookStore.png",
    },
    {
      id: 5,
      title: "Eclyra BackPack",
      price: 1000,
      image: "../Components/images/backpackmain.png",
      isNew: true,
    },
    {
      id: 6,
      title: "Eclyra Laptop Sleeve",
      price: 1500,
      image: "../Components/images/laptopSleeve.png",
      isSale: true,
    },
    {
      id: 7,
      title: "Eclyra ToteBag",
      price: 700,
      image: "../Components/images/ToteBag.png",
    },
    {
      id: 8,
      title: "Eclyra Sipper",
      price: 500,
      image: "../Components/images/sipper.png",
    },
  ]

  const tabs = ["ALL", "NEWEST", "TRENDING", "BEST SELLERS", "FEATURED"]

  const decreaseZoom = () => {
    if (zoomLevel > 20) setZoomLevel(zoomLevel - 5)
  }

  const increaseZoom = () => {
    if (zoomLevel < 100) setZoomLevel(zoomLevel + 5)
  }

  return (
    <>
    <Header />
    <div className="max-w-7xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-white">Rewards and Prices</h1>
    <span className="text-xl font-semibold text-yellow-400">Your Coins: 0</span>
      

      {/* Tabs */}
      {/* <div className="flex justify-center mb-8">
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-2 py-1 font-medium ${
                activeTab === tab ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div> */}

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative rounded-md hover:bg-emerald-200">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              
              <button className="absolute top-3 right-3 z-10 rounded-full bg-white p-2 shadow-md">
                <Heart className="h-5 w-5 text-gray-400" />
              </button>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="h-64 w-full object-fit"
              />
            </div>
            <div className="mt-3 flex justify-between">
              <div className="pl-2">
                <h3 className="text-sm font-medium text-teal-600">{product.title}</h3>
                <div className="flex items-center">
                  <p className="font-medium text-white">{product.price}</p>
                </div>
              </div>
              <button className="rounded-md bg-teal-600 p-2 text-white shadow-sm hover:bg-teal-700">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      
    </div>
    <Footer />
    </>
  )
}

