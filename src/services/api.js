/**
 * Created by chalosalvador on 25/2/21
 */
import axios from "axios";
import Constants from "expo-constants";

const api = axios.create({
  baseURL: Constants.manifest.extra.apiBaseURL,
  withCredentials: true,
});

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export default api;
