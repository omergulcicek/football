import React from "react"
import GetPlayers from "./../components/GetPlayers"

function Players() {
  const strikers = <GetPlayers position="Striker" />
  const midfields = <GetPlayers position="Midfield" />
  const defenses = <GetPlayers position="Defense" />
  const goalkeepers = <GetPlayers position="Goalkeeper" />

  return (
    <div className="player-list">
      {strikers}
      {midfields}
      {defenses}
      {goalkeepers}
    </div>
  )
}

export default Players