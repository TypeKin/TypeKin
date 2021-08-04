import React from 'react';

import Sidebar from '../components/pages/editor/Sidebar';
import Filename from '../components/pages/editor/Filename';

const Editor = () => {
  return (
    <div>
      <div className="p-4 fixed">
        <Filename />
      </div>
      <Sidebar />
      <div className="w-screen h-screen flex justify-center items-center text-white">
        <div>Text Here</div>
      </div>
    </div>
  );
};

export default Editor;
