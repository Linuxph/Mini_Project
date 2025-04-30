import React, { useState, useEffect } from "react";

const Tracking = () => {
  const [orderStatus, setOrderStatus] = useState("Confirmed");
  const [orderTime, setOrderTime] = useState("12:30 PM");
  const [deliveryTime, setDeliveryTime] = useState("45 minutes");

  useEffect(() => {
    // Simulate real-time order status updates
    const timer = setInterval(() => {
      setOrderStatus(prevStatus => {
        if (prevStatus === "Confirmed") return "Out for Delivery";
        if (prevStatus === "Out for Delivery") return "Delivered";
        return prevStatus;
      });
    }, 5000); // Change status every 5 seconds

    return () => clearInterval(timer); // Clean up timer when component unmounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Track Your Order</h2>

        {/* Order Status */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-2xl font-semibold">
            {orderStatus[0]}
          </div>
          <h3 className="text-lg mt-4">{orderStatus}</h3>
          <p className="text-gray-600">Order Placed at {orderTime}</p>
          <p className="text-gray-600">Estimated Delivery: {deliveryTime}</p>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-gray-200 rounded-full mb-6">
          <div
            className={`absolute top-0 left-0 h-2 rounded-full bg-blue-500 transition-all`}
            style={{
              width: orderStatus === "Confirmed" ? "33%" : orderStatus === "Out for Delivery" ? "66%" : "100%",
            }}
          ></div>
        </div>

        {/* Tracking Info */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="ml-4 text-gray-600">Order Confirmed</span>
            </div>
            <span className="text-gray-600">{orderTime}</span>
          </div>
          {orderStatus === "Out for Delivery" && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="ml-4 text-gray-600">Out for Delivery</span>
              </div>
              <span className="text-gray-600">{deliveryTime}</span>
            </div>
          )}
          {orderStatus === "Delivered" && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="ml-4 text-gray-600">Delivered</span>
              </div>
              <span className="text-gray-600">At {deliveryTime}</span>
            </div>
          )}
        </div>

        {/* Map (Optional) */}
        {orderStatus === "Out for Delivery" && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center text-gray-700">Track on Map</h3>
            <div className="h-64 bg-gray-300 rounded-lg">
              {/* This can be integrated with a map API */}
              <p className="text-center text-gray-600 pt-28">Map Placeholder</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
