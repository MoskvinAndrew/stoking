import {authApi} from "api/db";
import {authAC} from "../actions/authActions";

export const fetchAuth = () =>
    async (dispatch: any) => {

        let data = await authApi.signIn();

        console.log(data);
    };

export const authTC = {
    fetchAuth,
};