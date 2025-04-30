import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation within the app

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("orders");

  // Dummy data for orders, restaurants, and users
  const orders = [
    { id: 1, user: "John Doe", items: "Pizza, Pasta", status: "Confirmed" },
    { id: 2, user: "Jane Smith", items: "Burger, Fries", status: "Out for Delivery" },
    { id: 3, user: "Sam Wilson", items: "Sushi, Miso Soup", status: "Delivered" },
  ];

  const restaurants = [
    { name: "Pasta Palace", location: "New York", dishes: 15 },
    { name: "Burger House", location: "Los Angeles", dishes: 20 },
    { name: "Sushi Spot", location: "San Francisco", dishes: 10 },
  ];

  const users = [
    { username: "John Doe", email: "john@example.com", role: "User" },
    { username: "Jane Smith", email: "jane@example.com", role: "User" },
    { username: "Admin", email: "admin@example.com", role: "Admin" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
        <div className="space-y-4">
          <button
            className={`w-full text-left py-2 px-4 rounded-lg ${activeTab === "orders" ? "bg-blue-500" : "bg-blue-600"}`}
            onClick={() => handleTabClick("orders")}
          >
            Orders
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded-lg ${activeTab === "restaurants" ? "bg-blue-500" : "bg-blue-600"}`}
            onClick={() => handleTabClick("restaurants")}
          >
            Restaurants
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded-lg ${activeTab === "users" ? "bg-blue-500" : "bg-blue-600"}`}
            onClick={() => handleTabClick("users")}
          >
            Users
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded-lg ${activeTab === "settings" ? "bg-blue-500" : "bg-blue-600"}`}
            onClick={() => handleTabClick("settings")}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 ml-8">
        {activeTab === "orders" && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Order Management</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2 text-left">User</th>
                  <th className="px-4 py-2 text-left">Items</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.user}</td>
                    <td className="px-4 py-2">{order.items}</td>
                    <td className="px-4 py-2">{order.status}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "restaurants" && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Restaurant Management</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Location</th>
                  <th className="px-4 py-2 text-left">Dishes</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{restaurant.name}</td>
                    <td className="px-4 py-2">{restaurant.location}</td>
                    <td className="px-4 py-2">{restaurant.dishes}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "users" && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">User Management</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Username</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{user.username}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.role}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Settings</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">App Name</label>
                <input type="text" className="w-full p-3 border rounded-lg mt-2" placeholder="App Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Support Email</label>
                <input type="email" className="w-full p-3 border rounded-lg mt-2" placeholder="Support Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">App Version</label>
                <input type="text" className="w-full p-3 border rounded-lg mt-2" placeholder="Version" />
              </div>
              <button className="w-full bg-blue-600 text-white p-3 rounded-lg mt-4 hover:bg-blue-700">
                Save Settings
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
