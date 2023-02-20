export const getAuthFromLS = () => {
  const rawData = localStorage.getItem("auth");
  const authData = JSON.parse(rawData);
  if (!authData) return null;
  return authData;
};

export const buildSearchQueryString = (params = {}) => {
  // Aggiungi eventuali parametri di default
  const defaultParams = {
    dest_id: 1,
    order_by: "popularity",
    adults_number: "1",
    rooms: 1,
    children_number: 0,
    page_number: 0,
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
