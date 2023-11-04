import axios from 'axios';
const BASE_URL = "https://rickandmortyapi.com/api";


export const FilterbyGender = async (gender, pagination) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/?gender=${gender}&page=${pagination}`);
    const data = response.data;
    const arreyPost = data.results;
    return arreyPost;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
