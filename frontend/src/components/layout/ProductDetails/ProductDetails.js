import React, { useEffect, useState, Fragment } from "react";
import toast from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import { Rating } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../../actions/productAction";
import Loader from "../Loader/Loader";
import MetaData from "../MetaData";
import { Dialog, Transition } from "@headlessui/react";
import ReviewComponent from "../ReviewComponent/ReviewComponent";
import { addToCart } from "../../../actions/cartAction";
import { NEW_REVIEW_RESET } from "../../../constants/productConstants";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { user } = useSelector((state) => state.user);

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const options = {
    size: "large",
    value: product?.ratings,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      toast.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }

    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, success, reviewError, error]);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product?.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addToCart(match.params.id, quantity));
    toast.success("Items Added to Cart");
  };

  const submitReviewHandler = () => {
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));
    setIsOpen(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`ClothesNow | ${product?.name}`} />
          <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap">
                {product?.images && product?.images[0]?.url ? (
                  <img
                    alt="ecommerce"
                    class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                    src={product && product?.images[0]?.url}
                  />
                ) : (
                  <img
                    alt="ecommerce"
                    class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                    src=""
                  />
                )}

                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 class="text-sm title-font text-gray-500 tracking-widest">
                    {product?.category}
                  </h2>
                  <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product?.name}
                  </h1>
                  <div class="flex mb-4">
                    <span class="flex items-center">
                      <Rating {...options} />
                      <span class="text-gray-600 ml-3">
                        {product?.numOfReviews} Reviews
                      </span>
                    </span>
                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      <a class="text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p class="leading-relaxed">{product?.description}</p>
                  <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div class="flex">
                      <span class="mr-3">Color</span>
                      <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                    <div class="flex ml-6 items-center">
                      <span class="mr-3">Size</span>
                      <div class="relative">
                        <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="flex">
                    <span class="title-font font-medium text-2xl text-gray-900">
                      {`₹${product?.price}`}
                    </span>

                    <div class="flex flex-row h-10 px-5 mb-2 rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        class=" bg-gray-300 text-gray-600 hover:text-gray-700 font-bold hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
                        onClick={decreaseQuantity}
                      >
                        -
                      </button>
                      <input
                        readOnly
                        type="number"
                        class="w-10 focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black  flex items-center text-gray-700 "
                        value={quantity}
                      />
                      <button
                        data-action="increment"
                        class="bg-gray-300 text-gray-600 hover:text-gray-700 font-bold hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
                        onClick={increaseQuantity}
                      >
                        +
                      </button>
                    </div>
                    <button
                      disabled={product?.Stock < 1 ? true : false}
                      onClick={addToCartHandler}
                      class="flex ml-autos text-white bg-red-500 border-0 py-3 px-6 focus:outline-none hover:bg-red-600 rounded"
                    >
                      Add to Cart
                    </button>
                    {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button> */}
                  </div>
                  <div>
                    <p>
                      Status :
                      <b
                        className={
                          product?.Stock < 1 ? "text-red-600" : "text-green-500"
                        }
                      >
                        {product?.Stock < 1 ? "Out of Stock" : "In Stock"}
                      </b>
                    </p>
                  </div>
                  <button
                    class="mb-2 mt-6 md:mb-0 bg-gray-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full"
                    type="button"
                    aria-label="like"
                    onClick={openModal}
                  >
                    submit review
                  </button>

                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              <h2 class="text-gray-800 text-3xl font-semibold">
                                Your opinion matters to us!
                              </h2>
                            </Dialog.Title>
                            <div class="px-32 mt-3 ">
                              <Rating
                                size="large"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                              />
                            </div>

                            <div class="w-full flex flex-col mt-3">
                              <textarea
                                rows="3"
                                class="p-4 text-black rounded-xl border-2 resize-none"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                              >
                                Great Product !
                              </textarea>
                              <button
                                onClick={submitReviewHandler}
                                class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                              >
                                submit review
                              </button>
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                onClick={closeModal}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
              </div>
            </div>
            <h3 className="text-center font-bold text-lg">Top Reviews</h3>
            <div className=" mx-96">
              {product?.reviews && product?.reviews[0] ? (
                <div>
                  {product?.reviews &&
                    product?.reviews.map((review) => (
                      <ReviewComponent review={review} user={user} />
                    ))}
                </div>
              ) : (
                <div class="justify-center flex">
                  <p className="rounded p-4 border-4 mr-0 font-bold text-xl text-gray-900 border-gray-500 bg-white">
                    No Reviews Yet
                  </p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
