import { render } from '@testing-library/react';
import TestRoot from 'utils/TestRoot';

import App from './App';

test('<App />', () => {
  render(
    <TestRoot>
      <App />
    </TestRoot>
  );
});
