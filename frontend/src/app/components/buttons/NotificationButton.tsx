import Image from 'next/image'
import React from 'react'

const NotificationButton = () => {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Image src="/notification.svg" alt="Notifications" width={24} height={24} />
    </button>
  )
}

export default NotificationButton