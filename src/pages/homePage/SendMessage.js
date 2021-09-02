import React, { useState } from "react";

const SendMessage = () => {
    const [valueOfInput, setvalueOfInput] = useState("");

    const sendMessageWithEnter = (e) => {
        const KEY_DOWN = e.key;
        const ENTER = "Enter";
        console.log(e);
        if (KEY_DOWN === ENTER) {
            setvalueOfInput("");
            console.log(e.target.value);
        }
    };

    return (
        <div className="send-message-container col-12">
            <textarea
                className="send-message-container__ta w-100"
                type="text"
                value={valueOfInput}
                onChange={(e) => {
                    setvalueOfInput(e.target.value);
                }}
                onKeyDown={(e) => sendMessageWithEnter(e)}
            />
            <div className="send-message-container__icon ">
                <i className="fas fa-thumbs-up"></i>
            </div>
        </div>
    );
};

export default SendMessage;
