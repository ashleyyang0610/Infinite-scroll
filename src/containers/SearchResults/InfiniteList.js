import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import _debounce from 'lodash/debounce';
import { ITEM_SIZE } from 'config/repoSearching';
import {
    GET_REPO_DATA,
    UPDATE_FETCHING_MASK
} from 'store/modules/repoSearching';
import ListItem from './ListItem';

const onScroll = ({
    allDataLoaded,
    onFetchNextPage,
    pageSize,
    repoLength,
    scrollDirection,
    scrollOffset,
    scrollUpdateWasRequested,
    updateFetchingMask
}) => {
    if (scrollDirection === 'backward' || allDataLoaded) {
        return;
    }

    const offsetIndex = Math.ceil(scrollOffset / ITEM_SIZE);

    if (offsetIndex > repoLength - (pageSize / 15) * 3) {
        updateFetchingMask(true);
    }

    if (repoLength - offsetIndex < pageSize) {
        onFetchNextPage();
    }
};

const InfiniteList = ({ height, itemSize, repoList, totalCount, width }) => {
    const pageSize = useSelector(state => state.repoSearching.pageSize);
    const keyword = useSelector(state => state.repoSearching.keyword);
    const dispatch = useDispatch();
    const onFetchNextPage = () => {
        dispatch({
            type: GET_REPO_DATA,
            payload: { keyword: keyword }
        });
    };
    const updateFetchingMask = state => {
        dispatch({
            type: UPDATE_FETCHING_MASK,
            payload: state
        });
    };
    const allDataLoaded = repoList.length === totalCount;
    return (
        <List
            height={height}
            itemCount={totalCount}
            itemData={{
                repoList
            }}
            itemSize={ITEM_SIZE}
            onScroll={_debounce(
                ({ ...props }) =>
                    onScroll({
                        ...props,
                        allDataLoaded,
                        onFetchNextPage,
                        updateFetchingMask,
                        pageSize: pageSize,
                        repoLength: repoList.length
                    }),
                300
            )}
            overscanCount={20}
            width={width}
        >
            {ListItem}
        </List>
    );
};

InfiniteList.propTypes = {
    height: PropTypes.number.isRequired,
    itemSize: PropTypes.number.isRequired,
    repoList: PropTypes.array.isRequired,
    totalCount: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};

export default InfiniteList;
