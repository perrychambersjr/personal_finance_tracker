import React from 'react'
import NotificationButton from '../buttons/NotificationButton'
import SearchButton from '../buttons/SearchButton'
import UserMenu from './UserMenu'

const TopbarActions = () => {
  return (
    <div className="flex items-center gap-4">
        <SearchButton />
        <NotificationButton />
        <UserMenu />
    </div>
  )
}

export default TopbarActions