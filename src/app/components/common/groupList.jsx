import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItems
}) => {
    return (
        <div className="">
            {items.map((item) => (
                <span
                    key={item[valueProperty]}
                    className={
                        "badge opacity-50 text-dark m-1 p-2 border border-2 " +
                        (selectedItems.find(el => el.NAME === item[contentProperty]) ? " border-danger opacity-100 "
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
    selectedItems: PropTypes.array
};

export default GroupList;
