import React from 'react';
import { render } from '@testing-library/react';
import RelatedItems from './RelatedItems';

describe('RelatedItems Component', () => {
  it('renders related item IDs', () => {
    const relatedItems = ['14', '15'];

    const { getByText } = render(<RelatedItems relatedItems={relatedItems} />);

    expect(getByText('14')).toBeInTheDocument();
    expect(getByText('15')).toBeInTheDocument();
  });
});