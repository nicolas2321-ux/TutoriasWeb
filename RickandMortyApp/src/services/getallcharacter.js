import axios from 'axios';

const BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacter = async (page) => {
  try {

    const response = await axios.get(`${BASE_URL}/character/?page=${page}`);
    console.log(response);
    const data = response.data.results;
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Opcional: re-lanza el error para que el manejador de errores pueda tratarlo
  }
};
