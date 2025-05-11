import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import './Settings.css'

const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Admin Dashboard',
    siteDescription: 'A powerful admin dashboard for managing users and content',
    adminEmail: 'admin@example.com',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY'
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    userRegistration: true,
    systemUpdates: true,
    securityAlerts: true
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordExpiry: '30',
    sessionTimeout: '60',
    loginAttempts: '5'
  })

  const handleGeneralChange = (e) => {
    const { name, value } = e.target
    setGeneralSettings({
      ...generalSettings,
      [name]: value
    })
  }

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target
    setNotificationSettings({
      ...notificationSettings,
      [name]: checked
    })
  }

  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target
    setSecuritySettings({
      ...securitySettings,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleGeneralSubmit = (e) => {
    e.preventDefault()
    // Save general settings logic would go here
    alert('General settings saved successfully!')
  }

  const handleNotificationSubmit = (e) => {
    e.preventDefault()
    // Save notification settings logic would go here
    alert('Notification settings saved successfully!')
  }

  const handleSecuritySubmit = (e) => {
    e.preventDefault()
    // Save security settings logic would go here
    alert('Security settings saved successfully!')
  }

  return (
    <div className="settings">
      {/* <h1 className="page-title">Settings</h1> */}
      
      <div className="settings-grid">
        <Card title="General Settings">
          <form onSubmit={handleGeneralSubmit}>
            <div className="form-group">
              <label htmlFor="siteName">Site Name</label>
              <input 
                type="text" 
                id="siteName" 
                name="siteName" 
                value={generalSettings.siteName}
                onChange={handleGeneralChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="siteDescription">Site Description</label>
              <textarea 
                id="siteDescription" 
                name="siteDescription" 
                value={generalSettings.siteDescription}
                onChange={handleGeneralChange}
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="adminEmail">Admin Email</label>
              <input 
                type="email" 
                id="adminEmail" 
                name="adminEmail" 
                value={generalSettings.adminEmail}
                onChange={handleGeneralChange}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="timezone">Timezone</label>
                <select 
                  id="timezone" 
                  name="timezone" 
                  value={generalSettings.timezone}
                  onChange={handleGeneralChange}
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">EST (UTC-5)</option>
                  <option value="CST">CST (UTC-6)</option>
                  <option value="MST">MST (UTC-7)</option>
                  <option value="PST">PST (UTC-8)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="dateFormat">Date Format</label>
                <select 
                  id="dateFormat" 
                  name="dateFormat" 
                  value={generalSettings.dateFormat}
                  onChange={handleGeneralChange}
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
            
            <div className="form-actions">
              <Button type="submit" variant="primary">Save Settings</Button>
            </div>
          </form>
        </Card>
        
        <div className="settings-column">
          <Card title="Notification Settings">
            <form onSubmit={handleNotificationSubmit}>
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="emailNotifications" 
                    checked={notificationSettings.emailNotifications}
                    onChange={handleNotificationChange}
                  />
                  <span>Email Notifications</span>
                </label>
                <p className="help-text">Receive email notifications for important events</p>
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="userRegistration" 
                    checked={notificationSettings.userRegistration}
                    onChange={handleNotificationChange}
                  />
                  <span>User Registration</span>
                </label>
                <p className="help-text">Get notified when a new user registers</p>
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="systemUpdates" 
                    checked={notificationSettings.systemUpdates}
                    onChange={handleNotificationChange}
                  />
                  <span>System Updates</span>
                </label>
                <p className="help-text">Get notified about system updates</p>
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="securityAlerts" 
                    checked={notificationSettings.securityAlerts}
                    onChange={handleNotificationChange}
                  />
                  <span>Security Alerts</span>
                </label>
                <p className="help-text">Receive notifications about security issues</p>
              </div>
              
              <div className="form-actions">
                <Button type="submit" variant="primary">Save Notifications</Button>
              </div>
            </form>
          </Card>
          
          <Card title="Security Settings">
            <form onSubmit={handleSecuritySubmit}>
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="twoFactorAuth" 
                    checked={securitySettings.twoFactorAuth}
                    onChange={handleSecurityChange}
                  />
                  <span>Two-Factor Authentication</span>
                </label>
                <p className="help-text">Require two-factor authentication for all admin users</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="passwordExpiry">Password Expiry (days)</label>
                <input 
                  type="number" 
                  id="passwordExpiry" 
                  name="passwordExpiry" 
                  value={securitySettings.passwordExpiry}
                  onChange={handleSecurityChange}
                  min="0"
                />
                <p className="help-text">Number of days before passwords expire (0 for never)</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="sessionTimeout">Session Timeout (minutes)</label>
                <input 
                  type="number" 
                  id="sessionTimeout" 
                  name="sessionTimeout" 
                  value={securitySettings.sessionTimeout}
                  onChange={handleSecurityChange}
                  min="1"
                />
                <p className="help-text">Time before inactive users are logged out</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="loginAttempts">Max Login Attempts</label>
                <input 
                  type="number" 
                  id="loginAttempts" 
                  name="loginAttempts" 
                  value={securitySettings.loginAttempts}
                  onChange={handleSecurityChange}
                  min="1"
                />
                <p className="help-text">Number of failed login attempts before account lockout</p>
              </div>
              
              <div className="form-actions">
                <Button type="submit" variant="primary">Save Security Settings</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Settings
