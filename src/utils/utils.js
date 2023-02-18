export const getAuthFromLS = () => {
  const rawData = localStorage.getItem("auth");
  const authData = JSON.parse(rawData);
  if (!authData) return null;
  return authData;
};

export const wait = (time) => {
  setTimeout(() => {
    console.log("TOPPETEEEE");
  }, time);
};
