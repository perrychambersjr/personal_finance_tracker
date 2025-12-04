import { ProtectedRoute } from '@/app/components/ProtectedRoute'
import React from 'react'

const InvoicesPage = () => {
  return (
        <ProtectedRoute>
            <h1 className="text-3xl font-bold mb-4">Invoices</h1>
        </ProtectedRoute>
  )
}

export default InvoicesPage