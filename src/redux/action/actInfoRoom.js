import axios from "axios";
import {
    API_ADD_NEW_MEMBERS,
    API_CREATE_NEW_ROOM,
    API_EDIT_ROOM_NAME,
    API_GET_MEMBERS_IN_ROOM,
    API_INBOXS,
    API_OUT_ROOM,
} from "../constants/api";
import {
    STORE_MEMBERS_IN_ROOM,
    STORE_ROOM_NAME,
    UPDATE_NAME_OF_HEADER_CHAT_WHEN_EDIT_ROOM_NAME,
    UPDATE_NEW_ROOM_REALTIME,
    UPDATE_ROOM_NAME,
    DELETE_CONVERSATION,
    OUT_ROOM,
    RESET_CURRENT_INBOX_ID,
} from "../constants/constants";
export const storeRoomName = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_ROOM_NAME,
        key,
        value,
    };
};

const updateNameOfHeaderChatWhenEditRoomName = (name) => {
    return {
        type: UPDATE_NAME_OF_HEADER_CHAT_WHEN_EDIT_ROOM_NAME,
        name,
    };
};

export const editRoomName = (id, name) => {
    return (dispatch) =>
        axios.post(API_EDIT_ROOM_NAME + id, name).then((resp) => {
            dispatch({
                type: UPDATE_ROOM_NAME,
                roomId: id,
                newRoomName: resp.data,
            });

            dispatch(updateNameOfHeaderChatWhenEditRoomName(name.name));

            return Promise.resolve(resp.data);
        });
};

export const storeMembersInRoom = (members) => {
    return {
        type: STORE_MEMBERS_IN_ROOM,
        members,
    };
};
export const getMembersInRoom = (roomId) => {
    return (dispatch) =>
        axios.get(API_GET_MEMBERS_IN_ROOM + roomId).then((resp) => {
            dispatch(storeMembersInRoom(resp.data));
        });
};

export const addNewMembers = (members, roomId) => {
    return axios
        .post(API_ADD_NEW_MEMBERS + roomId, members)
        .then((resp) => {
            return Promise.resolve(resp.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

const updateNewRoomRealtime = (room) => {
    return {
        type: UPDATE_NEW_ROOM_REALTIME,
        newRoom: room,
    };
};

export const createNewRoom = (room) => {
    return (dispatch) => {
        return axios
            .post(API_CREATE_NEW_ROOM, room)
            .then((resp) => {
                dispatch(updateNewRoomRealtime(resp.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const deleteConvesation = (roomId) => {
    return (dispatch) => {
        return axios
            .delete(API_INBOXS + roomId)
            .then(() => {
                dispatch({
                    type: DELETE_CONVERSATION,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const outRoom = (roomId, inboxId) => {
    return (dispatch) =>
        axios
            .post(API_OUT_ROOM + roomId)
            .then(() => {
                dispatch({
                    type: OUT_ROOM,
                    inboxId,
                });

                dispatch({
                    type: RESET_CURRENT_INBOX_ID,
                });
            })
            .catch((err) => {
                console.log(err);
            });
};
