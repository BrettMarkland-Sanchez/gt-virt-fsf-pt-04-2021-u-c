import React from 'react';
import PropTypes from 'prop-types';

function DropdownItem({ onSelect, name, value }) {
  return <p onClick={() => onSelect(name)}>{value}</p>;
}

function Dropdown({ label, data, onDropdownChange }) {
  const items = Object.keys(data);

  const handleChange = (item) => {
    onDropdownChange(item);
  }

  return (
    <div className="dropdown">
      {/* Added prevent default to remove side effect */}
      <button className={`dropbtn ${label}`} onClick={e => e.preventDefault()}>
        {label}
      </button>
      <div className="dropdown-content">
        {items.map(item => (
          <DropdownItem
            key={item}
            name={item}
            value={data[item]}
            onSelect={() => handleChange(item)}
          />
        ))}
      </div>
    </div>
  )
}

DropdownItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

Dropdown.propTypes = {
  onDropdownChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default Dropdown;
