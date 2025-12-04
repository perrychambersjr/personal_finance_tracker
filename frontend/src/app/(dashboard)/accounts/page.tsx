import { ProtectedRoute } from '@/app/components/ProtectedRoute'
import React from 'react'

const AccountsPage = () => {
  return (
        <ProtectedRoute>
            <h1 className="text-3xl font-bold mb-4">Accounts</h1>
        </ProtectedRoute>
  )
}

export default AccountsPage