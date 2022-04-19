import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-aut0 flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>TRAVEL.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Partnership</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>HOME</li>
            <li>DESTINATION</li>
            <li>TRAVEL</li>
            <li>VIEW</li>
            <li>BOOK</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
