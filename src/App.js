import React from 'react';
import { ToastContainer } from 'react-toastify';

import Main from './pages/Main';

import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Main />
    </>
  );
}

export default App;
