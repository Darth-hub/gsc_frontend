import { Search } from "lucide-react";
import React, { useContext, useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { HashLink as Link } from "react-router-hash-link";
import { BlogContext } from "./User/Blogdata";

export default function BlogPage() {
  const { blogs } = useContext(BlogContext);

  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-green-900">
      <Header />
      <div className="min-h-screen bg-green-900">
        <main className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-white mb-2 text-xl">Our blog</p>
            <h1 className="text-4xl font-bold text-white mb-3">
              Resources and insights
            </h1>
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
              <Link
                smooth
                to={`/blog`}
                state={{ blog }}
                key={blog.id} // Add a unique key for each blog
              >
                <BlogCard
                  category={blog.category}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                  content = {blog.content}
                  author={blog.author}
                />
              </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function BlogCard({ category, title, description, image, author }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer pt-3">

      <div className="relative h-48 w-full">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-l font-semibold text-green-600 mb-4">{category}</div>
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
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{author.name}</p>
            <p className="text-sm text-gray-500">{author.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}