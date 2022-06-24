import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div class="row">
                <div class="col-md-12 d-flex flex-column justify-content-center align-items-center p-4  vh-100">
                    <h1>404</h1>
                    <h4>Page not found</h4>
                    <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                    <Link className="btn btn-sm btn-primary" to="/register">Go Back to home page</Link>

                </div>
            </div>
        </>
    )
}

export default Error