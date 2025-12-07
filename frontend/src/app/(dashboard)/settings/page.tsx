import { ProtectedRoute } from '@/app/components/ProtectedRoute'
import React from 'react'
import AccountInfoForm from './components/AccountInfoForm'

const SettingsPage = () => {
  return (
    <ProtectedRoute>
        <AccountInfoForm />
    </ProtectedRoute>
  )
}

export default SettingsPage