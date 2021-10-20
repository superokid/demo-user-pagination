import styled from '@emotion/styled';

import DriverCard from './Card';

interface Props {}

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

const Lists = (props: Props) => {
  return (
    <Container>
      {new Array(5).fill(0).map((item, key) => (
        <DriverCard data={data} key={key} />
      ))}
    </Container>
  );
};

export default Lists;

const Container = styled.div`
  display: grid;
  grid-gap: 1.4rem;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-gap: 1.6rem;
    grid-template-columns: repeat(5, 1fr);
  }
`;
