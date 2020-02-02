import React, {Component} from "react";
export default class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/players")
      .then(res => res.json())
      .then(
        r => {
          this.setState({
            players: r
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  power(e) {
    var el = e[0].data;

    let totalPower = 0;

    if(el.attacking > el.defending) {
      totalPower
      = Math.ceil(
      ((el.defending * 5)
      + (el.physical * 65)
      + (el.speed * 85)
      + (el.vision * 100)
      + (el.attacking * 120)
      + (el.technical * 100)
      + (el.heading * 50)
      + (el.mental * 100)
      + (el.flair * 140)
      + (el.special * 25))/7)
    }
    else {
      totalPower
      = Math.ceil(
      ((el.defending * 200)
      + (el.physical * 100)
      + (el.speed * 85)
      + (el.vision * 20)
      + (el.attacking * 5)
      + (el.technical * 40)
      + (el.heading * 150)
      + (el.mental * 150)
      + (el.flair * 1)
      + (el.special * 25))/7)
    }
    return totalPower;
  }

  render() {
    const players = this.state.players;

    var list = "";
    list += players.map((e, i) => `
    <a href="profile/${e.id}" class="player-item ${e.position.toLowerCase().replace(" ", "")}">
      
      <h1 style="color: rgba(0, 0, 0, .25)">${i+1}</h1>
      
      <img src="https://omergulcicek.com/img/player/${e.picture}.png" height="80" />
      
      <span style="display: inline-block; width: 120px">${e.name}</span>

      <img src="https://omergulcicek.com/img/country/${e.country.toLowerCase()}.png" height="40"/>

      <img src="https://omergulcicek.com/img/team/${e.team || "Legend"}.png" height="80"/>

      <h1>${this.power(e.skills)}</h1>
    </a>`);

    return (
      <div dangerouslySetInnerHTML={{__html: list}}></div>
    );
  }
}