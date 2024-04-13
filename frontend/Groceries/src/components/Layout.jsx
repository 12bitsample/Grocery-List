import React from 'react';
// import './Layout.css'; // Import your CSS file with background image styling

const Layout = ({ children }) => {
  return (
    <div className="dohgie-bg">
      {children}
    </div>
  );
};

export default Layout;
