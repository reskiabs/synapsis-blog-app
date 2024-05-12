import axios from "axios";

const API_BASE_URL = "https://gorest.co.in/public/v2";
const token =
  "25c0043608e99549eb0c6442a53529fe92b0e89a7c1468d59a8667adb5c887ab";
export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Error fetching data: ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Tidak ada tanggapan dari server");
    } else {
      throw new Error("Gagal melakukan permintaan ke server");
    }
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error creating user: ${error.response.status}`);
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/users/${userId}`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error updating user: ${error.response.status}`);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.response.status}`);
  }
};
