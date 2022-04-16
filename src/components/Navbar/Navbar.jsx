import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1>TRAVEL.</h1>
      </div>
      <ul className="flex">
        <li>HOME</li>
        <li>DESTINATION</li>
        <li>TRAVEL</li>
        <li>VIEW</li>
        <li>BOOK</li>
      </ul>
      <div className="flex">
        <BiSearch />
        <BsPerson />
      </div>
    </div>
  );
};

export default Navbar;
