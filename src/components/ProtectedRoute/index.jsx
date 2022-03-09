import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const { auth: { userData } } = useSelector(state => state)
  const { access_token } = userData

  if (!access_token) return <Navigate to="/" replace />
  return children;
}

export default ProtectedRoute