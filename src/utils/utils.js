export const getAuthFromLS = () => {
  const rawData = localStorage.getItem("auth");
  const authData = JSON.parse(rawData);
  if (!authData) return null;
  return authData;
};


export const wait = () => {

  setTimeout(() => {
    console.log("TOPPETEEEE")
 },1000)

 
}