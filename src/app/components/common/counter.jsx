import React from "react";
import PropTypes from "prop-types";

const Counter = ({ quantity, onIncrement, onDecrement }) => {
    return (
        <div className="d-flex flex-row ">
            <button
                className="btn btn-outline-danger btn-sm my-2"
                disabled={quantity === 1}
                onClick={onDecrement}
            >
                -
            </button>
            <div className="d-flex px-2 mx-2">
                <span className="my-auto">{quantity}</span>
            </div>
            <button
                className="btn btn-outline-success btn-sm my-2"
                onClick={onIncrement}
            >
                +
            </button>
        </div>
    );
};

Counter.propTypes = {
    quantity: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default Counter;
