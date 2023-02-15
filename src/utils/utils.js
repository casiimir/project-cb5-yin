
export const getAuthFromLS = () => {
    
    const rawData = localStorage.getItem("auth")
    console.log(rawData);
    const authData = JSON.parse(rawData)
    if(!authData) return null
    return authData
}

