import React from 'react';
import FeedbackApp from './FeedbackApp.jsx'; 

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        padding: '20px'
      }}
    >
      <h1>Feedback App</h1>
      <FeedbackApp />
    </div>
  );
};
