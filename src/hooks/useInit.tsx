import { useState } from 'react';

type InitCallback = () => void;

export const useInit = (initCallback: InitCallback) => {
  const [initialized, setInitialized] = useState(false);

  if (!initialized) {
    initCallback();
    setInitialized(true);
  }
};