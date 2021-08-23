import {
    STORE_USER_INFO_WHEN_REGISTER,
    STORE_USER_INFO_WHEN_DONE_REGISTER_STEP_1,
    CLEAR_USER_INFO_WHEN_DONE_REGISTER,
} from "../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, key, value, user } = action;
    switch (type) {
        case STORE_USER_INFO_WHEN_REGISTER:
            let currentUserRegisterInfo = { ...state };
            currentUserRegisterInfo[key] = value;
            return currentUserRegisterInfo;

        case STORE_USER_INFO_WHEN_DONE_REGISTER_STEP_1:
            return user;
        case CLEAR_USER_INFO_WHEN_DONE_REGISTER:
            return {};
        default:
            break;
    }

    return state;
};

export default reducer;
