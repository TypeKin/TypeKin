import React, { useState } from 'react';

const NavBar = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto"
                src="/images/logo/icon-logo.png"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="/images/logo/type-logo.png"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  to="/"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Community
                </a>
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div>
                  <button
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/images/profile/placeholder-profile.jpeg"
                    />
                  </button>
                </div>
                <div
                  className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${
                    !profileMenuOpen ? 'opacity-0' : ''
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
