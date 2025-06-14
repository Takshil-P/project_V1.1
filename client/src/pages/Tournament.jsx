// import React from 'react';

// const Tournament = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
//         Ongoing Tournaments
//       </h2>
//       <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//         <h3 className="text-2xl font-semibold text-gray-700 mb-2">
//           Table Tennis 2025
//         </h3>
//         <p className="text-gray-600">
//           Join the excitement of the Table Tennis 2025 tournament!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Tournament;








// import React from 'react';

// const Tournament = ({ toggleDarkMode, isDarkMode }) => {
//   return (
//     <div className="container mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-extrabold text-center text-teal-600 dark:text-teal-400 animate-fade-in">
//           Ongoing Tournaments
//         </h2>
//         <button
//           onClick={toggleDarkMode}
//           className="p-2 rounded-full hover:bg-teal-100 dark:hover:bg-gray-700 transition duration-200"
//           aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//         >
//           {/* {isDarkMode ? '☀️' : '🌙'} */}
//         </button>
//       </div>
//       <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
//         <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
//           Table Tennis 2025
//         </h3>
//         <p className="text-gray-600 dark:text-gray-400">
//           Join the excitement of the Table Tennis 2025 tournament!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Tournament;




import React from 'react';

const Tournament = () => {
  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-extrabold text-center text-teal-600 dark:text-teal-400 mb-6 animate-fade-in">
        Ongoing Tournaments
      </h2>
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Table Tennis 2025
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Join the excitement of the Table Tennis 2025 tournament!
        </p>
      </div>
    </div>
  );
};

export default Tournament;