import React from 'react';
import { render } from '@testing-library/react';
import WorkItemViewer from './WorkItemViewer';

describe('WorkItemViewer Component', () => {
  it('renders work item title and description', () => {
    const workItem = {
      title: 'Sample Work Item',
      description: 'This is a test work item.',
      state: 'Active',
    };

    const { getByText } = render(<WorkItemViewer workItem={workItem} />);

    expect(getByText('Sample Work Item')).toBeInTheDocument();
    expect(getByText('This is a test work item.')).toBeInTheDocument();
  });
});
