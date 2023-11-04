import axios from 'axios';

const BASE_URL = "https://rickandmortyapi.com/api";

export const FilterbySpecies = async (species, pagination) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/?species=${species}&page=${pagination}`);
    const data = response.data;
    const arreyPost = data.results;
    console.log(data);
    console.log(arreyPost);
    return arreyPost;
  } catch (error) {
    console.error(error);
    throw error; // Opcional: re-lanza el error para que el manejador de errores pueda tratarlo
  }
};
