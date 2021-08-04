import React from 'react';

import SidebarBox from '../fragments/SidebarBox';

import CanvasIcon from '../../../../../assets/icons/canvas.svg';
import ChainLinkIcon from '../../../../../assets/icons/chain_link.svg';
import SwatchesIcon from '../../../../../assets/icons/swatches.svg';

const Canvas = () => {
  return (
    <SidebarBox glyph={<CanvasIcon />} title="Canvas">
      <div className="bg-gray-dark py-2 px-4 flex justify-between space-x-2  border-b border-gray">
        <div className="flex space-x-5 text-xs text-gray-light items-center">
          <div>H&nbsp;&nbsp;1920</div>
          <div>W&nbsp;&nbsp;1080</div>
          <ChainLinkIcon />
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <div>Browser Size</div>
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="h-4 w-4 border-gray-300 text-black rounded"
            defaultChecked
          />
        </div>
      </div>
      <div className="bg-gray-dark py-2 px-4 flex justify-between items-center">
        <div className="text-sm">Color</div>
        <div className="flex items-center">
          <div className="flex">
            <button className="bg-black rounded-l-md px-4">&nbsp;</button>
            <input
              className="bg-gray rounded-r-md p-2 text-sm font-medium text-white w-36 text-center"
              defaultValue="#000000"
            />
          </div>
          <SwatchesIcon />
        </div>
      </div>
    </SidebarBox>
  );
};

export default Canvas;
