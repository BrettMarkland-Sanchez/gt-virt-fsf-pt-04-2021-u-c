import React, { useState } from 'react';

function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('microsoft/vscode');
  console.log('SearchBar -> term', term);

  const sendTerm = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={sendTerm}>
        <div className="field">
          <label>Retrieve GitHub Issues</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="facebook/react"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
