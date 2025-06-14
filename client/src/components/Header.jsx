// import React from "react";

// const Header = () => {
//   return (
//     <header className="bg-teal-600 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Table Tennis Scheduler</h1>
//         <nav>
//           <ul className="flex space-x-6">
//             <li>
//               <a href="#" className="hover:text-gray-200 font-medium">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-200 font-medium">
//                 Scheduler
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-200 font-medium">
//                 Tournament
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;









// this is the header component before claude
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="bg-teal-600 dark:bg-teal-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Table Tennis Scheduler</h1>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-gray-200 font-medium border-b-2 border-gray-200'
                    : 'hover:text-gray-200 font-medium'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/scheduler"
                className={({ isActive }) =>
                  isActive
                    ? 'text-gray-200 font-medium border-b-2 border-gray-200'
                    : 'hover:text-gray-200 font-medium'
                }
              >
                Scheduler
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tournament"
                className={({ isActive }) =>
                  isActive
                    ? 'text-gray-200 font-medium border-b-2 border-gray-200'
                    : 'hover:text-gray-200 font-medium'
                }
              >
                Tournament
              </NavLink>
            </li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-teal-700"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;




// this is the header component after claude trial 1



// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = ({ toggleDarkMode, isDarkMode }) => {
//   return (
//     <header className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-900 dark:via-teal-800 dark:to-cyan-900 text-white shadow-2xl overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>
      
//       {/* Floating ping pong balls animation */}
//       <div className="absolute top-2 left-10 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
//       <div className="absolute top-6 right-20 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
//       <div className="absolute bottom-2 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-bounce delay-700"></div>
      
//       <div className="container mx-auto relative z-10">
//         <div className="flex justify-between items-center py-6 px-6">
//           {/* Logo section with enhanced styling */}
//           <div className="flex items-center space-x-3">
//             {/* Ping pong paddle icon */}
//             <div className="relative">
//               <div className="w-10 h-12 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full transform rotate-12 shadow-lg"></div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
//               <div className="absolute top-2 right-1 w-1 h-1 bg-white/80 rounded-full"></div>
//             </div>
            
//             <div className="flex flex-col">
//               <h1 className="text-3xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
//                 Table Tennis
//               </h1>
//               <span className="text-sm font-medium text-emerald-200 tracking-widest uppercase">
//                 Scheduler Pro
//               </span>
//             </div>
//           </div>

//           {/* Navigation with glassmorphism effect */}
//           <nav className="flex items-center space-x-8">
//             <ul className="flex space-x-8 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive
//                       ? 'relative text-white font-bold transition-all duration-300 px-4 py-2 rounded-full bg-white/20 shadow-lg'
//                       : 'relative text-white/90 hover:text-white font-semibold transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10 hover:shadow-md hover:scale-105'
//                   }
//                 >
//                   <span className="relative z-10">Home</span>
//                   {/* Active indicator glow */}
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/scheduler"
//                   className={({ isActive }) =>
//                     isActive
//                       ? 'relative text-white font-bold transition-all duration-300 px-4 py-2 rounded-full bg-white/20 shadow-lg'
//                       : 'relative text-white/90 hover:text-white font-semibold transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10 hover:shadow-md hover:scale-105'
//                   }
//                 >
//                   <span className="relative z-10">Scheduler</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/tournament"
//                   className={({ isActive }) =>
//                     isActive
//                       ? 'relative text-white font-bold transition-all duration-300 px-4 py-2 rounded-full bg-white/20 shadow-lg'
//                       : 'relative text-white/90 hover:text-white font-semibold transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10 hover:shadow-md hover:scale-105'
//                   }
//                 >
//                   <span className="relative z-10">Tournament</span>
//                 </NavLink>
//               </li>
//             </ul>

//             {/* Enhanced dark mode toggle */}
//             <button
//               onClick={toggleDarkMode}
//               className="relative group p-3 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
//               aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//             >
//               <div className="relative w-6 h-6 flex items-center justify-center">
//                 <span className="text-xl transition-transform duration-500 group-hover:scale-125">
//                   {isDarkMode ? '☀️' : '🌙'}
//                 </span>
//                 {/* Glow effect */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
//               </div>
//             </button>
//           </nav>
//         </div>
//       </div>

//       {/* Bottom gradient border */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
//     </header>
//   );
// };

// export default Header;












// this is the header component after claude trial 2



// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = ({ toggleDarkMode, isDarkMode }) => {
//   return (
//     <header className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 shadow-sm">
//       <div className="container mx-auto px-6">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo section */}
//           <div className="flex items-center space-x-3">
//             {/* Simple table tennis icon */}
//             <div className="relative">
//               <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-md">
//                 <div className="w-3 h-3 bg-white rounded-full"></div>
//               </div>
//             </div>
            
//             <div className="flex flex-col">
//               <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
//                 Table Tennis Scheduler
//               </h1>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="flex items-center space-x-8">
//             <ul className="flex space-x-6">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive
//                       ? 'text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600 dark:border-blue-400 pb-1 transition-colors duration-200'
//                       : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200'
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/scheduler"
//                   className={({ isActive }) =>
//                     isActive
//                       ? 'text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600 dark:border-blue-400 pb-1 transition-colors duration-200'
//                       : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200'
//                   }
//                 >
//                   Scheduler
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/tournament"
//                   className={({ isActive }) =>
//                     isActive
//                       ? 'text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600 dark:border-blue-400 pb-1 transition-colors duration-200'
//                       : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200'
//                   }
//                 >
//                   Tournament
//                 </NavLink>
//               </li>
//             </ul>

//             {/* Professional dark mode toggle */}
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-lg text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
//               aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//             >
//               <div className="w-5 h-5 flex items-center justify-center">
//                 {isDarkMode ? (
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
//                   </svg>
//                 ) : (
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//                   </svg>
//                 )}
//               </div>
//             </button>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;