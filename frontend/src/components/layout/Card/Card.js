import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const Card = (props) => {
  const { product } = props;

  console.log(product, "someprops");

  const options = {
    size: "medium",
    value: product?.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div>
      <Link to={`/product/${product?._id}`}>
        <div class="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
          <img
            class="h-56 rounded-t-lg"
            alt="article image"
            src={product?.images[0].url}
          />
          <div class="px-6 pt-4 mb-2 text-xl font-bold">{product?.name}</div>
          <div class="relative text-xl px-6 pb-6 mt-6">
            <span class="flex  opacity-75 -mb-1">
              <Rating {...options} />
              <span className="pl-2 text-lg">{product?.numOfReviews}</span>
            </span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">
                {product?.description}
              </span>
              <span>
                <span class=" bg-black rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">
                  <span>₹</span>
                  {product?.price}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>

    // <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
    //   <svg
    //     class="absolute bottom-0 left-0 mb-8"
    //     viewBox="0 0 375 283"
    //     fill="none"
    //     // style="transform: scale(1.5); opacity: 0.1;"
    //   >
    //     <rect
    //       x="159.52"
    //       y="175"
    //       width="152"
    //       height="152"
    //       rx="8"
    //       transform="rotate(-45 159.52 175)"
    //       fill="white"
    //     />
    //     <rect
    //       y="107.48"
    //       width="152"
    //       height="152"
    //       rx="8"
    //       transform="rotate(-45 0 107.48)"
    //       fill="white"
    //     />
    //   </svg>
    //   <div class="relative pt-10 px-10 flex items-center justify-center">
    //     <div
    //       class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
    //       //   style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
    //     ></div>
    //     <img
    //       class="relative w-40"
    //       src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
    //       alt=""
    //     />
    //   </div>

    // </div>
  );
};

export default Card;
