import React from "react"
import Chart from "./../components/Chart"
import allPlayer from "./../players.json"

export default function getPlayers() {
  const list = allPlayer.players.filter(e => !e.legend).sort((a, b) => (a.rating > b.rating) ? 1 : -1).reverse()

  let result = []
  list.map(({name, picture, team, position, rating, skills}, i) => 
  result.push(
    <article name={name} key={i}>
      <figure className="picture">
        <img src={require(`../img/player/${picture}.png`)} alt={name} height="160" width="160" />
      </figure>

      <figure className="team">
        <img src={require(`../img/team/${team}.png`)} alt={team} height="124" width="124" />
      </figure>
      
      <h1 className="name">{name}</h1>

      <h6 className="rating">{rating}</h6>

      <Chart skills={skills} position={position} />
    </article>
    )
  )

  return result
}