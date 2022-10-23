import axios from "axios";

class postAuth {

    async authRequest(data) {
        const response = await axios.post(`${process.env.BASE_URL}/user/login`, data)
            .catch(error => error)
        return response;
    }
}

export default new postAuth();
