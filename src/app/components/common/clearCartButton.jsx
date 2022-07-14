import React from "react";
import PropTypes from "prop-types";

const ClearCartButton = ({ onClick }) => {
    return (
        <div className="d-flex gap-4">
            <button
                onClick={onClick}
                className="btn btn-outline-danger
                    rounded-circle"
            >
                <i className="bi bi-trash3"></i>
            </button>
        </div>
    );
};

ClearCartButton.propTypes = {
    onClick: PropTypes.func
};

export default ClearCartButton;
