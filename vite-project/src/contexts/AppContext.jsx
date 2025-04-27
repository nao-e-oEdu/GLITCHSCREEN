import { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  return (
    <AppContext.Provider 
      value={{
        nomeUsuario: 'Henrique da Silva Maneiro',

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
