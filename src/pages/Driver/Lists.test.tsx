import { render, fireEvent } from '@testing-library/react';
import Component, { PAGE_LIMIT } from './Lists';
import data from 'types/drivers.mock';

describe('<Lists />', () => {
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

  test('filter search', () => {
    const { getByText } = render(<Component drivers={data} search={data[10].name.first} />);
    expect(getByText(new RegExp(data[10].name.first))).toBeInTheDocument();
  });

  test(`disable next button when < ${PAGE_LIMIT} data`, () => {
    const { getByText } = render(<Component drivers={data.slice(0, 3)} />);
    expect(getByText('Next Page >')).toHaveAttribute('disabled');
  });
});
