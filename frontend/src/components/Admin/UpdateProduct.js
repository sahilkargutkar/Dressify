import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductDetails,
  updateProduct,
  clearErrors,
} from "../../actions/productAction";
import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";
import Loader from "../layout/Loader/Loader";

const UpdateProduct = ({ history, match }) => {
  const dispatch = useDispatch();

  const { error, product } = useSelector((state) => state.productDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  const productId = match.params.id;

  const createProductSubmit = (e) => {
    e.stopPropagation();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProduct(productId, myForm));
  };

  const createProductImge = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setName(product?.name);
      setDescription(product?.description);
      setPrice(product?.price);
      setCategory(product?.category);
      setStock(product?.Stock);
      setOldImages(product?.images);
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Product Updated Successfully");
      history.push("/admin/products");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [
    updateError,
    dispatch,
    history,
    isUpdated,
    error,
    toast,
    product,
    productId,
  ]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div class=" bg-gray-100 py-6  justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div class="max-w-md mx-auto">
                  <div class="flex items-center space-x-5">
                    <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                      i
                    </div>
                    <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                      <h2 class="leading-relaxed">Update Product</h2>
                      <p class="text-sm text-gray-500 font-normal leading-relaxed">
                        This product will be added into the website
                      </p>
                    </div>
                  </div>
                  <form
                    class="divide-y divide-gray-200"
                    encType="multipart/form-data"
                    onSubmit={createProductSubmit}
                  >
                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div class="flex flex-col">
                        <label class="leading-loose">Product Name</label>
                        <input
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Event title"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Product Description</label>
                        <input
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Category</label>
                        {/* <input
                      type="text"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Choose"
                    /> */}
                        <select
                          value={category}
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Choose Category</option>
                          {categories.map((cate) => (
                            <option key={cate} value={cate}>
                              {cate}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="flex flex-col">
                          <label class="leading-loose">Price</label>
                          <div class="relative focus-within:text-gray-600 text-gray-400">
                            <input
                              type="number"
                              class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="1500"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                            <div class="absolute left-3 top-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <label class="leading-loose">Stock</label>
                          <div class="relative focus-within:text-gray-600 text-gray-400">
                            <input
                              type="number"
                              class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="5"
                              value={Stock}
                              onChange={(e) => setStock(e.target.value)}
                            />
                            <div class="absolute left-3 top-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Product Image</label>
                        <input
                          type="file"
                          name="avatar"
                          accept="image/*"
                          multiple
                          onChange={createProductImge}
                          class="px-2 py-2  bg-blue-600 rounded-md text-white "
                        />
                      </div>
                      <h1 class="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                        To Upload
                      </h1>
                      <span class="flex flex-row overflow-auto">
                        {oldImages.map((image, index) => {
                          return (
                            <>
                              <img
                                key={index}
                                src={image.url}
                                alt="Old Image Preview"
                              />
                            </>
                          );
                        })}
                      </span>

                      <span class="flex flex-row overflow-auto">
                        {imagesPreview.map((image, index) => {
                          return (
                            <>
                              <img
                                key={index}
                                src={image}
                                alt="Product Preview"
                              />
                            </>
                          );
                        })}
                      </span>

                      {/* <img
                           class="mx-auto w-32"
                        src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                       alt="no data"
                      />
                          <span class="text-small text-gray-500">
                            No files selected
                          </span> */}
                    </div>
                    <div class="pt-4 flex items-center space-x-4">
                      <button
                        type="submit"
                        class="bg-black flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                        disabled={loading ? true : false}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UpdateProduct;
