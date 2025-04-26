import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider } from './contexts';

import { Router } from './Router';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  )
};

export { App };
