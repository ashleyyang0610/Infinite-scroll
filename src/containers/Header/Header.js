import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SEARCH_REPO_DATA } from 'store/modules/repoSearching';
import { parseNumberwithCommas } from 'utils/helper';
import {
    HeaderWrapper,
    TotalCount,
    StyledDebounceInput,
    HeaderAnchor
} from './HeaderStyledComps';

const Header = () => {
    const totalCount = useSelector(state => state.repoSearching.totalCount);
    const dispatch = useDispatch();
    const onSearchInputChange = keyword => {
        dispatch({
            type: SEARCH_REPO_DATA,
            payload: { keyword }
        });
    };
    return (
        <HeaderWrapper className="flex flex-justify-between">
            <div className="flex flex-justify-between">
                <HeaderAnchor href="https://github.com/">
                    <FontAwesomeIcon
                        icon={faGithub}
                        color="#fff"
                        style={{
                            fontSize: '36px'
                        }}
                    />
                </HeaderAnchor>
                <StyledDebounceInput
                    minLength={2}
                    placeholder="Search"
                    debounceTimeout={300}
                    onChange={e => onSearchInputChange(e.target.value)}
                />
            </div>
            {totalCount !== 0 && (
                <TotalCount>
                    {`${parseNumberwithCommas(totalCount)} repository results`}
                </TotalCount>
            )}
        </HeaderWrapper>
    );
};

export default Header;
