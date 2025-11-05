import React from 'react';

/**
 * Pagination component matching the visual style of the provided image.
 * Uses the 'coral' color for the active state (page 1) and standard boxes for others.
 */
const Pagination = () => {
  // Array of page numbers/indicators to display
  const pages = [
    { label: '1', active: true, value: 1 },
    { label: '2', active: false, value: 2 },
    { label: '3', active: false, value: 3 },
    { label: '...', active: false, value: null, disabled: true },
    { label: '10', active: false, value: 10 },
  ];

  // Inline SVG for the 'Next' arrow (>)
  const NextArrow = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="size-3" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  const renderPageButton = (page) => {
    const baseClasses = "flex items-center justify-center size-10 rounded-md border text-sm font-semibold transition-all duration-200 cursor-pointer";
    
    // Classes for active state (Page 1)
    const activeClasses = "bg-orange-500 border-orange-500 text-white shadow-md";
    
    // Classes for inactive/default state
    const inactiveClasses = "bg-white border-gray-300 text-gray-600 hover:bg-gray-100";
    
    // Classes for disabled/ellipsis state
    const disabledClasses = "bg-white border-gray-300 text-gray-400 cursor-default pointer-events-none";

    let combinedClasses;

    if (page.disabled) {
      combinedClasses = `${baseClasses} ${disabledClasses}`;
    } else if (page.active) {
      combinedClasses = `${baseClasses} ${activeClasses}`;
    } else {
      combinedClasses = `${baseClasses} ${inactiveClasses}`;
    }

    return (
      <button 
        key={page.label}
        className={combinedClasses}
        aria-current={page.active ? 'page' : undefined}
        disabled={page.disabled}
        onClick={() => {
          if (page.value) console.log(`Navigating to page ${page.value}`);
        }}
      >
        {page.label}
      </button>
    );
  };

  return (
    <nav className="flex justify-center mt-1" aria-label="Pagination">
      <div className="flex space-x-2">
        {/* Render Page Buttons */}
        {pages.map(renderPageButton)}
        {/* Next Button */}
        <button 
          className="flex items-center justify-center size-10 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition-all duration-200"
          onClick={() => console.log('Navigating to next page')}
          aria-label="Next page"
        >
          {NextArrow}
        </button>
      </div>
    </nav>
  );
};

export default Pagination;