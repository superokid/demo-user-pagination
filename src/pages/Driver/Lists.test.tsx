import { render, fireEvent } from '@testing-library/react';
import Component, { PAGE_LIMIT } from './Lists';

describe('<Lists />', () => {
  const data = new Array(30).fill(0).map((_, i) => {
    return {
      name: {
        first: 'First Name',
        last: 'Last Name',
        title: 'Title',
      },
      phone: 'Phone Number ' + i,
      email: 'Email Address',
      dob: {
        date: '1972-12-01T09:18:35.935Z',
        age: 49,
      },
      id: {
        name: 'TFN',
        value: '670790133',
      },
    };
  });

  test('render empty', () => {
    const { getByTestId, getByText } = render(<Component />);
    expect(getByTestId('lists-container').childElementCount).toBe(0);
    expect(getByText('Driver tidak ditemukan...')).toBeInTheDocument();
  });

  test(`show ${PAGE_LIMIT} child components`, () => {
    const { getByTestId } = render(<Component drivers={data} />);
    expect(getByTestId('lists-container').childElementCount).toBe(PAGE_LIMIT);
  });

  test('render first page', async () => {
    const { getByText, queryByText } = render(<Component drivers={data} />);
    expect(getByText(data[0].phone)).toBeInTheDocument();
    expect(getByText(data[4].phone)).toBeInTheDocument();
    expect(queryByText(data[5].phone)).toBeNull();
  });

  test('disabled button on first page', async () => {
    const { getByText } = render(<Component drivers={data} />);
    expect(getByText('< Previous Page')).toHaveAttribute('disabled');
    expect(getByText('Next Page >')).not.toHaveAttribute('disabled');
  });

  test('click next button', async () => {
    const { getByText, queryByText } = render(<Component drivers={data} />);
    const nextDom = getByText('Next Page >');
    fireEvent.click(nextDom);
    expect(queryByText(data[4].phone)).toBeNull();
    expect(getByText(data[5].phone)).toBeInTheDocument();
    fireEvent.click(nextDom);
    expect(queryByText(data[5].phone)).toBeNull();
  });
});
