export const getAuthFromLS = () => {
  const rawData = localStorage.getItem("auth");
  const authData = JSON.parse(rawData);
  if (!authData) return null;
  return authData;
};

export const wait = (func,time) => {
  setTimeout(() => {
    func()
    console.log("TOPPETEEEE");
  }, time);
};
