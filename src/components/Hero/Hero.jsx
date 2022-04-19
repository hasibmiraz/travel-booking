import React from 'react';
import beachVid from '../../assets/beachVid.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full left-0 top-0 bg-gray-900/30" />
      <div className="absolute top-0 w-full flex flex-col justify-center h-full text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwid</h2>
        <form className="w-full flex justify-between items-center mx-auto max-w-[700px] border p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              className="bg-transparent w-[300] sm:w-[400px] font-poppins focus:outline-none"
              type="text"
              placeholder="Search Destination"
            />
          </div>
          <div>
            <button>
              {' '}
              <AiOutlineSearch
                className="icon"
                size={20}
                style={{ color: '#ffffff' }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
