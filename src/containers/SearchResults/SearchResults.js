import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
import Loader from 'components/Loader';
import { ITEM_SIZE } from 'config/repoSearching';
import { UPDATE_PAGE_SIZE } from 'store/modules/repoSearching';
import InfiniteList from './InfiniteList';
import { FetchingMask, SearchResultsWrapper } from './SearchResultStyledComps';

const SearchResults = () => {
    const isFetchingMaskVisible = useSelector(
        state => state.repoSearching.isFetchingMaskVisible
    );
    const isLoading = useSelector(state => state.repoSearching.isLoading);
    const repoList = useSelector(state => state.repoSearching.repoList);
    const totalCount = useSelector(state => state.repoSearching.totalCount);
    const dispatch = useDispatch();

    useEffect(() => {
        const wrapperHeight = document.querySelector('.infinite-list')
            .offsetHeight;

        dispatch({
            type: UPDATE_PAGE_SIZE,
            payload: Math.ceil(wrapperHeight / ITEM_SIZE) * 15
        });
    }, [dispatch]);

    const isValidContent = totalCount !== 0;
    const searchResultsWrapperClass = classNames({
        'infinite-list': true,
        'position-middle-container': !isValidContent
    });

    return (
        <SearchResultsWrapper className={searchResultsWrapperClass}>
            {isLoading && !isValidContent && (
                <Loader className="position-middle-content" />
            )}
            {!isLoading && !isValidContent && (
                <div className="position-middle-content">No repo found</div>
            )}
            {isValidContent && (
                <AutoSizer>
                    {({ width, height }) => {
                        if (width === 0 || height === 0) {
                            return null;
                        }

                        return (
                            <InfiniteList
                                height={height}
                                itemSize={ITEM_SIZE}
                                repoList={repoList}
                                totalCount={
                                    totalCount > 1000 ? 1000 : totalCount
                                }
                                width={width}
                            />
                        );
                    }}
                </AutoSizer>
            )}
            {isValidContent && isFetchingMaskVisible && (
                <FetchingMask>
                    Scroll too fast... The API is still fetching...{' '}
                </FetchingMask>
            )}
        </SearchResultsWrapper>
    );
};

export default SearchResults;
