import React from 'react'
import { FiUsers, FiActivity, FiShoppingCart, FiDollarSign } from 'react-icons/fi'
import './Dashboard.css'
import TemplateBrowser from './TemplateBrowser'
import TopToolbar from '../components/TopToolbar'

const Dashboard = () => {
  
  const stats = [
    { id: 1, title: 'Total Users', value: '1,254', icon: <FiUsers />, color: '#4361ee' },
    { id: 2, title: 'Active Sessions', value: '432', icon: <FiActivity />, color: '#4895ef' },
    { id: 3, title: 'Total Orders', value: '854', icon: <FiShoppingCart />, color: '#4caf50' },
    { id: 4, title: 'Revenue', value: '$12,543', icon: <FiDollarSign />, color: '#ff9800' }
  ]

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'User', status: 'Active' }
  ]

  return (
    <div className="dashboard">
    
        <TemplateBrowser />

        <div className='toptoolbarDashboard'>
          <TopToolbar />
        </div>
      
     
    </div>
  )
}

export default Dashboard
