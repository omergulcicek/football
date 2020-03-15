import React, {Component} from "react";

import './../Card.css';

export default class MiniCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDone: false,
      id: "",
      name: "",
      picture: "",
      country: "",
      team: "",
      rating: ""
    }
  }
  
  render() {
    const id=this.props.playerId
    
    parseInt(id) > 0 && !this.state.isDone &&
      fetch(`http://localhost:3001/players/${parseInt(id)}`)
      .then(res => res.json())
      .then(
        r => {
          console.log(r)
          
          this.setState({
            isDone: true,
            id: r.id,
            name: r.name,
            picture: r.picture,
            position: r.position,
            country: r.country,
            team: r.team,
            rating: r.rating
          })
        }
      )
      
    const {name, picture, position, country, team, rating} = this.state

    let pos = "";

    if (position === "Kaleci") {
      pos = "gk"
    } else if (position === "Defans") {
      pos = "df"
    } else if (position === "Orta Saha") {
      pos = "md"
    } else if (position === "Forvet") {
      pos = "st"
    }
    
    return (
      <div className={`card is-small ${pos}`}>
        <header>
          <span className="rating">
            {rating}
          </span>
          <span className="country">
            <img src={`https://omergulcicek.com/img/country/${country.toLowerCase()}.png`} alt={country} width="35" />
          </span>
          <span className="team">
            <img src={`https://omergulcicek.com/img/team/${team || "Legend"}.png`} alt={team} width="35" />
          </span>
        </header>

        <main>
          <img src={`https://omergulcicek.com/img/player/${picture}.png`} alt={name} width="35" />
          <h1>{name}</h1>
        </main>
      </div>
    )
  }
}