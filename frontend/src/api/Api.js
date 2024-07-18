import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000" });

export const getPlaces = (params) =>
  api.get("/api/places", { params }).then((res) => res.data);
export const getPlace = (id) =>
  api.get(`/api/place/${id}`).then((res) => res.data.place);
export const addPlace = (data) => api.post(`/api/places`, data);
export const delPlace = (id) => api.delete(`/api/place/${id}`);
