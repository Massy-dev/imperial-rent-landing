// src/components/StarRating.jsx

import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-3">
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <FaStar
            key={i}
            className={`text-[#ffa500] ${i < rating ? 'opacity-100' : 'opacity-20'}`}
          />
        ))}
    </div>
  );
};

export default StarRating;
