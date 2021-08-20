import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
const MyCustomButton = ({ label, typeButton, data, iconClass, isGoBackHistory }) => {
    const history = useHistory();

    const checkGoBackHistory = (isGoBack) => {
        return isGoBack ? history.goBack() : null;
    };

    return (
        <div
            className={`btn btn-${typeButton} mb-3 btn-welcome`}
            onClick={() => {
                checkGoBackHistory(isGoBackHistory);
            }}
        >
            <i className={`${iconClass} btn-welcome__icon`}></i>
            {label}
        </div>
    );
};

export default MyCustomButton;

MyCustomButton.propTypes = {
    label: PropTypes.string,
    typeButton: PropTypes.string,
    data: PropTypes.object,
    iconClass: PropTypes.string,
    isGoBackHistory: PropTypes.bool,
};
