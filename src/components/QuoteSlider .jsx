import React, { useState, useEffect } from "react";

const QuoteSlider = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const quotes = [
    {
      text: "Risk comes from not knowing what you're doing.",
      author: "Warren Buffett",
    },
    {
      text: "Market analysis will not solve the problems created by a lack of discipline and confidence",
      author: "Mark Douglas",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition time
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#121212] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative h-48 md:h-40 overflow-hidden">
          <div
            className={`absolute w-full transition-all duration-1000 ease-in-out ${
              isTransitioning
                ? "opacity-0 transform -translate-x-full"
                : "opacity-100 transform translate-x-0"
            }`}
          >
            <div className="bg-[#1f1f1f] rounded-lg p-8 shadow-lg border border-gray-700">
              <p className="text-[#00df9a] text-xl md:text-2xl font-medium mb-4 italic">
                "{quotes[currentQuoteIndex].text}"
              </p>
              <div className="flex items-center">
                <div className="h-0.5 w-12 bg-[#00df9a] mr-4"></div>
                <p className="text-white font-medium">
                  {quotes[currentQuoteIndex].author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote count indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {quotes.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentQuoteIndex ? "bg-[#00df9a]" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default QuoteSlider;
