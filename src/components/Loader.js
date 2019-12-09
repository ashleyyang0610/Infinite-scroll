import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -22px;
    margin-left: -22px;
    font-size: 10px;
    text-indent: -9999em;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    border-right: 2px solid rgba(255, 255, 255, 0.2);
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    border-left: 2px solid #555;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;

    &,
    &:after {
        border-radius: 50%;
        width: 44px;
        height: 44px;
    }
    @-webkit-keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

const Loader = ({ className, ...props }) => {
    return <StyledLoader className={className} />;
};

export default Loader;
