import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/configureStore';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

const App = () => (
    <Provider store={store}>
        <main>
            <SearchBar />
            <SearchResults />
        </main>
    </Provider>
);

export default App;
