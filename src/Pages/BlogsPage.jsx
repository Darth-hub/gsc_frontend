import { Search } from "lucide-react";
import { useState } from "react"; // Import useState for search functionality



export default function BlogPage() {
  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // Sample blog data (replace this with an API call later)
  const blogs = [
    {
      id: 1,
      category: "E-Waste",
      title: "The Hidden Dangers of E-Waste",
      description:
        "Electronic waste is growing rapidly. Learn how improper disposal affects the environment and how you can recycle responsibly.",
      image: "../Components/images/ewaste_dangers.png",
      author: {
        name: "Ayush Ranjan",
        date: "12 Mar 2025",
      },
    },
    {
      id: 2,
      category: "Recycling",
      title: "5 Simple Steps to Start Recycling Today",
      description:
        "Recycling doesn't have to be complicated! Follow these 5 easy steps to make a difference for the planet.",
      image: "../Components/images/recycling_tips.png",
      author: {
        name: "Rohit Khallar",
        date: "08 Mar 2025",
      },
    },
    {
      id: 3,
      category: "General Waste",
      title: "How to Reduce Daily Household Waste",
      description:
        "Cut down on waste at home with these practical and easy-to-follow tips for a sustainable lifestyle.",
      image: "/images/household_waste.jpg",
      author: {
        name: "Ayush Kumar",
        date: "02 Mar 2025",

      },
    },
    {
      id: 4,
      category: "Management",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/placeholder.svg?height=200&width=400",
      author: {
        name: "Tanisha Rattan",
        date: "17 Jan 2022",
      },
    },
    {
      id: 5,
      category: "E-Waste",
    title: "Are Your Old Gadgets Worth Anything?",
    description:
      "Before throwing out old electronics, check how you can refurbish, sell, or recycle them for a better purpose.",
    image: "/images/sell_old_gadgets.jpg",
    author: {
      name: "Harsh",
      date: "28 Feb 2025",
      },
    },
    {
      id: 6,
      category: "Recycling",
      title: "Plastic Waste: What Can and Can’t Be Recycled?",
      description:
        "Not all plastics are recyclable! Learn which types of plastic can be processed and which should be avoided.",
      image: "/images/plastic_recycling.jpg",
      author: {
        name: "Manav Mathew",
        date: "22 Feb 2025",
      },
    },
    {
      id: 7,
      category: "Food Waste",
      title: "How to Reduce Food Waste at Home",
      description:
        "Food waste is a major issue. Discover easy ways to store, reuse, and reduce waste in your kitchen.",
      image: "/images/food_waste.jpg",
      author: {
        name: "Vansh",
        date: "15 Feb 2025",
      },
    },
    {
      id: 8,
      category: "Sustainable Living",
      title: "Eco-Friendly Alternatives to Daily Products",
      description:
        "Switching to sustainable products can help reduce waste. Here are some great eco-friendly alternatives!",
      image: "/images/eco_alternatives.jpg",
      author: {
        name: "Govind",
        date: "10 Feb 2025",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 9,
      category: "Waste Innovations",
      title: "Smart Waste Management: How AI is Changing Recycling",
      description:
        "AI and automation are transforming waste management. Discover how technology is improving recycling efficiency.",
      image: "/images/smart_waste.jpg",
      author: {
        name: "",
        date: "01 Feb 2025",
      },
    },
  ];

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-700">
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white mb-2">Our blog</p>
          <h1 className="text-4xl font-bold text-white mb-3">Resources and insights</h1>
          <p className="text-white max-w-2xl mx-auto">
            The latest industry news, and updates on E-Waste.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              />
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Render filtered blogs */}
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              category={blog.category}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              author={blog.author}
              onClick={() => {
                // Redirect to a detailed blog page (replace with your logic)
                alert(`Redirecting to blog: ${blog.title}`);
                // Example: window.location.href = `/blog/${blog.id}`;
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function BlogCard({ category, title, description, image, author, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      onClick={onClick} // Make the card clickable
    >
      <div className="relative h-48 w-full">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-sm font-medium text-purple-600 mb-2">{category}</div>
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          {title}
          <svg
            className="ml-1 h-4 w-4 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </h3>
        <p className="mt-2 text-sm text-gray-600 flex-grow">{description}</p>
        <div className="mt-4 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={author.avatar || "/placeholder.svg"}
              alt={author.name}
              width={80}
              height={80}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{author.name}</p>
            <p className="text-sm text-gray-500">{author.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}