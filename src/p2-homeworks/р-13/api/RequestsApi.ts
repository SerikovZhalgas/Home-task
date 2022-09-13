import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com',
})

export const requestAPI = {
    postValue (success: boolean) {
        return instance.post(`/auth/test/`, {success})
    },
    getValue () {
        return instance.get(`/auth/test/`)
            .then(response=>response.data)
    }
}