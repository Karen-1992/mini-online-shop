import React from "react";
import PropTypes from "prop-types";

const AddButton = ({ onAddToCart }) => {
    return (
        <div className="text-center">
            <button
                onClick={onAddToCart}
                className="btn btn-outline-primary
                    btn-sm mb-2 text-uppercase"
            >
                Купить
            </button>
        </div>
    );
};

AddButton.propTypes = {
    onAddToCart: PropTypes.func
};

export default AddButton;
