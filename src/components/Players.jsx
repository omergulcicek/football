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

          //let n = r.filter(x => x.team == "Barcelona");
          //let n = r.filter(x => x.legend);
          //let n = r.filter(x => x.position == "Orta Saha");
          let n = r.filter(x => !x.legend);

          this.setState({
            players: n
          });
        },
        error => {
          console.log(error);
        }
      );
      
      document.title = "Mini Futbol | Tüm Oyuncular";
  }

  value(power, year, goldenboy, ballondor, besteurope, teamoftheyear, legend, marketValueIsLow) {
    var age = new Date().getFullYear() - year;

    let totalValue = 0;

    if(17 <= age && age <23) {
      totalValue = power * 1.5;
    }
    if(23 <= age && age <25) {
      totalValue = power * 1.3;
    }
    if(25 <= age && age <27) {
      totalValue = power * 1.1;
    }
    else if(27 <= age && age <31) {
      totalValue = power * 1.2;
    }
    else if(31 <= age && age <34) {
      totalValue = power / 1.3;
    }
    else if(34 <= age && age <36) {
      totalValue = power / 2
    }
    else if(36 <= age && age <38) {
      totalValue = power / 5.5;
    }
    else if(38 <= age && age <41) {
      totalValue = power / 7.5;
    }
    else if(41 <= age) {
      totalValue = power / 20;
    }
    
    if(goldenboy) {
      totalValue = totalValue * 2.15;
    }

    if(ballondor) {
      totalValue += (ballondor * 25);
    }
  
    if(besteurope) {
      totalValue += (besteurope * 10);
    }
  
    if(teamoftheyear) {
      totalValue += (teamoftheyear * 5);
    }
  
    if(legend) {
      totalValue = totalValue / 10;
    }
  
    if(marketValueIsLow) {
      totalValue = totalValue / marketValueIsLow;
    }
  
    return Math.ceil(totalValue);
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
      
      <span style="display: inline-block; width: 120px">${e.name} (${new Date().getFullYear() - e.age})</span>

      <img src="https://omergulcicek.com/img/country/${e.country.toLowerCase()}.png" height="40"/>

      <img src="https://omergulcicek.com/img/team/${e.team || "Legend"}.png" height="80"/>

      <h1>${this.power(e.skills)}</h1>

      <h2>€${this.value(this.power(e.skills), e.age, e.goldenboy, e.ballondor, e.besteurope, e.teamoftheyear, e.legend, e.marketValueIsLow)}M</h2>
    </a>`);

    return (
      <div dangerouslySetInnerHTML={{__html: list}}></div>
    );
  }
}