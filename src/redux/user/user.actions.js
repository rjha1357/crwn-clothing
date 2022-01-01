<<<<<<< HEAD
import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
=======
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
>>>>>>> ba24d945bbf902d82fa891b2cc4d251df722764d
    payload: user
})