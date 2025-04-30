import React, { useState } from "react";

const Help_center = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "You can track your order status in the 'Track Order' section of the app. You'll see real-time updates as your order is processed.",
    },
    {
      question: "How do I cancel my order?",
      answer:
        "To cancel your order, go to the 'Order Details' and click 'Cancel Order' within 10 minutes of placing it. After that, cancellations are not possible.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Credit/Debit cards, UPI, Net Banking, and Cash on Delivery for all orders.",
    },
    {
      question: "How do I change my account information?",
      answer:
        "You can update your profile information and change your password from the 'Profile' page in the app settings.",
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Help Center</h2>

        {/* Search Bar */}
        <div className="mb-6 flex items-center bg-gray-200 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search Help Topics"
            className="w-full bg-transparent border-none outline-none text-gray-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          {filteredFaqs.length === 0 ? (
            <p className="text-center text-gray-600">No results found for your query.</p>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-700">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))
          )}
        </div>

        {/* Contact Form */}
        <div className="mt-8 bg-blue-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Need Assistance?</h3>
          <p className="text-gray-600 mb-4">
            If you can't find the answer, please fill out the form below, and we'll get back to you ASAP.
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-white rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-white rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-white rounded-lg shadow-sm"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help_center;
