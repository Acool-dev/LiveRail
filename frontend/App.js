import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to LiveRail</h1>
      <p>Track your trains in real-time.</p>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    if (search) {

      history.push(`/search/${search}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to LiveRail</h1>
      <p>Track your trains in real-time.</p>
      
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Enter station or route"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            width: '300px',
            marginRight: '10px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default App;

