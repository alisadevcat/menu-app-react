import React from "react";

export const EditModalFooter = ({handleClose}) => {
    return (
        <div>
            <button className="btn btn-default" onClick={handleClose}>
                Cancel
            </button>
            <button className="btn btn-primary ml-1">Ok</button>
        </div>
    );
};
