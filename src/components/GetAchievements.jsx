import React from "react"
import { Cup, Diamond } from "./../components/svg"

export function getCup(value, type) {
  const color = type === "ballondor" ? "#ffd700" : "#d3d3d3"
  let result = []
  for (let i = 0; i < value; i++) {
    result.push(<Cup style={{color: color}} key={i} />)
  }

  return result
}

export default function GetAchievements({ballondor, besteurope, goldenboy, teamoftheyear}) {
  return <>
    <div title={`${ballondor} x Ballon d'Or`}>
      {getCup(ballondor, "ballondor")}
    </div>
    
    <div title={`${besteurope} x Best Europe`}>
      {getCup(besteurope, "besteurope")}
    </div>
    
    {
      goldenboy &&
      <div title="Golden Boy">
        <Diamond style={{color: "#b9f2ff"}} />
      </div>
    }
    
    {
      teamoftheyear &&
      <div title={`${teamoftheyear} x Team of the Year`} className="teamoftheyear">
        {teamoftheyear}
      </div>
    }
  </>
}