import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from '../components'
import { SignIn, Redirect, Dashboard } from '../screens'

const Main = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="redirect/:data" element={<Redirect />} />
    <Route path="dashboard/*" element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } />
  </Routes>
)

export default Main

