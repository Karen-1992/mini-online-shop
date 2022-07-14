import React from "react";
import PropTypes from "prop-types";

const Amount = ({ price, quantity }) => {
    return <span>{price * quantity} руб.</span>;
};

Amount.propTypes = {
    quantity: PropTypes.number,
    price: PropTypes.string
};

export default Amount;
