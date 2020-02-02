import React, {Component} from "react";

import Card from "./Card";
import Graph from "./Graph";
import Info from "./Info";
 
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
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
    const id = window.location.pathname.split("/")[2];
    
    fetch(`http://localhost:3000/players/${id}`)
      .then(res => res.json())
      .then(
        r => {
          this.setState({
            id: r.id,
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

          document.title = `${r.name} (${new Date().getFullYear() - r.age})`;
    
        },
        error => {
          console.log(error);
        }
      );

  }
  
  render() {
    const {id, name, fullname, picture, age, position, country, team, legend, skills} = this.state;

    return (
      <div className="profile">
        <Card
          name={name}
          skills={skills}
          position={position}
          picture={picture}
          country={country}
          team={team}
          legend={legend}
        />

        <Graph skills={skills} />

        <Info
          fullname={fullname}
          age={new Date().getFullYear() - age}
          position={position}
          country={country}
          team={team}
          skills={skills}
          legend={legend}
        />

        <a href={id+1}>
          Sonraki ({id+1})
        </a>
      </div>
    );
  }
}