import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
    // baseURL: "http://13.50.113.43:3000/api/v1/", //main
    // baseURL: "http://32.199.40.117:5000/api/v1/", //testing

});

const STORAGE_KEY = "app_auth";

http.interceptors.request.use((config) => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
        try {
            const { token } = JSON.parse(raw);
            if (token) config.headers.Authorization = `Bearer ${token}`;
        } catch { }
    }
    return config;
});

