import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/episode";

export const getAllEpisodes = async () => {
  const res = await axios.get(`${baseUrl}`);
  return res;
};

export default {
  getAllEpisodes,
};
