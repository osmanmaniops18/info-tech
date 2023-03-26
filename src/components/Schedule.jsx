import React from 'react'

import "../App.css"
import {schdule} from "../api.js"


const Schedule = () => {
  return (
    <>
    <div className='container-fluid'>
    <h2>Leagui Schedule</h2>
    <table className="table" >
  <thead style={{background: "rgb(201, 202, 236)",fontWeight:"lighter"}}>
    <tr>
      <th>Date/Time</th>
      
      <th>Stadium</th>
      <th>Home Team</th>
      <th ></th>
      <th>Away Team</th>
   
    </tr>
  </thead>
{
  schdule.map((item)=>(
    <tbody key={item.id}>
    <tr style={{backgroundColor: item.id%2===0 ? "#f2f2f2" : ""}}>
      <td>{item.date}</td>
      
      <td>{item.stadium}</td>
      <td style={{fontWeight:"bolder"}}>
       
        {item.team_1}
        <img src={item.flag1} alt="Home Flag" width="53" height="37" style={{marginLeft:"10px"}}/>
      </td>
      <td style={{fontWeight:"bolder"}}>{item.result}</td>
      <td style={{fontWeight:"bolder"}}>
      <img src={item.flag2} alt="Away Flag" width="53" height="37" style={{marginRight:"10px"}}/>
        {item.team_2}
        
      </td>
    </tr>
  
  </tbody>
  ))
}
 
</table>

    </div>
    </>
  )
}

export default Schedule