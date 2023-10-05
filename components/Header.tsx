import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../public/logo.png';
import { useRouter } from 'next/router';

const ColNav: React.FC<{ setIsSmallScreen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsSmallScreen }) => {
  const router = useRouter();
  const navlink =
    'text-lg cursor-pointer hover:text-gray-300';

  const handleNavItemClick = (navItem: string) => {
    router.push(`/${navItem.toLowerCase()}`);
    setIsSmallScreen(false); // Close the mobile menu after clicking a link
  };

  return (
    <div className='fixed z-50 flex inset-0 w-full h-screen items-center justify-center bg-[#000]'>
      <div className='text-white bg-black'>
        <p className='text-2xl'>ColNav Links</p>
        <p className={`${navlink} ${router.pathname === '/' ? 'text-white' : ''}`} onClick={() => handleNavItemClick('Home')}>Home</p>
        <p className={`${navlink} ${router.pathname === '/download' ? 'text-white' : ''}`} onClick={() => handleNavItemClick('Download')}>Download</p>
        <p className={`${navlink} ${router.pathname === '/about' ? 'text-white' : ''}`} onClick={() => handleNavItemClick('About')}>About</p>
        <p className={`${navlink} ${router.pathname === '/privacy' ? 'text-white' : ''}`} onClick={() => handleNavItemClick('Privacy')}>Privacy Policy</p>
        <p className={`${navlink} ${router.pathname === '/contact' ? 'text-white' : ''}`} onClick={() => handleNavItemClick('Contact')}>Contact Us</p>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    setIsSmallScreen(!isSmallScreen);
  };

  return (
    <>
      <div className={`h-16 inset-0 fixed top-0 z-50 bg-secondary w-full flex border-b lg:px-12 md:px-8 px-4 xl:px-16 border-lightgray items-center justify-center`}>
        <div className={`w-full items-center justify-between flex ${isSmallScreen ? 'sm:flex lg:hidden md:flex xl:hidden' : ''}`}>
          <img src={Logo.src} alt="logo" className="w-20 h-12" />

          {!isSmallScreen && (
            <div className="hidden cursor-pointer lg:flex md:hidden xl:flex gap-x-8">
              <p className={`${router.pathname === '/' ? 'text-white' : ''}`} onClick={() => router.push('/')}>Home</p>
              <p className={`${router.pathname === '/download' ? 'text-white' : ''}`} onClick={() => router.push('/download')}>Download</p>
              <p className={`${router.pathname === '/about' ? 'text-white' : ''}`} onClick={() => router.push('/about')}>About</p>
              <p className={`${router.pathname === '/privacy' ? 'text-white' : ''}`} onClick={() => router.push('/privacy')}>Privacy Policy</p>
              <p className={`${router.pathname === '/contact' ? 'text-white' : ''}`} onClick={() => router.push('/contact')}>Contact Us</p>
            </div>
          )}

          {isSmallScreen && (
            <div className="">
              <GiHamburgerMenu className="text-[#fff]" onClick={handleToggleModal} />
            </div>
          )}
        </div>
      </div>

      {showModal && <ColNav setIsSmallScreen={setIsSmallScreen} />}
    </>
  );
};

export default Header;
