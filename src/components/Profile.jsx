import React, {Component} from "react";

import Card from "./Card";
import CardGK from "./CardGK";
import Graph from "./Graph";
import GraphGK from "./GraphGK";
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
      goldenboy: false,
      ballondor: null,
      besteurope: null,
      teamoftheyear: null,
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
            special: 0,
            shotStopping: 0,
            communication: 0,
            offensive: 0,
            distribution: 0
          },
          meta: { color: "" }
        }
      ],
    }
  }

  componentDidMount() {
    const id = window.location.pathname.split("/")[2];
    
    fetch(`http://localhost:3001/players/${id}`)
      .then(res => res.json())
      .then(
        r => {
          console.log(r.skills[0].data)

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
            goldenboy: r.goldenboy,
            ballondor: r.ballondor,
            besteurope: r.besteurope,
            teamoftheyear: r.teamoftheyear,
            skills: [
              {
                data: {
                  defending: r.skills[0].data.defending || 0,
                  physical: r.skills[0].data.physical || 0,
                  speed: r.skills[0].data.speed || 0,
                  vision: r.skills[0].data.vision || 0,
                  attacking: r.skills[0].data.attacking || 0,
                  technical: r.skills[0].data.technical || 0,
                  heading: r.skills[0].data.heading || 0,
                  mental: r.skills[0].data.mental || 0,
                  flair: r.skills[0].data.flair || 0,
                  special: r.skills[0].data.special || 0,
                  shotStopping: r.skills[0].data.shotStopping || 0,
                  communication: r.skills[0].data.communication || 0,
                  offensive: r.skills[0].data.offensive || 0,
                  distribution: r.skills[0].data.distribution || 0
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
    const {id, name, fullname, picture, age, position, country, team, legend, goldenboy, ballondor, besteurope, teamoftheyear, skills} = this.state

    return (
      <div className="profile">
        
        {
         position === "Kaleci"
          ? <CardGK
              name={name}
              skills={skills}
              position={position}
              picture={picture}
              country={country}
              team={team}
              legend={legend}
            />
          : <Card
              name={name}
              skills={skills}
              position={position}
              picture={picture}
              country={country}
              team={team}
              legend={legend}
            />
        }

        

        {
         position === "Kaleci"
          ? <GraphGK skills={skills} />
          : <Graph skills={skills} />
        }

        <Info
          fullname={fullname}
          age={new Date().getFullYear() - age}
          position={position}
          country={country}
          team={team}
          skills={skills}
          legend={legend}
          goldenboy={goldenboy}
          ballondor={ballondor}
          besteurope={besteurope}
          teamoftheyear={teamoftheyear}
        />

        <nav className="pagination">
            <a href={id-1}>
              {id !== 1 &&
                `Önceki (${id-1})`
              }
              </a>
          <a href={id+1}>
            Sonraki ({id+1})
          </a>
        </nav>
      </div>
    );
  }
}