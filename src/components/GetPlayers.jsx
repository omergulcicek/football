import React from "react"
import Chart from "./../components/Chart"
import allPlayer from "./../players.json"

export default function getPlayers() {
  const list = allPlayer.players.filter(e => !e.legend).sort((a, b) => (a.rating > b.rating) ? 1 : -1).reverse()

  let result = []
  list.map(({fullname, name, country, team, position, rating, skills}, i) => 
  {
    const pos = skills[0].meta.color;
    let table = [];

    function getColor(num) {
      if(num >= 95) return "best";
      else if(num >= 90) return "second";
    }

    const d = skills[0].data;

    if (pos === "#f44336") {
      table.push(
      <>
        <span className={getColor(d.speed * 100)}><small>Hız</small> {Math.round(d.speed * 100)}</span>
        <span className={getColor(d.vision * 100)}><small>Vizyon</small> {Math.round(d.vision * 100)}</span>
        <span className={getColor(d.attacking * 100)}><small>Şut</small> {Math.round(d.attacking * 100)}</span>
        <span className={getColor(d.passing * 100)}><small>Pas</small> {Math.round(d.passing * 100)}</span>
        <span className={getColor(d.heading * 100)}><small>Kafa</small> {Math.round(d.heading * 100)}</span>
      </>
      )
    }
    else if (pos === "#23d160") {
      table.push(
      <>
        <span className={getColor(d.speed * 100)}><small>Hız</small> {Math.round(d.speed * 100)}</span>
        <span className={getColor(d.vision * 100)}><small>Vizyon</small> {Math.round(d.vision * 100)}</span>
        <span className={getColor(d.attacking * 100)}><small>Şut</small> {Math.round(d.attacking * 100)}</span>
        <span className={getColor(d.passing * 100)}><small>Pas</small> {Math.round(d.passing * 100)}</span>
        <span className={getColor(d.defending * 100)}><small>Defans</small> {Math.round(d.defending * 100)}</span>
      </>
      )
    }
    else if (pos === "#2196f3") {
      table.push(
      <>
        <span className={getColor(d.speed * 100)}><small>Hız</small> {Math.round(d.speed * 100)}</span>
        <span className={getColor(d.physical * 100)}><small>Fizik</small> {Math.round(d.physical * 100)}</span>
        <span className={getColor(d.defending * 100)}><small>Defans</small> {Math.round(d.defending * 100)}</span>
        <span className={getColor(d.passing * 100)}><small>Pas</small> {Math.round(d.passing * 100)}</span>
        <span className={getColor(d.heading * 100)}><small>Kafa</small> {Math.round(d.heading * 100)}</span>
      </>
      )
    }
    else {
      table.push(
      <>
        <span className={getColor(d.shotStopping * 100)}><small>Birebir</small> {Math.round(d.shotStopping * 100)}</span>
        <span className={getColor(d.communication * 100)}><small>İletişim</small> {Math.round(d.communication * 100)}</span>
        <span className={getColor(d.offensive * 100)}><small>Ofansif</small> {Math.round(d.offensive * 100)}</span>
        <span className={getColor(d.heading * 100)}><small>Zıplama</small> {Math.round(d.heading * 100)}</span>
        <span className={getColor(d.distribution * 100)}><small>Degaj</small> {Math.round(d.distribution * 100)}</span>
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