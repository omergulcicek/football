import React from "react"
import Chart from "./../components/Chart"
import GetAchievements from "./../components/GetAchievements"
import Skills from "./Skills"
import allPlayer from "./../players.json"

export default function getPlayers() {
  const list = allPlayer.players.filter(e => !e.legend).sort((a, b) => (a.rating > b.rating) ? 1 : -1).reverse()

  let result = []
  list.map(({name, picture, team, country, position, rating, skills, ballondor, besteurope, teamoftheyear, goldenboy}, i) => 
  result.push(
    <article name={name} key={i}>
      <div className="figure">
        <figure>
          <img src={require(`../img/player/${picture}.png`)} alt={name} width="160" />
        </figure>

        <figure>
          <img src={require(`../img/country/${country.toLowerCase()}.png`)} alt={country} width="40" />
          <img src={require(`../img/team/${team}.png`)} alt={team} width="40" />
        </figure>

        <GetAchievements
          ballondor={ballondor}
          besteurope={besteurope}
          goldenboy={goldenboy}
          teamoftheyear={teamoftheyear}
        />
      </div>

      <div className="info">
        <span className="name">{name}</span>
        <span className="rating">{rating}</span>
      </div>

      <div className="skills">
        <Skills skills={skills} position={position} />
      </div>

      <div className="graph">
        <Chart skills={skills} position={position} />
      </div>
    </article>
    )
  )

  return result
}