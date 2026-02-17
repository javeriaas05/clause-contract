
// src/components/Testimonial.tsx
import React from "react";
import { Quote } from "lucide-react";

const Testimonial: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Quotation mark */}
        <Quote className="mx-auto text-green-900 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        
        {/* Testimonial Text */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-green-900 leading-relaxed px-2 sm:px-4">
          "Clause is helping our company to decrease operational expenses and
          turnaround time, while increasing the compliance, resource allocation
          and effectiveness of our contract management."
        </p>
        
        {/* Author */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
          {/* Avatar Icons */}
          <div className="flex -space-x-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white shadow-sm"
            />
            <img
              src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
              alt="logo"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white bg-yellow-400 shadow-sm"
            />
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-semibold text-gray-900">
              Darlene Robertson
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Head of Strategy at Mailchimp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;