import { ProtectedRoute } from '@/app/components/ProtectedRoute'
import React from 'react'

const GoalsPage = () => {
  return (
        <ProtectedRoute>
            <h1 className="text-3xl font-bold mb-4">Goals</h1>
        </ProtectedRoute>
  )
}

export default GoalsPage