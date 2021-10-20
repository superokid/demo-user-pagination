import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import theme from 'theme';

import Layout from 'components/Layout';
import Routes from 'config/routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
