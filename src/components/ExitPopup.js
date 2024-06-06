import React from 'react';

const ExitPopup = () => {
  const handleLeavePage = (e) => {
    const message = 'Are you sure you want to leave?';
    e.returnValue = message; // Standard-compliant browsers
    return message; // Legacy browsers
  };

  React.useEffect(() => {
    window.addEventListener('beforeunload', handleLeavePage);
    return () => {
      window.removeEventListener('beforeunload', handleLeavePage);
    };
  }, []);

  return (
    <div className="exit-popup">
      <p>Are you sure you want to leave?</p>
    </div>
  );
};

export default ExitPopup;
