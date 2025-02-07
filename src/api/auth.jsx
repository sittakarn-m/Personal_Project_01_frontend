import axios from "axios"

export const actionRegister = async (value) => {
    return await axios.post("http://localhost:8000/api/register", value)
}

export const actionLogin = async (value) => {
    return await axios.post("http://localhost:8000/api/login", value)
}