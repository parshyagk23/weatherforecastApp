import  axios from "axios";

export const FetchWetherForcast = async (lat,lon) =>
{
    try {
        const WetherForcastAPI= import.meta.env.VITE_REACT_APP_WETHER_API_KEY
        const WetherForcastUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${WetherForcastAPI}`
        const responce = await axios.get(WetherForcastUrl)

        if(!responce){
            return 
        }
     
       return responce.data
        
    } catch (error) {
        return error.message
    }
}