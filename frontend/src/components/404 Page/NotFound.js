import React from "react";

const NotFound = () => {
  return (
    <div>
      <div class="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src="https://media.istockphoto.com/photos/astronaut-on-foreign-planet-in-front-of-spacetime-portal-light-picture-id1305960650?b=1&k=20&m=1305960650&s=170667a&w=0&h=bMyBB1S4cl1xe83ZDVy37lc-SdELIYPe472VXRuCVw8="
          class="absolute h-full w-full object-cover"
        />
        <div class="inset-0 bg-black opacity-25 absolute"></div>
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div class="w-full font-mono flex flex-col items-center relative z-10">
            <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You&#x27;re alone here
            </h1>
            <p class="font-extrabold text-8xl my-44 text-white animate-bounce">
              404
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
