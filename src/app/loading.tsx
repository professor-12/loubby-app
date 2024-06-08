import React from "react";

const loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-4xl underline underline-offset-4 font-medium animate-bounce duration-75">
                Loading
            </div>
            <span className="text-4xl">...</span>
        </div>
    );
};

export default loading;
