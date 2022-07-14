import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    return (
        <div className="">
            {items.map((item) => (
                <span
                    key={item[valueProperty]}
                    className={
                        "badge text-dark m-1 p-2 border border-2 " +
                        (item[contentProperty] === selectedItem
                            ? " border-danger "
                            : " ")
                    }
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    {item[contentProperty]}
                </span>
            ))}
        </div>
    );
};
GroupList.defaultProps = {
    valueProperty: "ID",
    contentProperty: "NAME"
};
GroupList.propTypes = {
    items: PropTypes.array.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.string
};

export default GroupList;
