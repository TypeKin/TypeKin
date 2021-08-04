import React from 'react';

import SidebarBox from '../fragments/SidebarBox';

import TextIcon from '../../../../../assets/icons/text_t.svg';
import ChevronDownIcon from '../../../../../assets/icons/chevron_down.svg';
import SwatchesIcon from '../../../../../assets/icons/swatches.svg';
import AlignLeftIcon from '../../../../../assets/icons/align_left.svg';
import AlignRightIcon from '../../../../../assets/icons/align_right.svg';
import AlignCenterIcon from '../../../../../assets/icons/align_center.svg';
import AlignJustifyIcon from '../../../../../assets/icons/align_justify.svg';
import AlignTopIcon from '../../../../../assets/icons/align_top.svg';
import AlignMiddleIcon from '../../../../../assets/icons/align_middle.svg';
import AlignBottomIcon from '../../../../../assets/icons/align_bottom.svg';

const Text = () => {
  return (
    <SidebarBox glyph={<TextIcon />} title="Text">
      <div className="bg-gray-dark py-2 px-4 space-x-2 flex justify-between border-b border-gray">
        <textarea
          rows="3"
          className="w-full block sm:text-sm rounded-md border-none bg-gray p-2"
          defaultValue="Text Here"
        ></textarea>
      </div>
      <div className="bg-gray-dark py-2 px-4 w-full space-y-2 border-b border-gray">
        <div className="flex items-center w-full space-x-2">
          <button className="bg-gray rounded-md p-2 flex-grow text-sm font-medium text-white flex items-center justify-between">
            <div>Helvetica</div>
            <ChevronDownIcon />
          </button>
          <button className="bg-gray rounded-md p-2 flex-grow text-sm font-medium text-white flex items-center justify-between">
            <div>Bold</div>
            <ChevronDownIcon />
          </button>
          <SwatchesIcon />
        </div>
        <div className="flex pb-2 items-center justify-between">
          <div className="text-sm">Font Size</div>
          <div className="flex space-x-2">
            <input
              className="slider bg-gray rounded"
              type="range"
              min="1"
              max="100"
              defaultValue="50"
            />
            <input
              className="bg-gray rounded-md p-2 text-sm font-medium text-white w-20"
              defaultValue="10s"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-dark py-2 px-4 w-full flex justify-between">
        <div className="flex space-x-3 py-2">
          <AlignLeftIcon />
          <AlignCenterIcon />
          <AlignRightIcon />
          <AlignJustifyIcon />
        </div>
        <div className="flex space-x-3 py-2">
          <AlignTopIcon />
          <AlignMiddleIcon />
          <AlignBottomIcon />
        </div>
      </div>
    </SidebarBox>
  );
};

export default Text;
