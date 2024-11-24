import React from 'react';
import { useParams } from 'react-router-dom';

function SearchResults() {
  const { searchQuery } = useParams();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Search Results for "{searchQuery}"</h1>
      <p>Train information will be displayed here.</p>
    </div>
  );
}

export default SearchResults;
