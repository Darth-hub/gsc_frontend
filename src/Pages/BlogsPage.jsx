import { Search } from "lucide-react";
import React, { useContext, useState } from "react"; 
// Import useState for search functionality
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { HashLink as Link } from "react-router-hash-link";
import { BlogContext } from "./User/Blogdata";




export default function BlogPage() {

  const { blogs } = useContext(BlogContext);


  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // Sample blog data (replace this with an API call later)
  

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-green-700">
      <Header />
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
            <div>
            <Link smooth to={`/blog`} state={{blog}}>
            <button
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
             // Make the card clickable
          >
            
            <div className="p-6 flex flex-col text-center flex-grow">
              <div className="text-sm font-medium text-purple-600 mb-2">{blog.category}</div>
              <h3 className="text-2xl mb-3  font-semibold text-gray-900 flex items-center">
                {blog.title}
                
              </h3>
              <div className=" h-[150px]  overflow-auto"><p className="mt-2 text-sm  text-gray-600 flex-grow">{blog.description}</p></div>
              <div className="mt-4 flex items-center">
                
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
                </div>
              </div>
            </div>
          </button>
            </Link>
          
          </div>
          ))}
        </div>
      </main>
    </div>
    <Footer />
    </div>
  );
}

