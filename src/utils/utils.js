export const getAuthFromLS = () => {
  const rawData = localStorage.getItem("auth");
  const authData = JSON.parse(rawData);
  if (!authData) return null;
  return authData;
};
export const getFavouritesFromLS = () => {
  const rawData = localStorage.getItem("next-trip-favourites");
  const favouritesData = JSON.parse(rawData);
  if (!favouritesData) return null;
  return favouritesData;
};

/* const getTodayDate = () => {
  const oggi = new Date();
  const anno = oggi.getFullYear();
  const mese = (oggi.getMonth() + 1).toString().padStart(2, "0");
  const giorno = oggi.getDate().toString().padStart(2, "0");

  const domani = new Date();
  domani.setDate(oggi.getDate() + 1);
  console.log("mentre domani è: ", domani);

  return `${anno}-${mese}-${giorno}`;
}; */

export const buildSearchQueryString = (params = {}) => {
  // Aggiungi eventuali parametri di default
  const defaultParams = {
    dest_id: "1",
    order_by: "popularity",
    adults_number: 1,
    room_number: 1,
    checkin_date: "2023-08-18",
    checkout_date: "2023-08-19",
    children_number: 1,
    page_number: "0",
    filter_by_currency: "EUR",
    units: "metric",
    dest_type: "city",
    locale: "it",
    include_adjacency: true,
  };
  const allParams = { ...defaultParams, ...params };

  // Costruisci la query string
  return Object.keys(allParams)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(allParams[key])}`
    )
    .join("&");
};

export const wait = (func, time) => {
  setTimeout(() => {
    func();
    console.log("TOPPETEEEE");
  }, time);
};

export const datedifference = (check_in, check_out) => {
  const dataInizio = new Date(check_in);
  const dataFine = new Date(check_out);

  // Calcola la differenza in millisecondi tra le due date
  const differenzaInMillisecondi = dataFine - dataInizio;

  // Converti i millisecondi in giorni
  const millisecondiInUnGiorno = 1000 * 60 * 60 * 24;
  const differenzaInGiorni = Math.floor(
    differenzaInMillisecondi / millisecondiInUnGiorno
  );

  // Stampa il risultato
  console.log(
    `La differenza tra le due date è di ${differenzaInGiorni} giorni.`
  );
  return differenzaInGiorni;
};
