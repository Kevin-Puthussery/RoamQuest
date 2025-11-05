import React from 'react';

const ContactSection = () => {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* 1. Background Image/Video Container */}
      <div className="absolute inset-0">
        {/* Replace with your actual background image URL or a placeholder */}
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1532435/pexels-photo-1532435.jpeg')" }}
        >
          {/* Optional: Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-30"></div> 
        </div>
        {/* Optional: Add the misty/haze effect seen in the original image over the horizon */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-t from-transparent to-gray-800 opacity-40"></div>
      </div>

      {/* 2. Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase mb-4 text-gray-200">
          GET IN TOUCH
        </h2>
        
        {/* Sub-text */}
        <p className="text-sm sm:text-base mb-2 text-gray-300">
          Feel free to <span className="text-red-500 font-semibold">contact us</span> if you have travel questions, comments or suggestions.
        </p>
        
        {/* Confirmation Text */}
        <p className="text-xs sm:text-sm mb-8 text-gray-300 italic">
          I'll try to get back to you!
        </p>

        {/* Paper Airplane Icon (Call to Action) */}
        {/* You'd typically use an SVG or an icon library like Heroicons */}
        <div 
          className="text-white text-6xl cursor-pointer transition-transform duration-300 hover:scale-110"
          // In a real app, this would be a link or a button to open a form/email
        >
          {/* This is a simple SVG representation of a paper airplane */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;