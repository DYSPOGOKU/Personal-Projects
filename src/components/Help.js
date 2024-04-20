import React from 'react';
import '../CSS/Help.css';

const Help = () => {
  const generateRandomEmail = () => {
    const emailPrefix = 'help';
    const emailDomain = 'example.com';
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${emailPrefix}_${randomString}@${emailDomain}`;
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000000000);
  };

  return (
    <div className="help-container">
      <div className="help-content">
        <h1 className="help-title">Need Help?</h1>
        <p className="help-description">Contact our support team for assistance.</p>
        <div className="help-details">
          <div className="help-email">
            <span className="help-label">Email:</span>
            <span className="help-value">{generateRandomEmail()}</span>
          </div>
          <div className="help-number">
            <span className="help-label">Number:</span>
            <span className="help-value">{generateRandomNumber()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;