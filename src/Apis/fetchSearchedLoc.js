import  axios from "axios";

export const fetchSearchedLoc = async (location,sortloc) =>
{
    try {
        const GeoLocationUrl = import.meta.env.VITE_REACT_APP_GEOLOCTIONURL 
        const locUrl = GeoLocationUrl +`where=ascii_name%20like%20%22%25${location}%25%22%20or%20timezone%20like%20%22%25${location}%25%22%20or%20cou_name_en%20like%20%22${location}%25%22&order_by=${sortloc}&limit=100`
        const responce = await axios.get(locUrl)

        if(!responce){
           return
        }
       
       return responce.data
        
    } catch (error) {
        
    }
}


