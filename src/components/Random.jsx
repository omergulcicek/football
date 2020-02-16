import React, {Component} from "react";
import Card from "./Card";

import './../Random.css';
 
export default class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      name: "",
      picture: "",
      position: "",
      country: "",
      team: "",
      age: 0,
      legend: false,
      skills: [
        {
          data: {
            defending: 0,
            physical: 0,
            speed: 0,
            vision: 0,
            attacking: 0,
            technical: 0,
            heading: 0,
            mental: 0,
            flair: 0,
            special: 0
          },
          meta: { color: "" }
        }
      ],
    }
  }

  componentDidMount() {
    let randomNumber = Math.ceil(Math.random() * 2);
    
    fetch(`http://localhost:3000/players/${randomNumber}`)
      .then(res => res.json())
      .then(
        r => {
          this.setState({
            fullname: r.fullname,
            name: r.name,
            picture: r.picture,
            position: r.position,
            country: r.country,
            team: r.team,
            age: r.age,
            legend: r.legend,
            skills: [
              {
                data: {
                  defending: r.skills[0].data.defending,
                  physical: r.skills[0].data.physical,
                  speed: r.skills[0].data.speed,
                  vision: r.skills[0].data.vision,
                  attacking: r.skills[0].data.attacking,
                  technical: r.skills[0].data.technical,
                  heading: r.skills[0].data.heading,
                  mental: r.skills[0].data.mental,
                  flair: r.skills[0].data.flair,
                  special: r.skills[0].data.special
                },
                meta: { color: r.skills[0].meta.color }
              }
            ],
          });

          
        document.title = "Rastgele Oyuncu";
          
          setTimeout(function(){ window.location.href =  `profile/${r.id}` }, 10000)
        },
        error => {
          console.log(error);
        }
      );


    const card = document.querySelectorAll(".randomPlayer .card")[0];
    const country = card.querySelectorAll(".country")[0];
    const team = card.querySelectorAll(".team")[0];
    const rating = card.querySelectorAll(".rating")[0];
    const position = card.querySelectorAll(".position")[0];

    const name = card.querySelectorAll("main h1")[0];
    const image = card.querySelectorAll("main img")[0];
    const footer = card.querySelectorAll("footer")[0];

    this.delay(country, 1500);
    this.delay(team, 3000);
    this.delay(position, 4000);
    this.delay(rating, 5000);
    this.delay(footer, 5000);
    this.delay(image, 5000);
    this.delay(name, 5500);
  }

  delay(e, t) {
    setTimeout(function(){ e.classList.add("show"); }, t);
  }

  render() {
    const {name, skills, legend, country, team, picture, position} = this.state;

    return (
      <div className="randomPlayer">
        <Card
          name={name}
          skills={skills}
          legend={legend}
          country={country}
          team={team}
          picture={picture}
          position={position}
        />
      </div>
    );
  }
}