import React from 'react';
import { render } from '@testing-library/react';
import RelatedItems from './RelatedItems';

describe('RelatedItems Component', () => {
  it('renders related item IDs', () => {
    const relatedItems = ['123', '456', '789'];

    const { getByText } = render(<RelatedItems relatedItems={relatedItems} />);

    expect(getByText('123')).toBeInTheDocument();
    expect(getByText('456')).toBeInTheDocument();
    expect(getByText('789')).toBeInTheDocument();
  });
});