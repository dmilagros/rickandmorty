import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/character";

export const getAll = async () => {
  const res = await axios.get(`${baseUrl}`);
  return res;
};

export const getCharactersPerPage = async (page) => {
  const res = await axios.get(`${baseUrl}/?page=${page}`);
  return res;
};

export const getEpisodesByIdChar = async (idCharacter) => {
  const res = await axios.get(`${baseUrl}/${idCharacter}`);
  return res;
};

export default {
  getAll,
  getCharactersPerPage,
  getEpisodesByIdChar,
};
