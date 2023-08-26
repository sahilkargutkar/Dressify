import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../actions/productAction";
import Loader from "../Loader/Loader";
import { Popover, Transition } from "@headlessui/react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Card from "../Card/Card";
import Pagination from "react-js-pagination";
import { useHistory } from "react-router";
import toast from "react-hot-toast";
import MetaData from "../MetaData";

const categories = [
  "Laptop",
  "Footwear",
  "Bottomwear",
  "Tops",
  "Attire",
  "Jacket",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const clearFilters = () => {
    window.location.reload();
  };

  const keyword = match.params.keyword;

  const priceRangeUpdate = useCallback(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category));
  }, [keyword, currentPage, price, category, error]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage));
  }, [dispatch, keyword, currentPage, error]);

  let count = filteredProductsCount;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="ClothesNow | PRODUCTS" />
          <div class="my-8">
            <div class="container mx-auto px-6">
              <div class="mt-16">
                <h3 class="text-gray-600 text-2xl font-medium">Products</h3>
                <div></div>
                <Popover>
                  {({ open }) => (
                    <>
                      <span className="rounded-md shadow-sm relative flex flex-row-reverse">
                        <Popover.Button className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                          <span>Filter</span>
                          <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Popover.Button>
                      </span>

                      <Transition
                        show={open}
                        className="relative flex flex-row-reverse z-10 w-screen max-w-sm px-4 mt-3 left-1/2 sm:px-0 lg:max-w-xl"
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel
                          static
                          className="right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                        >
                          <div className="px-11 py-3">
                            <div className="text-sm leading-5 px-5 text-center">
                              Price Range
                            </div>
                          </div>

                          <div className="py-1">
                            <Popover.Panel>
                              {({ active }) => (
                                <div
                                  href="#account-settings"
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                  <Box sx={{ width: 300 }}>
                                    <Slider
                                      value={price}
                                      onChange={priceHandler}
                                      valueLabelDisplay="auto"
                                      aria-labelledby="range-slider"
                                      min={0}
                                      max={25000}
                                    />
                                  </Box>
                                </div>
                              )}
                            </Popover.Panel>
                          </div>
                          <div>
                            <div className="text-sm leading-5 px-5 text-center">
                              Category
                            </div>
                            <Popover.Panel>
                              {({ active }) => (
                                <div
                                  href="#account-settings"
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                  <ul className="">
                                    {categories.map((category) => (
                                      <li
                                        className="items-center list-none cursor-pointer transform delay-300 hover:text-blue-600"
                                        key={category}
                                        onClick={() => {
                                          setCategory(category);
                                        }}
                                      >
                                        <input type="checkbox" />
                                        {category}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </Popover.Panel>
                          </div>

                          <button
                            onClick={priceRangeUpdate}
                            className="text-white px-1 py-1 rounded-lg bg-blue-500 shadow-lg block md:inline-block"
                          >
                            Apply
                          </button>
                          <span className=""> </span>
                          <button
                            onClick={clearFilters}
                            className="text-white px-1 py-1 rounded-lg bg-red-500 shadow-lg block md:inline-block"
                          >
                            Clear
                          </button>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                  {products && products.length > 0 ? (
                    products?.map((product, index) => {
                      console.log(products, "products from home ");
                      return (
                        <>
                          <Card product={product} id={index} />
                        </>
                      );
                    })
                  ) : (
                    <>
                      <Loader />
                    </>
                  )}
                </div>
              </div>
            </div>
            {resultPerPage < count && (
              <div className="flex justify-center my-12">
                <Pagination
                  innerClass="flex justify-center p-0"
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  lastPageText="Last"
                  itemClass=" border-black border-solid rounded-sm delay-300 bg-white text-black"
                  linkClass="flex w-10 h-10 mr-1 justify-center items-center rounded-full  border-black  text-black hover:bg-black hover:text-white "
                  activeClass=" md:flex w-10 h-10 justify-center items-center rounded-full border-black bg-black text-white pointer-events-none"
                  activeLinkClass="flex w-10 h-10 justify-center items-center rounded-full border-gray-200 bg-black text-white hover:border-gray-300"
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
