import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import _debounce from 'lodash/debounce';
import { ITEM_SIZE } from 'config/repoSearching';
import { GET_REPO_DATA } from 'store/modules/repoSearching';
import ListItem from './ListItem';

const onItemsRendered = ({
    overscanStartIndex,
    overscanStopIndex,
    visibleStartIndex,
    visibleStopIndex
}) => {
    console.log(
        overscanStartIndex,
        overscanStopIndex,
        visibleStartIndex,
        visibleStopIndex
    );
};

const onScroll = ({
    allDataLoaded,
    onFetchNextPage,
    pageSize,
    repoLength,
    scrollDirection,
    scrollOffset,
    scrollUpdateWasRequested
}) => {
    if (scrollDirection === 'backward' || allDataLoaded) {
        return;
    }

    const offsetIndex = Math.ceil(scrollOffset / ITEM_SIZE);

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
    const allDataLoaded = repoList.length === totalCount;
    return (
        <List
            height={height}
            itemCount={totalCount}
            itemData={{
                repoList
            }}
            itemSize={ITEM_SIZE}
            onItemsRendered={onItemsRendered}
            onScroll={_debounce(
                ({ ...props }) =>
                    onScroll({
                        ...props,
                        allDataLoaded,
                        onFetchNextPage,
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

export default InfiniteList;
