import styled from 'styled-components';
import DebounceInput from 'components/DebounceInput';
import { H3 } from 'components/typography';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    height: 52px;
    padding: 8px 15vw;
    background-color: #24292e;
`;

export const TotalCount = styled(H3)`
    color: #fff;
    margin-left: 12px;
    line-height: 36px;
`;

export const StyledDebounceInput = styled(DebounceInput)`
    width: 420px;
    transition: width 0.35s;
`;

export const HeaderAnchor = styled.a`
    margin-right: 24px;
`;
