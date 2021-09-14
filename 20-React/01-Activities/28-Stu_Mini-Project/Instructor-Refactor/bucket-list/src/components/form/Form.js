import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import eagernessLevels from '../../data/eagerness.json';

function Form({ onSubmit, placeholder, title, eagerness }) {
  const [form, setForm] = useState({
    value: '',
    eagerness: ''
  });

  useEffect(() => {
    if (title) {
      setForm(form => ({ ...form, value: title, eagerness }));
    }
  }, [title]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(form => ({ ...form, [name]: value }));
  };

  const handleDropdownChange = (value) => {
    setForm(form => ({ ...form, eagerness: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.eagerness) {
      form.eagerness = 'low';
    }

    onSubmit(form);

    setForm({
      value: '',
      eagerness: ''
    });
  };

  return (
    <>
      {title && <h3>Update entry: {title}</h3>}
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder || "Add to your bucket list"}
          value={form.value}
          name="value"
          className="bucket-input"
          onChange={handleChange}
        />
        <Dropdown
          label={form.eagerness || 'Priority'}
          data={eagernessLevels}
          onDropdownChange={handleDropdownChange}
        />
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string
}

export default Form;
