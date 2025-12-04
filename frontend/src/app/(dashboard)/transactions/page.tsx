import { ProtectedRoute } from '@/app/components/ProtectedRoute'
import React from 'react'

const TransactionsPage = () => {
  return (
    <ProtectedRoute>
        <h1 className="text-3xl font-bold mb-4">Transactions</h1>
    </ProtectedRoute>
  )
}

export default TransactionsPage