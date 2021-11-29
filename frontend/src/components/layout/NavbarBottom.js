import React from "react";

const NavbarBottom = () => {
  return (
    <div class="bg-gray-100 flex px-5 pt-96">
      <div class="w-full max-w-md mx-auto">
        <div class="px-7 bg-white shadow-lg rounded-2xl mb-5">
          <div class="flex">
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                  <i class="far fa-home text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Home
                  </span>
                </span>
              </a>
            </div>
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                  <i class="far fa-compass text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Explore
                  </span>
                </span>
              </a>
            </div>
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                  <i class="far fa-search text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Search
                  </span>
                </span>
              </a>
            </div>
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                  <i class="far fa-cog text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Settings
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
