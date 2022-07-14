import React from "react";
import PropTypes from "prop-types";

const PageFormSwitcher = ({ onTogglePageForm, forms, activeForm }) => {
    return (
        <div className="btn-group py-3" role="group">
            {forms.map((form) => (
                <button
                    key={form.id}
                    className={
                        "btn border border-danger btn-sm btn-" +
                        form.color +
                        (activeForm === form.name && " active")
                    }
                    onClick={() => onTogglePageForm(form.name)}
                >
                    <i className={"bi bi-" + form.name}></i>
                </button>
            ))}
        </div>
    );
};

PageFormSwitcher.propTypes = {
    onTogglePageForm: PropTypes.func,
    forms: PropTypes.arrayOf(PropTypes.object),
    activeForm: PropTypes.string
};

export default PageFormSwitcher;
