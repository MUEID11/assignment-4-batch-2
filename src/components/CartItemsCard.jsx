import React from "react";

const CartItemsCard = ({ className, cartItems, onDelete }) => {

  return (
    <div className={`p-4 bg-white shadow rounded z-50  ${className}`}>
      <h2 className="text-xl font-semibold mb-4">Your Cart </h2>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-12 rounded mr-6"
                />
                <span className="text-gray-500 font-medium">{item.title}</span>
              </div>
              <button
                onClick={() => onDelete(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <svg
                  className="h-5 -mr-3"
                  fill="#ff3d3d"
                  width="64px"
                  height="64px"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ff3d3d"
                  strokeWidth="0.00024000000000000003"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="1.8240000000000003"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.117L5.008,22.124A1,1,0,0,0,6,23H18a1,1,0,0,0,.992-.876L20.883,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm8.117,18H6.883L5.133,7H18.867Z"></path>
                  </g>
                </svg>
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartItemsCard;
