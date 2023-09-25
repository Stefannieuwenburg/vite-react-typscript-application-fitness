import React, { useState } from 'react';

interface MenuItem {
  title: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
];

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-menu">
      <button onClick={toggleMenu} className="menu-toggle">
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.url}>
              <a href={menuItem.url}>{menuItem.title}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavMenu;
