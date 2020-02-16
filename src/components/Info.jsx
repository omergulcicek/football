import React, {Component} from "react";
 
export default class Info extends Component {
  render() {
    const {age, fullname, position, country, team, skills, legend, goldenboy, ballondor, besteurope, teamoftheyear} = this.props;

    const {
      defending,
      physical,
      speed,
      vision,
      attacking,
      technical,
      heading,
      mental,
      flair
    } = skills[0].data;

    let mentalPoint = 0;
    if(mental >= 0.85) mentalPoint = 25
    else if(mental >= 0.75) mentalPoint = 10;

    const positionClass = position.toLowerCase().replace(" ", "");

    return (
      <div className="info">
        {!legend &&
          <p>
            <mark>{fullname}</mark>, <em>{age} yaşında</em> <u>{team}</u> takımında oynayan <u>{country}</u> milli takım futbolcusudur. {position} pozisyonunda oynamaktadır.
          </p>
        }

        {legend &&
          <p>
            <mark>{fullname}</mark>, <em>{age} yaşında</em> <u>{country}</u> milli futbolcusudur. {position} pozisyonunda oynamaktadır. Futbolu bırakmıştır.
          </p>
        }

        {ballondor &&
          <div>
            <div className="icons trophy ballondor">
              <strong>{ballondor}</strong>

              <p>
                <i class="fa fa-trophy" aria-hidden="true"></i>
                Ballon d'Or
              </p>
            </div>
          </div>
        }

        {besteurope &&
          <div>
            <div className="icons trophy besteurope">
              <strong>{besteurope}</strong>

              <p>
                <i class="fa fa-trophy" aria-hidden="true"></i>
                Men's Player of the Year Award
                </p>
            </div>
          </div>
        }

        {teamoftheyear &&
          <div>
            <div className="icons teamoftheyear">
              <strong>{teamoftheyear}</strong>
              <p>UEFA Team of the Year</p>
            </div>
          </div>
        }

        {legend &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-star" aria-hidden="true"></i>
              <p>Efsane</p>
            </div>
          </div>
        }

        {goldenboy &&
          <div>
            <div className="icons goldenboy">
              <i className="fa fa-diamond" aria-hidden="true"></i>
              <p>Genç Yıldız</p>
            </div>
          </div>
        }

        {flair >= 0.95 &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-magic" aria-hidden="true"></i>
              <p>Sihirbaz</p>
            </div>
          </div>
        }

        {attacking >= 0.85 && 
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-futbol-o" aria-hidden="true"></i>

              { position !== "Kaleci" &&
                <p>Bitirici</p>
              }

              { position === "Kaleci" &&
                <p>Ofansif Kaleci</p>
              }
            </div>
          </div>
        }

        {defending >= 0.9 &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-shield" aria-hidden="true"></i>
              
              { position !== "Kaleci" &&
                <p>Savunma</p>
              }

              { position === "Kaleci" &&
                <p>Panter</p>
              }
            </div>
          </div>
        }

        {physical >= 0.85 &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-bomb" aria-hidden="true"></i>
              <p>Güç</p>
            </div>
          </div>
        }

        {heading >= 0.85 &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-angle-double-up" aria-hidden="true"></i>
              <p>Hava Topu</p>
            </div>
          </div>
        }

        {speed >= 0.85 &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-fighter-jet" aria-hidden="true"></i>
              <p>Hız</p>
            </div>
          </div>
        }

        {flair >= 0.85 &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-random" aria-hidden="true"></i>
              <p>Çalım</p>
            </div>
          </div>
        }

        {technical >= 0.8 && vision >= 0.85 && mental >= 0.65 && position !== "Defans" &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-arrows-alt" aria-hidden="true"></i>
              <p>Oyun Kurucu</p>
            </div>
          </div>
        }

        {defending >= 0.7 && technical >= 0.7 && position === "Defans" &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-arrows" aria-hidden="true"></i>
              <p>Oyun Kurucu Defans</p>
            </div>
          </div>
        }

        {physical >= 0.7 && speed >= 0.7 && vision >= 0.7 && attacking >= 0.7 && technical >= 0.7 && heading >= 0.7 && mental >= 0.7 &&
          <div>
            <div className={"icons text-" + positionClass}>
              <i className="fa fa-cubes" aria-hidden="true"></i>
              <p>Komple Oyuncu</p>
            </div>
          </div>
        }

        {mental >= 0.75 &&
          <div>
            <div className={"icons text-" + positionClass}>
              <strong>+{mentalPoint}</strong>
              <p>Oyun Zekası</p>
            </div>
          </div>
        }
      </div>
    );
  }
}