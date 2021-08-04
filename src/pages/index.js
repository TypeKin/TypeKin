import React from 'react';

import { getSession } from 'next-auth/client';

import HomePageNav from '../components/pages/home/HomePageNav';
import NavBar from '../components/pages/home/NavBar';
import ProjectList from '../components/pages/home/ProjectList';

function Home({ session }) {
  return (
    <div>
      <NavBar userSession={session} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomePageNav />
        <ProjectList />
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  };
}

export default Home;
