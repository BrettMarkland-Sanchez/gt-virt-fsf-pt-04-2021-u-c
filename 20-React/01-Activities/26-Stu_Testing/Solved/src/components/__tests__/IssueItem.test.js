import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import IssueItem from '../IssueItem';

let container = null;

beforeEach(() => {
  // Setup a DOM element as the target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting to prevent this test from altering the results of future tests
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Renders each issue individually', () => {
  const issue = {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
    html_url: 'https://github.com/microsoft/vscode/issues/68',
    id: 117635943,
    node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
    number: 68,
    title: 'Git: Support git history in VSCode',
  };

  it('renders', () => {
    act(() => {
      render(<IssueItem key={issue.id} issue={issue} />, container);
    });
    expect(container.textContent).toBe('Git: Support git history in VSCode');
  });

  it('matches snapshot', () => {
    act(() => {
      const fragment = render(
        <IssueItem key={issue.id} issue={issue} />,
        container
      );
      expect(fragment).toMatchSnapshot();
    });
  });
});
