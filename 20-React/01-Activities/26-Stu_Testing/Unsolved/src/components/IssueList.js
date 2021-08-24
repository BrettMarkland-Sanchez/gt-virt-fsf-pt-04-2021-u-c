import React from 'react';
import IssueItem from '../components/IssueItem';

const IssueList = ({ issues }) => {
  console.log('IssueList -> issues', issues);
  const renderedList = issues.map((issue) => {
    return <IssueItem key={issue.id} issue={issue} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default IssueList;
