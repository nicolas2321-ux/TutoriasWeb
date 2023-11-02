const BASE_URL = "https://rickandmortyapi.com/api";

export const searchByName = async (name) => {
    let arreyPost = {}
    const response = await fetch(`${BASE_URL}/character/?name=${name}`, {
      "method": "GET"
    })
        const data = await response.json();
        arreyPost = data.results;
        console.log(data);
        console.log(arreyPost)
        
        return arreyPost
    };