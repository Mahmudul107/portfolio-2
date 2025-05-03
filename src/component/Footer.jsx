import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-300">
      <div className="container mx-auto text-center">
        <p className="text-sm py-12">
          &copy; {new Date().getFullYear()} Mahmudul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
