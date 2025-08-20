import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const instance = axios.create({
  baseURL: baseUrl,
});

export const setToken = (token:{success:boolean; token:string}): void => {
  instance.defaults.headers.common.Authorization = `Bearer ${token.token}`;
};

export const fetchToken = async (): Promise<string | null> => {
    try {
        const response = await instance.get("/token");
        return response.data.token;
    } catch (error) {
        console.error("Error fetching token:", error);
        return null;
    }
}

// export const token = await fetchToken();
// if (token) {
//   setToken({ success: true, token });
// }


