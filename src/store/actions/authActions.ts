import {AUTH_TYPES} from "../actionTypes/authTypes";


type SetUserDataType = {
    type: AUTH_TYPES.SET_USER_DATA;
    payload: { data: any }
};
export const setUserData = (data: any): SetUserDataType => ({
    type: AUTH_TYPES.SET_USER_DATA,
    payload: {data}
});


export type AuthACType = SetUserDataType

export const authAC = {
    setUserData
};
