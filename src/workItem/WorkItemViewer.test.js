import React from 'react';
import { render } from '@testing-library/react';
import WorkItemViewer from './WorkItemViewer';

describe('WorkItemViewer Component', () => {
  it('renders work item title and description', () => {
    const workItem = {
      title: 'Feature 2',
      description: 'Feature 2',
      state: 'Active',
    };

    const { getByText } = render(<WorkItemViewer workItem={workItem} />);

    expect(getByText('Feature 2')).toBeInTheDocument();
    expect(getByText('Feature 2')).toBeInTheDocument();
  });
});
