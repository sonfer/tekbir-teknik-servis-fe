import {LoginRequestModel} from "../models/loginRequestModel";

export const login = ({email, password} : LoginRequestModel) => {
    return {
        email,
        password
    }
}
