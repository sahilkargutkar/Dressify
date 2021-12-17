import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartAction";

const CartItems = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItemsFromCart,
}) => {
  const dispatch = useDispatch();
  console.log("scacm", item);

  const { cartItems } = useSelector((state) => state.cart);

  const { id, quantity, stock } = item;

  return (
    <>
      <div>
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5">
            <div class="w-20">
              <img class="h-24" src={item?.image} alt="Product Image" />
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{item?.name}</span>
              <span class="text-red-500 text-xs">Apple</span>
              <button
                onClick={() => removeItemsFromCart(item?.product)}
                class="font-semibold hover:text-red-500 text-gray-500 pr-56 text-xs"
              >
                Remove
              </button>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <button
              class="fill-current text-gray-600 w-3"
              onClick={() => decreaseQuantity(item.product, item.quantity)}
            >
              -
            </button>

            <input
              class="mx-2 border text-center w-8"
              type="text"
              value={item?.quantity}
            />

            <button
              onClick={() =>
                increaseQuantity(item.product, item.quantity, item.stock)
              }
              class="fill-current text-gray-600 w-3"
            >
              +
            </button>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">
            {` ₹${item?.price}`}
          </span>
          <span class="text-center w-1/5 font-semibold text-sm">{`₹${
            item?.price * item?.quantity
          }`}</span>
        </div>
      </div>
    </>
  );
};

export default CartItems;
