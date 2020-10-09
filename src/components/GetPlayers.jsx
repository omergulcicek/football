import React from "react"
import Chart from "./../components/Chart"
import allPlayer from "./../players.json"

export default function getPlayers() {
  const list = allPlayer.players.filter(e => e.legend).sort((a, b) => (a.rating > b.rating) ? 1 : -1).reverse()

  let result = []
  list.map(({fullname, name, country, team, position, rating, skills}, i) => 
  result.push(
    <article name={name} key={i}>
      <figure className="picture">
        <img src={require(`../img/player/${toKebabCase(fullname)}.png`)} alt={name} height="160" width="160" />
      </figure>

      <figure className="team">
        <img src={require(`../img/team/${team}.png`)} alt={country} height="124" width="124" />
      </figure>
      
      <h1 className="name">{name}</h1>

      <h6 className="rating">{rating}</h6>

      <Chart skills={skills} position={position} />
    </article>
    )
  )

  return result
}

function toKebabCase(url) {
  return url.toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/\s+/g,'-')
    .replace(/\ı+/g,'i')
    .toLowerCase()
    .replace(/&/g,'-and-')
    .replace(/[^a-z0-9\-]/g,'')
    .replace(/-+/g,'-')
    .replace(/^-*/,'')
    .replace(/-*$/,'');
}