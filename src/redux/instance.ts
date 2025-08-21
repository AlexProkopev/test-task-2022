import { User } from "@/types/user";
import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const fetchToken = async (): Promise<string | null> => {
    try {
        const response = await axios.get(`${baseUrl}token`);
        return response.data.token;
    } catch (error) {
        console.error("Error fetching token:", error);
        return null;
    }
}

 export const fetchUsersById = async (id: string): Promise<{success:boolean, user: User} | null> => {
    try {
        const response = await axios.get(`${baseUrl}users/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        return null;
    }
};

