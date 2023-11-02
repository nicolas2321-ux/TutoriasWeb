const BASE_URL = "https://opentdb.com/api.php?";


export const getQuestions = async (object) => {
    
    const response = await fetch(`${BASE_URL}amount=${object.amount}&category=${object.category}&difficulty=${object.difficulty}&type=${object.type}`, {
      "method": "GET",
    })
        const data = await response.json();
        // const arreyPost = data.results;
        return data;
};

