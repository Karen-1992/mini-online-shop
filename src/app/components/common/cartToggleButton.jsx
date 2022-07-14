import React from "react";
import PropTypes from "prop-types";

const CartToggleButton = ({ value, onToggle }) => {
    return (
        <div className="position-absolute bottom-0 end-0 p-3">
            <button
                className="btn btn-warning rounded-circle position-relative"
                onClick={onToggle}
            >
                <i className="bi bi-cart3"></i>
                <span
                    className="position-absolute top-0 start-100 translate-middle
                        badge rounded-pill bg-dark"
                >
                    {value}
                </span>
            </button>
        </div>
    );
};

CartToggleButton.propTypes = {
    value: PropTypes.number,
    onToggle: PropTypes.func
};

export default CartToggleButton;
