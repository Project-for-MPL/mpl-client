import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER}`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

export const apis = {
  getDetailPlaylist: async (id: number) => {
    try {
      const response = await api.get(`/detail/${id}`);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },
};
