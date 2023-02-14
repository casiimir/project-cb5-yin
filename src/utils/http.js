
const BASE_URL = "https://booking-com.p.rapidapi.com/v1";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8453e886a0msh16832b6612d4d91p1b60cfjsn89ba347a3b33',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
};


const GET = async (resource) => {
    try {
      const res = await fetch(` ${BASE_URL}/${resource}`,options);
  
      if (res.status >= 400) {
        throw new Error("Abbiamo un problema di connessione");
      }
  
      const data = await res.json();
  
      return data;
    } catch (err) {
      return { status: false };
    } finally {
      // console.log("FINALLY SEMPRE E COMUNQUE");
    }
  };

  export {GET}