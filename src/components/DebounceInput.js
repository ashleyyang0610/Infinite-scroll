import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

const StyledDebounceInput = styled(DebounceInput)`
    width: 100%;
    height: 36px;
    padding: 5px 12px;
    font-size: 13px;
    color: #fff;
    background-color: hsla(0, 0%, 100%, 0.125);
    background-image: none;
    border: 0px;
    border-radius: 3px;

    &:focus {
        background-color: #fff;
        color: #222;
        transition: border-color 0.2s linear 0s;
        outline: none;
    }

    &:disabled {
        background-color: #dddddd;
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
        border-color: #0096cc;
    }

    &::placeholder {
        color: #bbb;
    }

    /* Chrome/Opera/Safari */
    &::-webkit-input-placeholder {
        color: #bbb;
    }

    /* Firefox 19+ */
    &::-moz-placeholder {
        color: #bbb;
    }

    /* IE 10+ */
    &:-ms-input-placeholder {
        color: #bbb;
    }

    /* Firefox 18- */
    &:-moz-placeholder {
        color: #bbb;
    }
`;

export default StyledDebounceInput;
