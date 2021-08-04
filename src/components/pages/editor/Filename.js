import React from 'react';

const Filename = () => {
  return (
    <div className="flex space-x-2">
      <img className="block h-10 w-auto" src="/images/logo/icon-logo.png" />
      <button className="bg-gray rounded-md shadow-sm px-4 align-center text-sm font-medium text-white">
        File Name
      </button>
    </div>
  );
};

export default Filename;
