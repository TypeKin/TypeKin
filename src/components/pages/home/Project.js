import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired
};

const Project = ({ name }) => {
  return (
    <div>
      <div className="border-gray-border border-opacity-30 border text-white rounded overflow-hidden">
        <div className="h-32"></div>
        <div className="bg-gray-dark p-4">
          <div>{name}</div>
          <div className="text-xs text-gray-500">Edited 1m ago</div>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = propTypes;

export default Project;
