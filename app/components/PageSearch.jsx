"use client"
import React, { useState, useEffect } from 'react';

const ITEMS_PER_PAGE = 10;

const PaginationAndSearch = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  
  useEffect(() => {
    // const filtered = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    // setFilteredItems(filtered);
    setCurrentPage(1); // Reset to the first page when the search term changes
  }, [items, searchTerm]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= filteredItems.length}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginationAndSearch;