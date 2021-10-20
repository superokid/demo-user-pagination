import { render } from '@testing-library/react';
import DriverCard from './Card';

describe('<DriverCard />', () => {
  const data = {
    name: {
      first: 'First Name',
      last: 'Last Name',
      title: 'Title',
    },
    phone: 'Phone Number',
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

  test('render empty', () => {
    render(<DriverCard />);
  });

  test('render content', async () => {
    const { getByText } = render(<DriverCard data={data} />);
    expect(getByText(/First Name/)).toBeInTheDocument();
    expect(getByText(/Last Name/)).toBeInTheDocument();
    expect(getByText(data.phone)).toBeInTheDocument();
    expect(getByText(data.email)).toBeInTheDocument();
    expect(getByText('01-12-1972')).toBeInTheDocument();
  });
});
