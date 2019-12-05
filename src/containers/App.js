import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/configureStore';
import Header from './Header/Header';
import SearchResults from './SearchResults/SearchResults';

const App = () => (
    <Provider store={store}>
        <main>
            <Header />
            <SearchResults />
        </main>
    </Provider>
);

export default App;
