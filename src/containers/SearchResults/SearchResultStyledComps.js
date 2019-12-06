import styled from 'styled-components';

export const SearchResultsWrapper = styled.section`
    height: calc(100vh - 52px);
`;

export const SearchItem = styled.div`
    padding: 0 15vw 24px 15vw;
`;

export const Hr = styled.hr`
    margin: 0;
    margin-bottom: 24px;
    border: none;
    border-top: ${props =>
        props.index !== 0 ? '1px solid #e1e4e8' : '1px solid transparent'};
`;

export const Anchor = styled.a`
    color: #0366d6;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Paragraph = styled.p`
    width: 100%;
    color: #586069;
    margin: 0px;
`;

export const FetchingMask = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: #24292e;
    font-size: 24px;
`;
