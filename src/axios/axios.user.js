import {BASE_URL2} from  "../utils/constants"
import axios from 'axios'


export const createUser = async (nombre, email, password) => {
    try {
        const { data } = await axios.post(`${BASE_URL2}/auth/register`, {
            nombre,
            email,
            password
        })
        return data
    } catch (error) {
        console.log({ createUserError: error })
        return alert(error.response.data.errors[0].msg)
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL2}/auth/login`, {
            email,
            password
        })
        return response.data
    } catch (error) {
        console.log({ loginUserError: error })
        return alert(error.response.data.errors[0].msg)
    }
}
