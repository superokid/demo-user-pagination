import { render } from '@testing-library/react';

import TestRoot from 'utils/TestRoot';
import Driver from './index';

test('<Driver />', () => {
  render(
    <TestRoot>
      <Driver />
    </TestRoot>
  );
});
