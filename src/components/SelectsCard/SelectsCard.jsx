import React from 'react';

const SelectsCard = ({ bg, text }) => {
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={bg} alt="" />
      <div className="w-full h-full bg-gray-900/30 absolute top-0 left-0">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
