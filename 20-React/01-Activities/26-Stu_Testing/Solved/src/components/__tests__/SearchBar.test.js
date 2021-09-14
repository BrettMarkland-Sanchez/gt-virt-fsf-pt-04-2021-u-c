import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SearchBar from '../SearchBar';

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

describe('Renders a list of issues', () => {
  it('renders', () => {
    act(() => {
      render(<SearchBar />, container);
      return undefined;
    });
  });

  it('matches snapshot', () => {
    const fragment = render(<SearchBar />, container);
    expect(fragment).toMatchSnapshot();
  });
});
