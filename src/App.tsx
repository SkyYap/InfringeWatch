import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import DataLabelling from './pages/DataLabelling'
import Rewards from './pages/Rewards'
import ReferralProgram from './pages/ReferralProgram'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/data-labelling" element={<DataLabelling />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/referral" element={<ReferralProgram />} />
      </Routes>
    </Layout>
  )
}

export default App