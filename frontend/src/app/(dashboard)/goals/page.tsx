import { ProtectedRoute } from '@/app/components/ProtectedRoute'
import GoalsContent from './components/GoalsPage'

const GoalsPage = () => {
  return (
    <ProtectedRoute>
      <GoalsContent />
    </ProtectedRoute>
  )
}

export default GoalsPage