import 'rxjs/add/operator/switchMap';
import _get from 'utils/httpService';
import { catchError, switchMap } from 'rxjs/operators';
import { concat, from, of } from 'rxjs';
import { createAction } from 'redux-actions';
import { PAGE_SIZE, GET_REPO_LSIT } from 'config/repoSearching';

/*
 * action types
 */
export const FETCH_REPO_DATA = 'FETCH_REPO_DATA';
export const GET_REPO_DATA = 'GET_REPO_DATA';
export const RESET_REPO_SEARCHING_DEFAULT = 'RESET_REPO_SEARCHING_DEFAULT';
export const UPDATE_ALL_DATA_LOADED_FLAG = 'UPDATE_ALL_DATA_LOADED_FLAG';
export const UPDATE_LOADING_FLAG = 'UPDATE_LOADING_FLAG';
export const UPDATE_REPO_LIST = 'UPDATE_REPO_LIST';

/*
 * initial state
 */
export const repoSearchingState = {
    allDataLoaded: false,
    isLoading: false,
    repoList: [],
    offset: 0
};

/*
 * reducer
 */
export default function repoSearching(state = repoSearchingState, action) {
    switch (action.type) {
        case RESET_REPO_SEARCHING_DEFAULT: {
            const newState = {
                ...state,
                allDataLoaded: false,
                isLoading: false,
                repoList: []
            };
            return newState;
        }
        case UPDATE_ALL_DATA_LOADED_FLAG: {
            const newState = {
                ...state,
                allDataLoaded: action.payload
            };
            return newState;
        }
        case UPDATE_LOADING_FLAG: {
            const newState = {
                ...state,
                isLoading: action.payload
            };
            return newState;
        }
        case UPDATE_REPO_LIST: {
            const newState = {
                ...state,
                repoList: action.payload
            };
            return newState;
        }
        default: {
            return state;
        }
    }
}

/*
 * action creators
 */
export const fetchRepoData = createAction(FETCH_REPO_DATA);
export const getRepoData = createAction(GET_REPO_DATA);
export const resetRepoSearchingDefault = createAction(
    RESET_REPO_SEARCHING_DEFAULT
);
export const updateAllDataLoadedFlag = createAction(
    UPDATE_ALL_DATA_LOADED_FLAG
);
export const updateLoadingFlag = createAction(UPDATE_LOADING_FLAG);
export const updateRepoList = createAction(UPDATE_REPO_LIST);

export const getRepoDataEpic = action$ =>
    action$.ofType(GET_REPO_DATA).switchMap(action =>
        concat(
            of({ type: UPDATE_LOADING_FLAG, payload: true }),
            from(
                _get(GET_REPO_LSIT, { q: 'react', page: 1, per_page: 20 })
            ).pipe(
                switchMap(response => updateRepoList(response)),
                catchError(error =>
                    of({ type: UPDATE_LOADING_FLAG, payload: false })
                )
            )
        )
    );
