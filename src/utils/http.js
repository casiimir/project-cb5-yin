const BASE_URL = "https://booking-com.p.rapidapi.com/v1";
//'https://booking-com.p.rapidapi.com/v1/hotels/data?locale=en-gb&hotel_id=1377073'

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

const GET = async (resource) => {
  try {
    const res = await fetch(` ${BASE_URL}/${resource}`, options);

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

export { GET };
