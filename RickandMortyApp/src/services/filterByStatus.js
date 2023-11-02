const BASE_URL = "https://rickandmortyapi.com/api";

export const FilterbyStatus = async (gender, pagination) => {
    
    const response = await fetch(`${BASE_URL}/character/?status=${gender}&page=${pagination}`, {
      "method": "GET"
    })
        const data = await response.json();
        const arreyPost = data.results;
        console.log(data);
        console.log(arreyPost)
        return arreyPost;
    };