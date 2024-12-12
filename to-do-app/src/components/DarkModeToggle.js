// DarkModeToggle.js
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // State to track dark mode status
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the saved preference in localStorage when the component mounts
  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'enabled') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Toggle dark mode and save the preference in localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    }
  };

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

// export default DarkModeToggle;
