import React, { useState } from 'react';

const ProfileModal = ({ user, onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone || '',
    address: user.address || ''
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Update user data in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(u => 
      u.id === user.id ? { ...u, ...formData } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Update current user in localStorage
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const updatedUser = { ...currentUser, ...formData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    setEditMode(false);
    setMessage('Profile updated successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="modal active">
      <div className="modal-content" style={{ maxWidth: '500px', width: '90%' }}>
        <button className="close-modal" onClick={onClose}>×</button>
        
        <h2 className="detail-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {editMode ? 'Edit Profile' : 'My Profile'}
        </h2>

        {message && <div className="success-message">{message}</div>}

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-input"
              value={formData.fullName}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={!editMode}
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              className="form-input"
              value={formData.address}
              onChange={handleInputChange}
              disabled={!editMode}
              placeholder="Enter your delivery address"
              rows="3"
              style={{ resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {editMode ? (
              <>
                <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
                  Cancel
                </button>
                <button className="order-btn" onClick={handleSave}>
                  Save Changes
                </button>
              </>
            ) : (
              <button className="order-btn" onClick={() => setEditMode(true)}>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;