import React from 'react';

import SearchIcon from '../../../assets/icons/search.svg';
import GridIcon from '../../../assets/icons/grid.svg';
import HamburgerIcon from '../../../assets/icons/hamburger.svg';

const HomePageNav = () => {
  return (
    <div className="flex justify-between pt-6">
      <div>
        <div className="text-right space-x-4">
          <button className="bg-gray-dark rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white">
            Files
          </button>
          <button className="bg-none rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white">
            Projects
          </button>
        </div>
      </div>

      <div className="w-96">
        <div className="flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 py-1 rounded-l-md bg-gray-dark text-sm">
            <SearchIcon />
          </span>
          <input
            type="text"
            name="company_website"
            id="company_website"
            className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-0 text-white bg-gray-dark"
            placeholder="Search Files"
          />
        </div>
      </div>

      <div>
        <div className="text-right space-x-2">
          <button className="bg-gray-dark rounded-md shadow-sm py-2 px-2 inline-flex justify-center text-sm font-medium text-white">
            <GridIcon />
          </button>
          <button className="bg-none rounded-md shadow-sm py-2 px-2 inline-flex justify-center text-sm font-medium text-white">
            <HamburgerIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageNav;
