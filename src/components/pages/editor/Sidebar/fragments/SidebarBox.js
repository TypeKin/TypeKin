import React, { useState } from 'react';

import ChevronUpIcon from '../../../../../assets/icons/chevron_up.svg';

const SidebarBox = ({ children, title, glyph }) => {
  const [showChildren, setShowChildren] = useState(true);

  return (
    <div className="w-sidebar-box rounded-lg border border-gray text-white overflow-hidden">
      <div
        className={`bg-gray-darkest py-2 px-4 flex justify-between border-gray ${
          showChildren ? 'border-b' : ''
        }`}
      >
        <div className="flex">
          {glyph}
          <div className="pl-4">{title}</div>
        </div>
        <ChevronUpIcon
          onClick={() => setShowChildren(!showChildren)}
          transform={`rotate(${showChildren ? '0' : '180'})`}
        />
      </div>
      {showChildren && children}
    </div>
  );
};

export default SidebarBox;
