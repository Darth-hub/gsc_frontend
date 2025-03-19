"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Twitter, Instagram, Github } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "Rohit",
    lastName: "Khallar",
    email: "xyz@gmail.com",
    phoneNumber: "+91 96307-39557",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };+1

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="text-center mb-10">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
  <p className="text-white text-lg">
    Any question or remarks? Just write us a message!
  </p>
</div>


      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className="bg-green-800 text-white p-8 md:w-1/3">
            <div className="h-full flex flex-col">
              <div>
                <h2 className="text-2xl font-bold mb-2 ">Contact Information</h2>
                <p className="text- mb-8">
                  Say something to start a live chat!
                </p>
              </div>

              <div className="space-y-6 mb-auto">
                <div className="flex items-center">
                  <Phone className="mr-4 h-5 w-5" />
                  <span>+91 96307-39557</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 h-5 w-5" />
                  <span>ayushranjan112400@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-5 w-5 mt-1" />
                  <span>
                    IIIT Allahabad, Prayagraj, India
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="flex space-x-4">
                  {[Twitter, Instagram, Github].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="I"
                    className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <p className="block text-sm font-medium text-gray-700 mb-3">
                  Select Subject?
                </p>
                <div className="flex flex-wrap gap-4">
                  {["General Inquiry", "Feedback", "Support", "Others"].map(
                    (option, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="subject"
                          checked={formData.subject === option}
                          onChange={() => handleRadioChange(option)}
                          className="sr-only"
                        />
                        <span
                          className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 ${
                            formData.subject === option
                              ? "bg-black border-black"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.subject === option && (
                            <span className="w-2 h-2 rounded-full bg-white"></span>
                          )}
                        </span>
                        {option}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message.."
                  rows={4}
                  className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-800 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
