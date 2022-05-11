import type { GlobalProvider } from '@ladle/react';
import { SparkProvider } from '@spark-web/core';

export const Provider: GlobalProvider = ({ children }) => {
  return <SparkProvider>{children}</SparkProvider>;
};
