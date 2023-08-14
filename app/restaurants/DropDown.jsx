"use client"
import React, { useState } from 'react';

const DropDown = ({posts}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Simple DropDown Example</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
      {posts.map(post => (
                <option>{post.name}</option>
              ))
      }
      </select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default DropDown;