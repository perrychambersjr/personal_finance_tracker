"use client"
import { useUserStore } from '@/app/store';
import Image from 'next/image';
import React from 'react';

const AccountInfoForm = () => {
  const { user, updateUser, updateUserAPI } = useUserStore();
  const [editMode, setEditMode] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: user?.name || '',
    birthDate: user?.birthDate || '',
    phoneNumber: user?.phoneNumber || '',
    email: user?.email || '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSave = () => {
    // update store & call API
    const updatedUser = {
        name: formData.name,
        birthDate: formData.birthDate,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
    }

    updateUser(updatedUser);

    updateUserAPI(updatedUser).then(() => {
        alert("User updated successfully!");
    }).catch((error) => {
        console.error("Failed to update user:", error);
    });

    setEditMode(false);
  }

  return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-1">Account Information</h2>
      <p className="text-gray-500 mb-6">Update your account information</p>

      <div className='flex justify-between items-center mb-4'>
        <h3 className='font-semibold text-gray-700'>Personal Information</h3>
        <button
          onClick={() => setEditMode(!editMode)}
          className="text-green-500 font-medium hover:underline"
        >
          {editMode ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          disabled={!editMode}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate?.split('T')[0] || ''}
          onChange={handleChange}
          disabled={!editMode}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          name="phoneNumber"
          placeholder="Mobile Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          disabled={!editMode}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="relative w-full">
          <Image
            src="/Email.svg"
            alt="Email Icon"
            width={20}
            height={20}
            className="absolute top-3 left-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="relative w-full">
          <Image
            src="/lock.svg"
            alt="Lock Icon"
            width={20}
            height={20}
            className="absolute top-3 left-3"
          />
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="relative w-full">
          <Image
            src="/Lock.svg"
            alt="Lock Icon"
            width={20}
            height={20}
            className="absolute top-3 left-3"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {editMode && (
        <button
          onClick={handleSave}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-medium"
        >
          Save
        </button>
      )}
    </div>
  )
}

export default AccountInfoForm