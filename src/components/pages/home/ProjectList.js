import React from 'react';

import Project from './Project';

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      name: 'Cool Project'
    },
    {
      id: 2,
      name: 'A Project'
    },
    {
      id: 3,
      name: 'TypeKin'
    },
    {
      id: 4,
      name: 'Google Stuff'
    },
    {
      id: 5,
      name: 'A Thing'
    },
    {
      id: 6,
      name: 'Yes'
    },
    {
      id: 7,
      name: 'No'
    },
    {
      id: 8,
      name: 'Maybe'
    },
    {
      id: 9,
      name: 'So'
    },
    {
      id: 10,
      name: 'Okay'
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 pt-8">
        {projects.map(project => {
          return <Project name={project.name} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectList;
