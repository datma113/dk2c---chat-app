import axios from "axios";
import {
    API_SIGN_IN_WITH_PHONE,
    API_SIGN_UP_CHECK_MAIL,
    API_SIGN_UP_IMFORMATION,
    API_SIGN_UP_RESEND,
    API_SIGN_UP_VERIFY,
} from "../redux/constants/api";
function RegisterService() {}

RegisterService.prototype = {
    registerUserAccountInitialStep(user) {
        return axios.post(API_SIGN_UP_IMFORMATION, user);
    },

    registerUserAccountVerifyEmailStep(user) {
        return axios.post(API_SIGN_UP_CHECK_MAIL, user);
    },

    registerUserAccountVerifyOtpStep(user) {
        return axios.post(API_SIGN_UP_VERIFY, user);
    },
    resendOTPEmail(user) {
        return axios.post(API_SIGN_UP_RESEND, user);
    },
    verifyWithPhone(user) {
        return axios.post(API_SIGN_IN_WITH_PHONE, user);

    }
};

export default new RegisterService();
