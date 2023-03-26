import React from 'react'
import "../App.css"
import { standing } from '../api'


const LeadershipBoard = () => {
  return (
   <>
    <div className="container">
  <h2>League Standings</h2>
  <table className="table table-striped">
    <thead  style={{background: "rgb(201, 202, 236)",fontWeight:"lighter"}}>
      <tr>
        <th>Teams</th>
        <th>MP</th>
        <th>GF</th>
        <th>GA</th>
        <th>Points</th>
      </tr>
    </thead>
  {
standing.map((item)=>(
  <tbody  key={item.id
  }>
      <tr> 
        <td className='p-3'>{item.team}
        <img src={item.flag} alt="Home Flag" width="53" height="37" style={{marginLeft:"10px"}}/>
        </td>
        <td>{item.MP}</td>
        <td>{item.GF}</td>
        <td>{item.GA}</td>
        <td>{item.Points}</td>
      </tr>
    
     
    </tbody>
))
  }
  </table>
</div>

   </>
  )
}

export default LeadershipBoard