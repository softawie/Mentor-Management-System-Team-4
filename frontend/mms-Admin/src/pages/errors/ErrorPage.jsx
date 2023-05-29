import React from 'react';
import Error from './Error';

const ErrorPage = () => {
    return (
        <div>
            <Error code={404} message={"Page not found"} />
        </div>
    );
}

export default ErrorPage;
