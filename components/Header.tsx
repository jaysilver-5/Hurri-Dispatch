import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../public/logo.png';

const ColNav: React.FC = () => {
  return (
    <div className='fixed z-50 flex inset-0 w-full h-screen items-center justify-center bg-[#000]'>
      <div className='text-white bg-black'>
        <p className='text-2xl'>ColNav Links</p>
        {/* Add your ColNav links here */}
        <p className='my-4 text-lg cursor-pointer hover:text-gray-300'>
          <span onClick={() => console.log('Link 1 clicked')}>Link 1</span>
        </p>
        <p className='my-4 text-lg cursor-pointer hover:text-gray-300'>
          <span onClick={() => console.log('Link 2 clicked')}>Link 2</span>
        </p>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const navlink =
    'focus:text-white font-semibold text-lightgray hover:text-white';

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('Home');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavItemClick = (navItem: any) => {
    setSelectedNavItem(navItem);
  };

  return (
    <>
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
            <div className="hidden cursor-pointer lg:flex md:hidden xl:flex gap-x-8">
              <p
                className={`${navlink} ${
                  selectedNavItem === 'Home' ? 'text-white' : ''
                }`}
                onClick={() => handleNavItemClick('Home')}
              >
                Home
              </p>
              <p
                className={`${navlink} ${
                  selectedNavItem === 'Download' ? 'text-white' : ''
                }`}
                onClick={() => handleNavItemClick('Download')}
              >
                Download
              </p>
              <p
                className={`${navlink} ${
                  selectedNavItem === 'About' ? 'text-white' : ''
                }`}
                onClick={() => handleNavItemClick('About')}
              >
                About
              </p>
              <p
                className={`${navlink} ${
                  selectedNavItem === 'Privacy Policy' ? 'text-white' : ''
                }`}
                onClick={() => handleNavItemClick('Privacy Policy')}
              >
                Privacy Policy
              </p>
              <p
                className={`${navlink} ${
                  selectedNavItem === 'Contact Us' ? 'text-white' : ''
                }`}
                onClick={() => handleNavItemClick('Contact Us')}
              >
                Contact Us
              </p>
            </div>
          )}

          {isSmallScreen && (
            <div className="">
              <GiHamburgerMenu
                className="text-[#fff]"
                onClick={() => setShowModal(!showModal)}
              />
            </div>
          )}
        </div>
      </div>

      {showModal && <ColNav />}
    </>
  );
};

export default Header;
