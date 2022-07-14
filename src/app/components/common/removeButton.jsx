import React from "react";
import PropTypes from "prop-types";

const RemoveButton = ({ onRemove }) => {
    return (
        <button onClick={onRemove} className="btn btn-sm btn-outline-danger">
            <i className="bi bi-x-lg"></i>
        </button>
    );
};

RemoveButton.propTypes = {
    onRemove: PropTypes.func,
    id: PropTypes.string
};

export default RemoveButton;
