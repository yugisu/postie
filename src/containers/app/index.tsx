import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store';

import { Routing } from 'containers/routing';
import { AppHeader } from './components/app-header';

import * as S from './styles';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <S.GlobalStyle />
        <S.Container>
          <AppHeader />
          <Routing />
        </S.Container>
      </BrowserRouter>
    </Provider>
  );
};
