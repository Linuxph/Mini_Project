import React, { useState } from "react";

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const paymentMethods = [
    { id: 1, name: "Credit/Debit Card", icon: "💳" },
    { id: 2, name: "UPI", icon: "📱" },
    { id: 3, name: "Net Banking", icon: "💻" },
    { id: 4, name: "Cash on Delivery", icon: "💵" },
  ];

  const handlePayment = () => {
    alert(`Proceeding with ${selectedPaymentMethod}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Payment Options</h2>

        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer border-2 ${selectedPaymentMethod === method.name ? "bg-blue-500 text-white" : "bg-white text-gray-700"} hover:bg-blue-100 hover:text-white transition`}
              onClick={() => setSelectedPaymentMethod(method.name)}
            >
              <span className="text-xl">{method.icon}</span>
              <span className="text-lg font-semibold">{method.name}</span>
            </div>
          ))}
        </div>

        {/* Proceed to Payment Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePayment}
            disabled={!selectedPaymentMethod}
            className={`py-3 px-6 rounded-lg text-lg font-semibold ${!selectedPaymentMethod ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"} transition`}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
