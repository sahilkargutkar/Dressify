import React, { useEffect } from "react";
import Card from "../layout/Card/Card";
// import Carousal from "../layout/Carousal/Carousal";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  const buttonClick = () => {
    toast.success("successful");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <MetaData title="ClothesNow | Home Page" />
          <main class="my-8">
            <div class="container mx-auto px-6">
              <div
                class="h-64 rounded-md overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144" +
                    ")",
                }}
              >
                <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                  <div class="px-10 max-w-xl">
                    <h2 class="text-2xl text-white font-semibold">Clothing</h2>
                    <p class="mt-2 text-gray-400">
                      Carefully selected special range of clothing just for you
                    </p>
                    <Link to="/products">
                      <button class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Shop Now
                        <svg
                          class="h-5 w-5 mx-2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="md:flex mt-8 md:-mx-4">
                <div
                  class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" +
                      ")",
                  }}
                >
                  <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div class="px-10 max-w-xl">
                      <h2 class="text-2xl text-white font-semibold">
                        Back Pack
                      </h2>
                      <p class="mt-2 text-gray-400">
                        A wide range of backpacks customizeable to your demand
                      </p>
                      <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                        <Link to="/products">
                          <span>Shop Now</span>
                        </Link>
                        <svg
                          class="h-5 w-5 mx-2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
                  style={{
                    backgroundImage:
                      " url(" +
                      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" +
                      ")",
                  }}
                >
                  <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div class="px-10 max-w-xl">
                      <h2 class="text-2xl text-white font-semibold">
                        Electronics
                      </h2>
                      <p class="mt-2 text-gray-400">
                        Bored of the usual stuff check our advanced gadgets here
                      </p>
                      <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                        <Link to="/products">
                          <span>Shop Now</span>
                        </Link>
                        <svg
                          class="h-5 w-5 mx-2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-16">
                <h3 class="text-gray-600 text-2xl font-medium">Fashions</h3>
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

              {/* <div class="mt-16">
                <h3 class="text-gray-600 text-2xl font-medium">Fashions</h3>
                <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                  <Card />
                </div>
              </div> */}
            </div>
          </main>
        </React.Fragment>
      )}
    </>
  );
};

export default Home;
