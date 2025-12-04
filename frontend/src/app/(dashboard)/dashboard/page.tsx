import { ProtectedRoute } from '@/app/components/ProtectedRoute'
import React from 'react'

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your finance dashboard</p>
    </ProtectedRoute>
  )
}

export default DashboardPage