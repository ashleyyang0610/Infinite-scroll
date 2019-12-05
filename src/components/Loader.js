import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Loader = ({ ...props }) => {
    return (
        <div {...props}>
            <FontAwesomeIcon
                icon={faCircleNotch}
                size="3x"
                spin
                style={{
                    color: '#ced4da',
                    ...props.style
                }}
            />
        </div>
    );
};

export default Loader;
