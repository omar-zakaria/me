import React from 'react';
import { useField } from 'formik';

import * as Yup from 'yup';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const TextInputLiveFeedback: React.FC<any> = ({ label, helpText, ...props }) => {
    const [field, meta] = useField(props);
    const { className, ...newProps } = props;

    // Show inline feedback if EITHER
    // - the input is focused AND value is longer than 2 characters
    // - or, the has been visited (touched === true)
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
        (!!didFocus && field.value.trim().length > 2) || meta.touched;

    return (
        <div
            className={`${className} ${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
                }`}
        >
            <div className="flex items-center justify-between">
                <label htmlFor={newProps.id}>{label}</label>{' '}
                {showFeedback ? (
                    <div
                        id={`${newProps.id}-feedback`}
                        aria-live="polite"
                        className={`feedback text-sm ${(meta.error ? 'text-red-600' : 'text-green-600')}`}
                    >
                        {meta.error ? meta.error : '✓'}
                    </div>
                ) : null}
            </div>
            {React.createElement(newProps.as ? newProps.as : 'input', {
                className: ' px-3.5 py-2 w-full shadow-sm ring-1 ring-inset ring-gray-300 rounded-md  text-gray-800',
                ...newProps,
                ...field,
                'aria-describedby': `${newProps.id}-feedback ${newProps.id}-help`,
                onFocus: handleFocus
            }, )}
            <div className="text-xs" id={`${newProps.id}-help`} tabIndex={-1}>
                {helpText}
            </div>
        </div>
    );
};
