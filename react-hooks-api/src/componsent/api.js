import axios from 'axios';

const API_PATH = process.env.REACT_APP_API_PATH;
export async function getUsers() {
    const response = await axios.get(`${API_PATH}/users`)
    return response.data;
}

export async function getUser(id) {
    const response = await axios.get(`${API_PATH}/users/${id}`);
    return response.data;
      //추가2

}