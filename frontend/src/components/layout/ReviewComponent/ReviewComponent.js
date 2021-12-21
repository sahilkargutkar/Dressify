import { Rating } from "@mui/material";
import React from "react";

const ReviewComponent = ({ review, user }) => {
  console.log("user", user);

  return (
    <div>
      <div className="divide-y divide-gray-100">
        <article className="p-4 flex space-x-4">
          <img
            src={user?.avatar.url}
            alt=""
            className="flex-none rounded-full h-14 w-14 object-cover bg-gray-100"
          />
          <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
            <h2 className="text-lg font-semibold text-black mb-0.5">
              {review?.comment}
            </h2>
            <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
              <div>
                <dt className="sr-only">Time</dt>
                <dd>
                  <abbr title={`css minutes`}> </abbr>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Difficulty</dt>
                <dd> by</dd>
              </div>
              <div>
                <dt className="sr-only"></dt>
                <dd> {review?.name}</dd>
              </div>

              <div class="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                <dt className="text-amber-500">
                  <span className="sr-only">Rating</span>
                  <Rating value={review?.rating} />
                </dt>
                <dd></dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ReviewComponent;
