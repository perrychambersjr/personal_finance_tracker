import { ProtectedRoute } from '@/app/components/ProtectedRoute'
import React from 'react'

const SettingsPage = () => {
  return (
    <ProtectedRoute>
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
    </ProtectedRoute>
  )
}

export default SettingsPage