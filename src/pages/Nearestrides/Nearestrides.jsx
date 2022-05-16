import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link,useLocation,useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

// import Navbar from '../../components/Navbar'
import './Nearestrides.css'
// import InfiniteScroll from "react-infinite-scroll-component";
import Displaycard from '../../components/Displaycard'
const Nearestrides = () => {
    let location=useLocation();
    console.log(location);
    const [ride,setRide]=useState([]);
    // const tag=useParams();
    // console.log(tag);
    const [station,setStation]=useState([]);
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
        // console.log(d);
        arr[d]=ride[i];
        arr[d]['distance']=d;
        // console.log(typeof(ride[i]));

    }
    // console.log(arr);
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

export default Nearestrides
