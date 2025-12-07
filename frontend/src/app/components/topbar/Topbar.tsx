import React from 'react'
import TopbarActions from './TopbarActions'
import TopbarTitle from './TopbarTitle'

const Topbar = () => {
  return (
    <header className="w-full h-16 bg-gray-50 flex items-center justify-between px-6">
      <TopbarTitle />
      <TopbarActions />
    </header>
  )
}

export default Topbar