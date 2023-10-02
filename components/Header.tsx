'use client';

import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../public/logo.png';

const Header = () => {
  const navlink =
    'focus:text-white font-semibold text-lightgray hover:text-white';

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('Home'); // Initialize with 'Home' selected

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    // Initial check and add event listener for resizing
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavItemClick = (navItem: any) => {
    setSelectedNavItem(navItem);
  };

  return (
    <div
      className={`h-16 inset-0 fixed top-0 z-50 bg-secondary w-full flex border-b lg:px-12 md:px-8 px-4 xl:px-16 border-lightgray items-center justify-center`}
    >
      <div
        className={`w-full items-center justify-between flex ${
          isSmallScreen ? 'sm:flex lg:hidden md:flex xl:hidden' : ''
        }`}
      >
        <img src={Logo.src} alt="logo" className="w-20 h-12" />

        {!isSmallScreen && (
          <div className="hidden lg:flex md:hidden xl:flex gap-x-8">
            <p
              className={`${navlink} ${selectedNavItem === 'Home' ? 'text-white' : ''}`}
              onClick={() => handleNavItemClick('Home')}
            >
              Home
            </p>
            <p
              className={`${navlink} ${selectedNavItem === 'Download' ? 'text-white' : ''}`}
              onClick={() => handleNavItemClick('Download')}
            >
              Download
            </p>
            <p
              className={`${navlink} ${selectedNavItem === 'About' ? 'text-white' : ''}`}
              onClick={() => handleNavItemClick('About')}
            >
              About
            </p>
            <p
              className={`${navlink} ${selectedNavItem === 'Privacy policy' ? 'text-white' : ''}`}
              onClick={() => handleNavItemClick('Privacy Policy')}
            >
              Privacy policy
            </p>
            <p
              className={`${navlink} ${selectedNavItem === 'Contact Us' ? 'text-white' : ''}`}
              onClick={() => handleNavItemClick('Contact Us')}
            >
              Contact Us
            </p>
          </div>
        )}

        {isSmallScreen && (
          <div className="">
            <GiHamburgerMenu className="text-[#fff]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;


// 'use client';

// import { useEffect, useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import Logo from '../public/logo.png';

// const Header = () => {
//   const navlink =
//     'focus:text-white font-semibold text-lightgray hover:text-white';

//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 1000);
//     };

//     // Initial check and add event listener for resizing
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div
//       className={`h-16 inset-0 fixed top-0 z-50 bg-secondary w-full flex border-b lg:px-12 md:px-8 px-4 xl:px-16 border-lightgray items-center justify-center`}
//     >
//       <div
//         className={`w-full items-center justify-between flex ${
//           isSmallScreen ? 'sm:flex lg:hidden md:flex xl:hidden' : ''
//         }`}
//       >
//         <img src={Logo.src} alt="logo" className="w-20 h-12" />

//         {!isSmallScreen && (
//           <div className="hidden lg:flex md:hidden xl:flex gap-x-8">
//             <p className={navlink}>Home</p>
//             <p className={navlink}>Download</p>
//             <p className={navlink}>Privacy policy</p>
//             <p className={navlink}>About</p>
//             <p className={navlink}>Contact Us</p>
//           </div>
//         )}

//         {isSmallScreen && (
//           <div className="">
//             <GiHamburgerMenu className="text-[#fff]" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
