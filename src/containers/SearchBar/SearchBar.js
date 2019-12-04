import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { GET_REPO_DATA } from 'store/modules/repoSearching';
import DebounceInput from 'components/DebounceInput';

const Header = styled.header`
    height: 52px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #24292e;
`;

const SearchBar = () => {
    const dispatch = useDispatch();
    const addTodoList = keyword => {
        dispatch({
            type: GET_REPO_DATA,
            payload: [keyword]
        });
    };
    return (
        <Header>
            <DebounceInput
                minLength={2}
                placeholder="Search"
                debounceTimeout={300}
                onChange={e => addTodoList(e.target.value)}
            />
        </Header>
    );
};

export default SearchBar;
