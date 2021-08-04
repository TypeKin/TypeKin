import React from 'react';

import Settings from './sections/Settings';
import Canvas from './sections/Canvas';
import Text from './sections/Text';

const Sidebar = () => {
  return (
    <div className="fixed p-6 top-0 bottom-0 right-0 z-10 overflow-scroll">
      <div className="flex flex-col space-y-2">
        <Settings />
        <Canvas />
        <Text />
      </div>
    </div>
  );
};

export default Sidebar;
