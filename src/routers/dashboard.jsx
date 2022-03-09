import { Routes, Route } from 'react-router-dom'
import { ActivitiesTable, MonthlySection } from '../components'

const DashboardRouter = () => (
  <Routes>
    <Route path="/" element={<ActivitiesTable />} />
    <Route path="/monthly" element={<MonthlySection />} />
  </Routes>
)

export default DashboardRouter