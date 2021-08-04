import React from 'react';

import SidebarBox from '../fragments/SidebarBox';

import GearIcon from '../../../../../assets/icons/gear.svg';
import ChevronDownIcon from '../../../../../assets/icons/chevron_down.svg';
import ThreeDotsIcon from '../../../../../assets/icons/three_dots.svg';

const Settings = () => {
  return (
    <SidebarBox glyph={<GearIcon />} title="Settings">
      <div className="bg-gray-dark text-sm py-2 px-4 flex space-x-2 border-b border-gray">
        <button className="bg-gray rounded-md p-2 w-10 font-medium text-white">
          3D
        </button>
        <button className="border border-gray rounded-md p-2 w-10 font-medium text-tertiary-gray">
          2D
        </button>
        <button className="bg-gray rounded-md p-2 flex-grow font-medium text-white flex items-center justify-between">
          <div>Default Scene</div>
          <ChevronDownIcon />
        </button>
        <button>
          <ThreeDotsIcon />
        </button>
      </div>
      <div className="bg-gray-dark text-sm py-2 px-4 flex justify-between">
        <div className="flex items-center space-x-2">
          <div>Duration</div>
          <input
            className="bg-gray rounded-md p-2 font-medium text-white w-20"
            defaultValue="10s"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div>Show Timeline</div>
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="h-4 w-4 border-gray-300 text-black rounded"
            defaultChecked
          />
        </div>
      </div>
    </SidebarBox>
  );
};

export default Settings;
