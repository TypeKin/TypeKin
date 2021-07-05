import React from 'react';

import HomePageNav from '../components/pages/home/HomePageNav';
import NavBar from '../components/pages/home/NavBar';
import ProjectList from '../components/pages/home/ProjectList';

function Home() {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomePageNav />
        <ProjectList />
      </div>
    </div>
  );
}

export default Home;
