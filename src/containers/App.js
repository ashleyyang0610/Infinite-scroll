import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from 'store/configureStore';
import Header from './Header/Header';
import SearchResults from './SearchResults/SearchResults';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
`;

const App = () => (
    <Provider store={store}>
        <Main>
            <Header />
            <SearchResults />
        </Main>
    </Provider>
);

export default App;
