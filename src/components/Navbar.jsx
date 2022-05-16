import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Link,useNavigate, useParams } from 'react-router-dom'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const[name,setName]=useState();
  
    const[url,setUrl]=useState();
    const[ride,setRide]=useState();
    const[stat,setStat]=useState();
    const[cty,setCty]=useState();
    let fetchUrl=`https://assessment.api.vweb.app/user`
    let furl=`https://assessment.api.vweb.app/rides`
    useEffect(()=>{
        async function getUsers(){
            const request=await axios.get(fetchUrl);
            const req=await axios.get(furl);
            setRide(req.data);
            
            setName(request.data.name)
            setUrl(request.data.url)
            return {request,req};
            
        }
        getUsers();
    },[fetchUrl]);
    
    const targetDiv = document.getElementById("third");
    function handleClick(){
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
          } else {
            targetDiv.style.display = "block";
          }
    }
  return (
      
    
    <div className='main-nav'>
          <div className='navbar'>
              <div className="heading">
                  Edvora
              </div>
              <div className='name'>

              <p>{name}</p>
              <img src={url} alt="" />
              </div>
          
          </div>
          <div className="componentbar">
          <NavLink to='/nearest_rides' className="nav-links1" activeClassName="active"  >
                <p>Nearest Rides</p>
            </NavLink>
            <NavLink to='/upcoming_rides' className="nav-links2" activeClassName="active" >
                <p>Upcoming Rides</p>
            </NavLink>
            <NavLink to='/past_rides' className="nav-links3" activeClassName="active" >
                <p>Past Rides</p>
            </NavLink>
            <img src={logo} alt="" className='filter-img' />
            <button className='btn' onClick={handleClick}>Filter</button>
          </div>
          <div className="pop-up" id='third'>
              <p>Filters</p>
              <hr />
              <div className="pop1">
                <div className="pop11">

              <label for="state" >State</label>
              <select name="state" id="state" onChange={(e)=>setStat(e.target.value)}>

              {/* {ride.map((option) => (
              <option value={option.state}>{option.state}</option>
            ))} */}
              </select>
                </div>
              </div>
              <div className="pop2">
                  <div className="pop22">
                  <label for="city">City</label>
                  <select name="city" id="city" onChange={(e)=>setCty(e.target.value)}>
                  {/* {ride.map((option) => (
              <option value={option.city}>{option.city}</option>
            ))} */}
                
              </select>
              
                  </div>
              </div>
             
          </div>
          
      </div>
      
  )
}

export default Navbar
