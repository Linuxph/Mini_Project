import React, { useState } from 'react'


const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handlePersonalChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordInfo({ ...passwordInfo, [e.target.name]: e.target.value });
  };

  const handleSavePersonalInfo = () => {
    // TODO: Implement save personal info logic
    console.log('Saving personal info', personalInfo);
  };

  const handleChangePassword = () => {
    // TODO: Implement change password logic
    console.log('Changing password', passwordInfo);
  };

  const handleLogout = () => {
    // TODO: Implement logout logic (clear tokens, redirect to login page)
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Profile Settings</h2>

        {/* Personal Info */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Personal Information</h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={personalInfo.name}
              onChange={handlePersonalChange}
              placeholder="Full Name"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={personalInfo.email}
              onChange={handlePersonalChange}
              placeholder="Email Address"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              value={personalInfo.phone}
              onChange={handlePersonalChange}
              placeholder="Phone Number"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSavePersonalInfo}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition mt-2"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8" />

        {/* Change Password */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Change Password</h3>
          <div className="flex flex-col gap-4">
            <input
              type="password"
              name="currentPassword"
              value={passwordInfo.currentPassword}
              onChange={handlePasswordChange}
              placeholder="Current Password"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="newPassword"
              value={passwordInfo.newPassword}
              onChange={handlePasswordChange}
              placeholder="New Password"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="confirmNewPassword"
              value={passwordInfo.confirmNewPassword}
              onChange={handlePasswordChange}
              placeholder="Confirm New Password"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleChangePassword}
              className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition mt-2"
            >
              Update Password
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8" />

        {/* Logout Button */}
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-6 rounded-full transition text-lg"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  )

}

export default Profile