import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="d-flex flex-column justify-content-center">
            <label htmlFor={name}>{label}</label>
            <div className="input-group">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className=""
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
};

export default TextField;
