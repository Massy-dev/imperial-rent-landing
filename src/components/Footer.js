import React from 'react';


function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Imperial Rent. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
