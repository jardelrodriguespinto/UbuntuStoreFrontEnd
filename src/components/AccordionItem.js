// AccordionItem.js
import React, { useState } from 'react';

const AccordionItem = ({ menuItems }) => {
  const { title, submenu } = menuItems;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`accordion_item ${isOpen ? 'open' : 'closed'}`}>
      <button className="button" onClick={handleToggle}>
        {title}
        <span className="control">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <ul className="submenu">
          {submenu.map((item, index) => (
            <li className="submenu-item" key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default AccordionItem;
