import React, { useState } from 'react'
import { FiEdit2, FiTrash2, FiPlus, FiSearch } from 'react-icons/fi'
import Card from '../components/Card'
import Button from '../components/Button'
import './UserManagement.css'

const UserManagement = () => {

  const initialUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-07-15 09:23' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Active', lastLogin: '2023-07-14 14:05' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-07-10 11:30' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'User', status: 'Active', lastLogin: '2023-07-15 08:45' },
    { id: 5, name: 'Michael Wilson', email: 'michael@example.com', role: 'Editor', status: 'Active', lastLogin: '2023-07-14 16:20' },
    { id: 6, name: 'Sarah Brown', email: 'sarah@example.com', role: 'User', status: 'Active', lastLogin: '2023-07-13 10:15' },
    { id: 7, name: 'David Miller', email: 'david@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-07-05 09:30' },
    { id: 8, name: 'Lisa Anderson', email: 'lisa@example.com', role: 'User', status: 'Active', lastLogin: '2023-07-15 11:45' }
  ]

  const [users, setUsers] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '', role: 'User', status: 'Active' })
  const [isEditing, setIsEditing] = useState(false)

  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const openAddModal = () => {
    setCurrentUser({ id: null, name: '', email: '', role: 'User', status: 'Active' })
    setIsEditing(false)
    setShowModal(true)
  }

  const openEditModal = (user) => {
    setCurrentUser({ ...user })
    setIsEditing(true)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentUser({ ...currentUser, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (isEditing) {
      setUsers(users.map(user => 
        user.id === currentUser.id ? { ...currentUser } : user
      ))
    } else {
      const newUser = {
        ...currentUser,
        id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
        lastLogin: 'Never'
      }
      setUsers([...users, newUser])
    }
    
    closeModal()
  }

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id))
    }
  }

  return (
    <div className="user-management">
      <div className="page-header">
        <h1 className="page-title">User Management</h1>
        <Button onClick={openAddModal} variant="primary">
          <FiPlus className="btn-icon" /> Add User
        </Button>
      </div>
      
      <Card>
        <div className="filters">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search users..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className={`status-badge ${user.status.toLowerCase()}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{user.lastLogin}</td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="action-btn edit" 
                          onClick={() => openEditModal(user)}
                          title="Edit User"
                        >
                          <FiEdit2 />
                        </button>
                        <button 
                          className="action-btn delete" 
                          onClick={() => handleDeleteUser(user.id)}
                          title="Delete User"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-data">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{isEditing ? 'Edit User' : 'Add New User'}</h2>
              <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={currentUser.name} 
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={currentUser.email} 
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select 
                  id="role" 
                  name="role" 
                  value={currentUser.role} 
                  onChange={handleInputChange}
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select 
                  id="status" 
                  name="status" 
                  value={currentUser.status} 
                  onChange={handleInputChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="form-actions">
                <Button type="button" variant="secondary" onClick={closeModal}>Cancel</Button>
                <Button type="submit" variant="primary">{isEditing ? 'Update' : 'Add'} User</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserManagement
