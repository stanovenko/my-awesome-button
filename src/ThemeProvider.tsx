
import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext<string | undefined>(undefined);

export const useBootstrapPrefix = (prefix: string | undefined, defaultPrefix: string) => {
  const contextPrefix = useContext(ThemeContext);
  return prefix || contextPrefix || defaultPrefix;
};

export const ThemeProvider: React.FC<{ prefix?: string }> = ({ prefix, children }) => (
  <ThemeContext.Provider value={prefix}>{children}</ThemeContext.Provider>
);
