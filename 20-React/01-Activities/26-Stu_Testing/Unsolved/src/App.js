import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    document.title = 'GitHub issues';
  }, []);

  const getRepoIssues = (repo) => {
    let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    console.log('issuesURL', issuesURL);
    fetch(issuesURL)
      .then((res) => res.json())
      .then((response) => setIssues(response));
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={getRepoIssues} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <IssueList issues={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
