import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const EmailWithCopyIcon = ({ email }) => {
    const handleCopyClick = () => {
        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();

        // Execute copy command
        document.execCommand('copy');

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Notify the user that the email address has been copied
        alert('Email address copied to clipboard: ' + email);
    };

    return (
        <div className="w-full flex justify-center text-white text-lg tracking-tight  items-center text-center font-light">
            <span className=" font-thin mr-2">{email}</span>
            <button
                className="  p-1 rounded font-light"
                onClick={handleCopyClick}
            >
                <FontAwesomeIcon icon={faCopy} className="   rounded fal" />
            </button>
        </div>
    );
};

export default EmailWithCopyIcon;
