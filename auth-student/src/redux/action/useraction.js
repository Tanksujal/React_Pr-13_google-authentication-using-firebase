import { app } from "../../config/firbaseconfig"
import {getFirestore,addDoc,collection} from 'firebase/firestore'
const db =  getFirestore(app)
export const ADDSTD = (user) => {
    return async(dispatch) => {
        try {
            console.log(user);dd
            await addDoc(collection(db,"student"),{
                name : user.name,
                phone : user.phone
            })
            dispatch({
                type : "ADDSTD",
                payload : user
            })
        } catch (error) {
            dispatch({
                type : "ADDSTD_ERROR",
                payload : error
            })
        }
    }
}
