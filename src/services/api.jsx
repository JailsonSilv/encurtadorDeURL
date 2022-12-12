// Minha chave: a69201a79f3833611a753a16f7cd9e839f5034f9
// BaseURL: https://api-ssl.bitly.com/v4

import axios from "axios";

export const key = "a69201a79f3833611a753a16f7cd9e839f5034f9"

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers: {
        "Authorization": `Bearer ${key}`
    }
})

export default api;
