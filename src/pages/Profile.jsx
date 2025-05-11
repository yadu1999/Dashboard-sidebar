import React, { useState } from 'react'
import { FiUser, FiMail, FiLock, FiShield } from 'react-icons/fi'
import Card from '../components/Card'
import Button from '../components/Button'
import './Profile.css'

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Administrator',
    bio: 'Experienced administrator with a background in web development and system management.',
    location: 'New York, USA',
    phone: '+1 (555) 123-4567'
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileData({
      ...profileData,
      [name]: value
    })
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData({
      ...passwordData,
      [name]: value
    })
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    // Update profile logic would go here
    alert('Profile updated successfully!')
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!')
      return
    }
    
    // Update password logic would go here
    alert('Password changed successfully!')
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
  }

  return (
    <div className="profile">
      <h1 className="page-title">My Profile</h1>
      
      <div className="profile-grid">
        <div className="profile-column">
          <Card title="Profile Information">
            <form onSubmit={handleProfileSubmit}>
              <div className="profile-header">
                <div className="profile-avatar">
                  <FiUser />
                </div>
                <div className="profile-info">
                  <h2>{profileData.name}</h2>
                  <p>{profileData.role}</p>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-icon-wrapper">
                  <FiUser className="input-icon" />
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={profileData.name}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-icon-wrapper">
                  <FiMail className="input-icon" />
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={profileData.email}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    value={profileData.location}
                    onChange={handleProfileChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    value={profileData.phone}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea 
                  id="bio" 
                  name="bio" 
                  value={profileData.bio}
                  onChange={handleProfileChange}
                ></textarea>
              </div>
              
              <div className="form-actions">
                <Button type="submit" variant="primary">Update Profile</Button>
              </div>
            </form>
          </Card>
        </div>
        
        <div className="profile-column">
          <Card title="Change Password">
            <form onSubmit={handlePasswordSubmit}>
              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <div className="input-icon-wrapper">
                  <FiLock className="input-icon" />
                  <input 
                    type="password" 
                    id="currentPassword" 
                    name="currentPassword" 
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <div className="input-icon-wrapper">
                  <FiLock className="input-icon" />
                  <input 
                    type="password" 
                    id="newPassword" 
                    name="newPassword" 
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <p className="help-text">Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <div className="input-icon-wrapper">
                  <FiLock className="input-icon" />
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-actions">
                <Button type="submit" variant="primary">Change Password</Button>
              </div>
            </form>
          </Card>
          
          <Card title="Security Settings">
            <div className="security-option">
              <div className="security-option-info">
                <div className="security-icon">
                  <FiShield />
                </div>
                <div>
                  <h3>Two-Factor Authentication</h3>
                  <p>Add an extra layer of security to your account</p>
                </div>
              </div>
              <Button variant="outline" size="small">Enable</Button>
            </div>
            
            <div className="security-option">
              <div className="security-option-info">
                <div className="security-icon warning">
                  <FiShield />
                </div>
                <div>
                  <h3>Login History</h3>
                  <p>View your recent login activity</p>
                </div>
              </div>
              <Button variant="outline" size="small">View</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile
