import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, getQuantityById } from "../../store/cart";

const TextField = ({ label, type, name, id, quantity }) => {
    const initialValue = useSelector(getQuantityById(id));
    const [quantity2, setQuantity] = useState(initialValue);
    const dispatch = useDispatch();
    const handleChange = ({ target }) => {
        const { value } = target;
        const newValue = +value;
        if (value < 1) return;
        setQuantity(value);
        dispatch(changeQuantity({ quantity: newValue, id }));
    };
    useEffect(() => {
        setQuantity(quantity);
    }, [quantity]);
    return (
        <div className="d-flex flex-column justify-content-center">
            <label htmlFor={name}>{label}</label>
            <div className="input-group">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={quantity2}
                    onChange={handleChange}
                    className="form-control form-control-sm"
                />
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    id: PropTypes.string
};

export default TextField;
