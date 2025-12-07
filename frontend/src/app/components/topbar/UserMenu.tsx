"use client"
import Image from 'next/image'
import React from 'react'
const UserMenu = () => {
  return (
    <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200">
      <Image src="/Avatar.svg" alt="User Menu" width={32} height={32} className="rounded-full" />

      <span className="text-sm font-medium text-gray-800">
        Mahfuzul Nabil
      </span>

      <Image src="/Chevron_Down.svg" alt="Dropdown" width={12} height={12} />
    </button>
  )
}

export default UserMenu