import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

const ErrorMessage = () => {
    return (
        <div className='error-message'>
            <div className='error-message__text'>
                <FontAwesomeIcon   
                    style={{marginRight: '10px'}} 
                    icon={faXmarkCircle} />
                Sorry, something went wrong.
            </div>
        </div>
    );
};

export default ErrorMessage;