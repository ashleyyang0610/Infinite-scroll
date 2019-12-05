import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import repoSearching, {
    getRepoDataEpic,
    searchRepoDataEpic
} from './repoSearching';

export const rootEpic = combineEpics(getRepoDataEpic, searchRepoDataEpic);

const appReducer = combineReducers({
    repoSearching
});

export const rootReducer = (state, action) => {
    let newStata;
    if (action.type !== 'INITIAL_ALL_STATE') {
        newStata = state;
    }

    return appReducer(newStata, action);
};
