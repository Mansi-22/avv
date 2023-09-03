import React from 'react';

const InputField = ({ type, label, placeholder, value, onChange }) => (
  <div className="input-field">
    <label>{label}</label>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);

export default InputField;
