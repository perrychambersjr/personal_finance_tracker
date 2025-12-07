import Image from 'next/image'
import React from 'react'

const SearchButton = () => {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Image src="/search.svg" alt="Search" width={24} height={24} />
    </button>
  )
}

export default SearchButton