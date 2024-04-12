import  axios from "axios";
export const fetchlocation = async () =>
{
    try {
        const GeoLocationUrl = import.meta.env.VITE_REACT_APP_GEOLOCTIONURL 
        const locUrl = GeoLocationUrl +'where=cou_name_en%20like%20%22india%22&limit=100'
        const responce = await axios.get(locUrl)

        if(!responce){
            return 
        }

       return responce.data
        
    } catch (error) {
        return error.message
    }
}