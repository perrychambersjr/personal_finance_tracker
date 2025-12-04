import { ProtectedRoute } from '@/app/components/ProtectedRoute'
import React from 'react'

const BudgetsPage = () => {
  return (
    <ProtectedRoute>
        <h1 className="text-3xl font-bold mb-4">Budgets</h1>
    </ProtectedRoute>
  )
}

export default BudgetsPage