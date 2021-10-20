import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

interface Props {}

const TestRoot: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default TestRoot;
