import axios from "axios";


export const Get = (endPoints) => {
  return axios.get( endPoints);
};
