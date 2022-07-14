import React from "react";
import PropTypes from "prop-types";
import { findMinFromObject } from "../../utils/findMinFromArray";

const Price = ({ PRICE, SKU }) => {
    const getPrice = () => {
        let price;
        if (SKU) {
            price = `от ${findMinFromObject(SKU)} руб.`;
        } else {
            price = `${PRICE} руб.`;
        }
        return price;
    };
    return (
        <div className="p-2">
            <span className="">{getPrice()}</span>
        </div>
    );
};

Price.propTypes = {
    PRICE: PropTypes.string,
    SKU: PropTypes.object
};

export default Price;
