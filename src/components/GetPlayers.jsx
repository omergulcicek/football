import React from "react"
import Chart from "./../components/Chart"
import allPlayer from "./../players.json"

export function getSkills(name, value) {
  return <span className={getColor(value * 100)}><small>{name}</small> {Math.round(value * 100)}</span>
}

export function getColor(num) {
  if(num >= 95) return "best";
  else if(num >= 90) return "second";
}

export default function getPlayers() {
  const list = allPlayer.players.filter(e => !e.legend).sort((a, b) => (a.rating > b.rating) ? 1 : -1).reverse()

  let result = []
  list.map(({fullname, name, country, team, position, rating, skills}, i) => 
  {
    const pos = skills[0].meta.color;
    let table = [];

    const d = skills[0].data;

    if (pos === "#f44336") {
      table.push(
      <>
        {getSkills("Hız", d.speed)}
        {getSkills("Vizyon", d.vision)}
        {getSkills("Şut", d.attacking)}
        {getSkills("Pas", d.passing)}
        {getSkills("Kafa", d.heading)}
      </>
      )
    }
    else if (pos === "#23d160") {
      table.push(
      <>
        {getSkills("Hız", d.speed)}
        {getSkills("Vizyon", d.vision)}
        {getSkills("Şut", d.attacking)}
        {getSkills("Pas", d.passing)}
        {getSkills("Defans", d.defending)}
      </>
      )
    }
    else if (pos === "#2196f3") {
      table.push(
      <>
        {getSkills("Hız", d.speed)}
        {getSkills("Fizik", d.physical)}
        {getSkills("Defans", d.defending)}
        {getSkills("Pas", d.passing)}
        {getSkills("Kafa", d.heading)}
      </>
      )
    }
    else {
      table.push(
      <>
        {getSkills("Birebir", d.shotStopping)}
        {getSkills("İletişim", d.communication)}
        {getSkills("Ofansif", d.offensive)}
        {getSkills("Zıplama", d.heading)}
        {getSkills("Degaj", d.distribution)}
      </>
      )
    }

    result.push(
      <article name={name} key={i}>
        <div className="info">
          <figure className="picture">
            <img src={require(`../img/player/${toKebabCase(fullname)}.png`)} alt={name} height="160" width="160" />
          </figure>
  
          <figure className="team">
            <img src={require(`../img/team/${team}.png`)} alt={country} height="124" width="124" />
          </figure>
          
          <h1 className="name">{name}</h1>
  
          <h6 className="rating">{rating}</h6>
  
          <Chart skills={skills} position={position} />
        </div>
  
        <div className="skills">
          { table }
        </div>
      </article>
      )
    }
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

function convertLeagueName(league) {
  switch (league) {
    case "England": return "Premier League"; break;
    case "Spain": return "LaLiga"; break;
    case "Italy": return "Serie A"; break;
    case "Germany": return "Bundesliga"; break;
    case "France": return "Ligue 1"; break;
    case "Turkey": return "Spor Toto Süper Lig"; break;
    case "Holland": return "Eredivisie"; break;
    case "Portugal": return "Liga NOS"; break;
    case "Croatia": return "Croatian First League"; break;
    case "China": return "CSL"; break;
    case "Argentina": return "Super Liga Argentina"; break;
  
    default: return league; break;
  }
}