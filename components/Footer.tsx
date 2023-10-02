import Image from 'next/image';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import Logo from '../public/logo.png';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter()
  return (
    <div className=" px-6 md:px-8 lg:px-12 xl:px-16 bg-[#17181A] min-h-40 pt-8 md:pt-0 lg:pt-0 xl:pt-0 flex items-center w-full">
      <div className="w-full">
        <div className="flex xl:gap-y-0 lg:gap-y-0 md:gap-y-0 gap-y-4  border-b pb-6 pt-6 xl:flex-row lg:flex-row md:flex-row flex-col border-lightgray justify-between">
          <Image src={Logo.src} alt="logo" width={100} height={180} />
          <div className="flex gap-x-2">
            <div className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#323438]">
              <BsTwitter />
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#323438]">
              <FaLinkedinIn />
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#323438]">
              <BiLogoFacebook />
            </div>
            <button onClick={() => router.push('https://www.instagram.com/hurri.ng/')} className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#323438]">
              <BsInstagram />
            </button>
          </div>
        </div>

        {/* foot */}
        <div className="flex xl:flex-row gap-y-4 lg:flex-row flex-col md:fle pt-6 pb-6 justify-between w-full">
          <div className="flex gap-y-4 xl:flex-row lg:flex-row md:flex-row flex-col gap-x-4">
            <p className="text-lightgray text-[12px]">Terms of service</p>
            <p className="text-lightgray text-[12px]">Cookie Policy</p>
            <p className="text-lightgray text-[12px]">FAQ</p>
            <p className="text-lightgray text-[12px]">Support</p>
            <p className="text-lightgray text-[12px]">Careers</p>
          </div>

          <p className="text-lightgray py-4 border-t md:border-t lg:border-t-0 xl:border-t-0 border-lightgray  md:py-4 lg:py-0 xl:py-0 border-t-1 text-[12px]">
            Copyright © 2023 Gokada. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
