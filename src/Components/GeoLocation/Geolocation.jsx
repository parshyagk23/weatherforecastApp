import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchlocation } from "../../Apis/FetchGeoLocation";
import { fetchSearchedLoc } from "../../Apis/fetchSearchedLoc";
import styles from "./Geolocation.module.css";
import searchImg from '../../assets/icons/search.png'
const Geolocation = () => {
  const navigate = useNavigate()
  const [LocationData, setLocationData] = useState({
          AllLocationData:'',
          SearchLocation:'',
          SortByLocation:'',
          SearchedData:undefined,
  });

  const [loading , setloading] = useState(false)
  useEffect(() => {
    geoLocation();
  }, []);

 
  const geoLocation = async () => {
    setloading(true)
    const data = await fetchlocation();
    setLocationData({...LocationData ,AllLocationData:data});
    setloading(false)
  };
  const SearchLoc = async () => {
    if(!LocationData.SearchLocation  ){
      alert("Enter the location")
      return
    }
    setloading(true)
    const data = await fetchSearchedLoc(LocationData.SearchLocation,LocationData.SortByLocation);
    setLocationData({...LocationData ,SearchedData:data});
    setloading(false)
  };


  const HandleonChange = (e) =>{
    setLocationData({...LocationData , [e.target.name]:e.target.value})
  }
  
  
  const LocationTableData = !LocationData.SearchedData?LocationData.AllLocationData:LocationData.SearchedData

  return (
    <div className={styles.bodybg} >
    <main className={styles.maincontainer}>
      <h1>Weather Forcast Web Application</h1>
      <section className={styles.searchsection}>
        <div className={styles.searchinput}>
          <input
              type="text"
              placeholder="Search by City, Country & Time-Zone"
              name="SearchLocation"
              onChange={HandleonChange}
            />
            <img src={searchImg} alt="" onClick={SearchLoc}  />
            
        </div>
        <div className={styles.sortSection} >
          <label htmlFor="">Sort by</label>
          <select name="SortByLocation" id=""  onChange={HandleonChange} >
            <option value="ascii_name">City</option>
            <option value="cou_name_en">Country</option>
            <option value="timezone">Time/Zone</option>
          </select>
        </div>
      </section>


      <div className={styles.tablediv}>
        {loading ?<div className={styles.loader}></div>:
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Country</th>
              <th>Timezone</th>
            </tr>
          </thead>

          <tbody>
            
            {LocationTableData?.results?.map((loc, index) => (
              <tr key={index}>
          
                  <td style={{ cursor:'pointer' }}
                    onClick={()=>{
                     
                      navigate(`/${loc.ascii_name}`,
                      {
                        state:{
                          LocData:loc.coordinates
                        },
                      });
                    }}
                   >{loc?.ascii_name}</td>
               
                <td>{loc?.cou_name_en}</td>
                <td>{loc?.timezone}</td>
              </tr>
            ))}
          </tbody>
        </table>
}
      </div>
    </main>
    </div>
  );
};

export default Geolocation;
