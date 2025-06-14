// src/components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;