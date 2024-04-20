import React from 'react';
import MasterLayout from "../components/MasterLayout.jsx";

const PageNotFound = () => {
    return (
        <MasterLayout>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <h1>404 Not Found</h1>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default PageNotFound;