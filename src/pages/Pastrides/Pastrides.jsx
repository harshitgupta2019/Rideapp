import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
// import Navbar from '../../components/Navbar'
import '../Nearestrides/Nearestrides.css'
// import InfiniteScroll from "react-infinite-scroll-component";
import Displaycard from '../../components/Displaycard'
const Pastrides = () => {

  const [ride,setRide]=useState([]);
  const [station,setStation]=useState([]);
  const[date,setDate]=useState(new Date());

  let fetchUrl=`https://assessment.api.vweb.app/rides`
  let fetchUrl1=`https://assessment.api.vweb.app/user`
  useEffect(()=>{
      async function getUsers(){
          const request=await axios.get(fetchUrl);
          const req=await axios.get(fetchUrl1);
          setStation(req.data.station_code);
          setRide(request.data)
          console.log(request.data.length)
          return request;
      }
      getUsers();
  },[fetchUrl]);

  let arr=[]
  for(let i=0;i<ride.length;i++)
  {   let d=Number.MAX_VALUE;
      for(let j=0;j<ride[i].station_path.length;j++)
      {
          d=Math.min(d,Math.abs(ride[i].station_path[j]-station));
      }
      //  console.log(ride[i].date);
      
      if(ride[i].date.charAt(17)==='P')
      var date1 = new Date(ride[i].date.charAt(6)+ride[i].date.charAt(7)+ride[i].date.charAt(8)+ride[i].date.charAt(9), ride[i].date.charAt(0)+ride[i].date.charAt(1)-1,ride[i].date.charAt(3)+ride[i].date.charAt(4) , ride[i].date.charAt(11)+ride[i].date.charAt(12)+12, ride[i].date.charAt(14)+ride[i].date.charAt(15),date.getSeconds());
      else
      var date1 = new Date(ride[i].date.charAt(6)+ride[i].date.charAt(7)+ride[i].date.charAt(8)+ride[i].date.charAt(9), ride[i].date.charAt(0)+ride[i].date.charAt(1)-1,ride[i].date.charAt(3)+ride[i].date.charAt(4) , ride[i].date.charAt(11)+ride[i].date.charAt(12), ride[i].date.charAt(14)+ride[i].date.charAt(15),date.getSeconds());
    
      // console.log(date1);
      // console.log(date);
      if(date>date1)
      {
        // console.log(1);
        arr[d]=ride[i];
      arr[d]['distance']=d;
      }       

  }
  
  return (
    <div className='container'>
      {
              arr.map((e)=>(
                  <div className="card">

                      <Displaycard id={e.id} city={e.city} date={e.date} path={e.station_path} distance={e.distance} originstation={e.origin_station_code}/>
                  </div>
                  
              ))
          }
    </div>
  )
}

export default Pastrides
