import React from "react";

const Order = () => {
  const item = {
    name: "Delicious Burger",
    image: "your-food-image.jpg",
    price: 199,
    quantity: 2,
    total: 199 * 2,
  };

  const deliveryInfo = {
    address: "123, Street Name, City",
    deliveryTime: "30 - 45 minutes",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center">
      {/* Order Summary */}
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Order Summary</h2>

        {/* Food Item */}
        <div className="flex gap-4 mb-6">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-gray-600">Price: ₹{item.price}</p>
          </div>
        </div>

        {/* Order Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Order Details</h3>
          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p>₹{item.total}</p>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <p>Delivery Fee</p>
            <p>₹30</p>
          </div>
          <div className="flex justify-between text-gray-700 font-bold mt-4">
            <p>Total</p>
            <p>₹{item.total + 30}</p>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Delivery Information</h3>
          <p className="text-gray-600">Address: {deliveryInfo.address}</p>
          <p className="text-gray-600">Estimated Delivery Time: {deliveryInfo.deliveryTime}</p>
        </div>

        {/* Proceed to Payment Button */}
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition">
            Proceed to Payment
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-10 w-full max-w-2xl">
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">You Might Also Like</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <div className="w-36 bg-white rounded-xl shadow-md overflow-hidden">
            <img src="your-suggested-image1.jpg" alt="Dish 1" className="w-full h-24 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Cheesy Pizza</h4>
              <p className="text-gray-600">₹150</p>
            </div>
          </div>
          <div className="w-36 bg-white rounded-xl shadow-md overflow-hidden">
            <img src="your-suggested-image2.jpg" alt="Dish 2" className="w-full h-24 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Pasta</h4>
              <p className="text-gray-600">₹120</p>
            </div>
          </div>
          <div className="w-36 bg-white rounded-xl shadow-md overflow-hidden">
            <img src="your-suggested-image3.jpg" alt="Dish 3" className="w-full h-24 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Salad</h4>
              <p className="text-gray-600">₹100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
