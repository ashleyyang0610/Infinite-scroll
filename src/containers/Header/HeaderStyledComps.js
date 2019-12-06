import styled from 'styled-components';
import DebounceInput from 'components/DebounceInput';
import { H3 } from 'components/typography';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    height: 52px;
    padding: 8px 15vw;
    background-color: #24292e;

    @media screen and (min-width: 1020px) and (max-width: 1200px) {
        padding: 5px 10vw;
    }

    @media screen and (max-width: 1019px) {
        padding: 5px 5vw;
    }
`;

export const TotalCount = styled(H3)`
    color: #fff;
    margin-left: 12px;
    line-height: 36px;

    @media screen and (max-width: 1200px) {
        margin-left: 5vw;
    }
`;

export const StyledDebounceInput = styled(DebounceInput)`
    width: 420px;
    transition: width 0.35s;

    @media screen and (max-width: 1200px) {
        max-width: calc(100% - 44px);
    }
`;

export const HeaderAnchor = styled.a`
    margin-right: 24px;

    @media screen and (max-width: 1200px) {
        margin-right: 12px;
    }
`;
