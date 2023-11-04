import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
//   <p>{error.ErrorResponseImpl.status}</p>
    return (
        <div>
            <h2>Oppsssssssssssssssss</h2>
            <p>{error.statusText || error.message}</p>
            <h1>{error.status}</h1>
            {
                error.status === 404 && <div>
                    <h3>Page nOt found </h3>
                    <p>Go Back</p>
                   <Link to='/'> Go To Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;