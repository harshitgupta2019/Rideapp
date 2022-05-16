import React from 'react'
import { useState } from 'react';
import './Displaycard.css'
import img from './image.svg'
const Displaycard = (props) => {
    let { id,city,path,date,distance,originstation } = props;
    // console.log(path)
    // const[path,setPath]=useState([])
    // setPath(station_path)
//   return (
//     <div classname='content'>
//       Hello
//     </div>
//   )
return (
    <div className="content ">
        {/* <div className="img"> */}
            <img src={img} alt="" />
        {/* </div> */}
            <div className="content-text" style={{marginLeft:"0px",display:"grid",marginLeft:"350px",textAlign:"left",padding:"17px"}} >
                <h1 style={{fontWeight:"50",fontSize:"18px"}}>Ride Id : {id}</h1>
                <h1 style={{fontWeight:"50",fontSize:"18px"}}>Origin Station : {originstation}</h1>
                <h1 style={{fontWeight:"50",fontSize:"18px"}}>station_path :[{path.toString()}]</h1>
                <h1 style={{fontWeight:"50",fontSize:"18px"}}>Date : {date}</h1>
                <h1 style={{fontWeight:"50",fontSize:"18px"}}>Distance : {distance}</h1>
            </div>
                
                
    </div>
)
}

export default Displaycard
