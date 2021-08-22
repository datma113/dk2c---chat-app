import React from "react";
import MyCustomButton from "../../components/MyCustomButton";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";

const VerifyEmail = ({ gotoPreviousStepOfRegister }) => {
    return (
        <div>
            <TextInput
                label="Email của bạn"
                id={0}
                type="text"
                regexPattern={
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }
                keyStoreToReducer="email"
                checkRegex={regexInputModule.checkRegexOfUserEmail}
            />
            <MyCustomButton
                label="xác nhận"
                typeButton="secondary"
            />
            <MyCustomButton
                label="Quay lại"
                typeButton="light"
                iconClass="fas fa-long-arrow-alt-left"
                gotoPreviousStepOfRegister={gotoPreviousStepOfRegister}
               
            />
        </div>
    );
};

export default VerifyEmail;
