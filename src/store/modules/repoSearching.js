import { createAction } from 'redux-actions';
import { concat, from, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { catchError, switchMap, exhaustMap } from 'rxjs/operators';
import _get from 'utils/httpService';
import store from 'store/configureStore';
import { DEFAULT_PAGE_SIZE, GET_REPO_LSIT } from 'config/repoSearching';

/*
 * action types
 */
export const FETCH_REPO_DATA = 'FETCH_REPO_DATA';
export const GET_REPO_DATA = 'GET_REPO_DATA';
export const RESET_REPO_SEARCHING_DEFAULT = 'RESET_REPO_SEARCHING_DEFAULT';
export const SEARCH_REPO_DATA = 'SEARCH_REPO_DATA';
export const UPDATE_FETCHING_MASK = 'UPDATE_FETCHING_MASK';
export const UPDATE_KEYWORD = 'UPDATE_KEYWORD';
export const UPDATE_LOADING_FLAG = 'UPDATE_LOADING_FLAG';
export const UPDATE_PAGE_SIZE = 'UPDATE_PAGE_SIZE';
export const UPDATE_REPO_LIST = 'UPDATE_REPO_LIST';
export const UPDATE_TOTAL_COUNT = 'UPDATE_TOTAL_COUNT';

/*
 * initial state
 */
export const repoSearchingState = {
    isFetchingMaskVisible: false,
    isLoading: false,
    keyword: '',
    pageSize: DEFAULT_PAGE_SIZE,
    repoList: [],
    totalCount: 0
};

/*
 * reducer
 */
export default function repoSearching(state = repoSearchingState, action) {
    switch (action.type) {
        case RESET_REPO_SEARCHING_DEFAULT: {
            const newState = {
                ...state,
                isFetchingMaskVisible: false,
                isLoading: false,
                keyword: '',
                pageSize: DEFAULT_PAGE_SIZE,
                repoList: [],
                totalCount: 0
            };
            return newState;
        }
        case UPDATE_FETCHING_MASK: {
            const newState = {
                ...state,
                isFetchingMaskVisible: action.payload
            };
            return newState;
        }
        case UPDATE_KEYWORD: {
            const newState = {
                ...state,
                keyword: action.payload
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
        case UPDATE_PAGE_SIZE: {
            const newState = {
                ...state,
                pageSize: action.payload
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
        case UPDATE_TOTAL_COUNT: {
            const newState = {
                ...state,
                totalCount: action.payload
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
export const searchRepoData = createAction(SEARCH_REPO_DATA);
export const updateFetchingMask = createAction(UPDATE_FETCHING_MASK);
export const updateKeyword = createAction(UPDATE_KEYWORD);
export const updateLoadingFlag = createAction(UPDATE_LOADING_FLAG);
export const updatePageSize = createAction(UPDATE_PAGE_SIZE);
export const updateRepoList = createAction(UPDATE_REPO_LIST);
export const updateTotalCount = createAction(UPDATE_TOTAL_COUNT);

export const getRepoDataEpic = action$ =>
    action$.pipe(
        ofType(GET_REPO_DATA),
        exhaustMap(action =>
            concat(
                of({ type: UPDATE_LOADING_FLAG, payload: true }),
                from(
                    _get(GET_REPO_LSIT, {
                        q: store.getState().repoSearching.keyword,
                        page:
                            action.payload.page ||
                            store.getState().repoSearching.repoList.length /
                                store.getState().repoSearching.pageSize +
                                1,
                        per_page:
                            action.payload.per_page ||
                            store.getState().repoSearching.pageSize
                    })
                ).pipe(
                    switchMap(response =>
                        concat(
                            of({
                                type: UPDATE_REPO_LIST,
                                payload: store
                                    .getState()
                                    .repoSearching.repoList.concat(
                                        response.data.items
                                    )
                            }),
                            of({
                                type: UPDATE_TOTAL_COUNT,
                                payload: response.data.total_count
                            }),
                            of({ type: UPDATE_FETCHING_MASK, payload: false }),
                            of({ type: UPDATE_LOADING_FLAG, payload: false })
                        )
                    ),
                    catchError(error =>
                        of({ type: UPDATE_LOADING_FLAG, payload: false })
                    )
                )
            )
        )
    );

export const searchRepoDataEpic = action$ =>
    action$.pipe(
        ofType(SEARCH_REPO_DATA),
        switchMap(action =>
            concat(
                of({ type: UPDATE_LOADING_FLAG, payload: true }),
                of({ type: UPDATE_TOTAL_COUNT, payload: 0 }),
                of({ type: UPDATE_KEYWORD, payload: action.payload.keyword }),
                of({ type: UPDATE_REPO_LIST, payload: [] }),
                of({
                    type: GET_REPO_DATA,
                    payload: {
                        page: 1
                    }
                })
            )
        )
    );
