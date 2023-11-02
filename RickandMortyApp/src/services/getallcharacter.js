const BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacter = async (page) => {
    
    const response = await fetch(`${BASE_URL}/character/?pag=${page}`, {
      "method": "GET"
    })
        const data = await response.json();
        const arreyPost = data.results;
        console.log(data);
        console.log(arreyPost)
        return arreyPost;
    };