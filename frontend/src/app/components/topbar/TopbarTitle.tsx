"use client"

import { usePathname } from 'next/navigation';
import React from 'react';

const TopbarTitle = () => {
   const pathname = usePathname();

   const title = pathname
    .split('/')
    .filter(Boolean)
    .pop()

    const formatted = title
    ? title.charAt(0).toUpperCase() + title.slice(1)
    : "";
  
    return (
    <h1 className="text-xl font-semibold text-gray-900">
      {formatted}
    </h1>
  )
}

export default TopbarTitle