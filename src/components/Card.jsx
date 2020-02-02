import React, {Component} from "react";
import Rating from "./Rating";

import './../Card.css';

export default class Card extends Component {
  render() {
    const {
      defending,
      physical,
      speed,
      vision,
      attacking,
      technical,
      heading,
      mental,
      flair,
      special
    } = this.props.skills[0].data;

    let { name, legend, country, team, picture, position } = this.props;
    
    return (
      <div className={legend ? "card legend" : "card"}>
        <header>
          <span className="rating">
            <Rating 
              defending={defending}
              physical={physical}
              speed={speed}
              vision={vision}
              attacking={attacking}
              technical={technical}
              heading={heading}
              mental={mental}
              flair={flair}
              special={special}
            />
          </span>
          <span className="country">
            <img src={`https://omergulcicek.com/img/country/${country.toLowerCase()}.png`} alt={country} />
          </span>
          <span className="team">
            <img src={`https://omergulcicek.com/img/team/${team || "Legend"}.png`} alt={team} />

          </span>
          <span className={"position text-" + position.toLowerCase().replace(" ", "")}>
            {position}
          </span>
        </header>

        <main>
          <img src={`https://omergulcicek.com/img/player/${picture}.png`} alt={name}  />
          <h1>{name}</h1>
        </main>

        <footer>
          <table>
            <tbody>
              <tr>
                <td>{Math.round(speed * 100)}</td>
                <th>Hız</th>
                
                <td>{Math.round(vision * 100)}</td>
                <th>Vizyon</th>
              </tr>
              <tr>
                <td>{Math.round(attacking * 100)}</td>
                <th>Atak</th>

                <td>{Math.round(defending * 100)}</td>
                <th>Defans</th>
              </tr>
              <tr>
                <td>{Math.round(technical * 100)}</td>
                <th>Teknik</th>

                <td>{Math.round(physical * 100)}</td>
                <th>Fizik</th>
              </tr>
            </tbody>
          </table>
        </footer>
      </div>
    );
  }
}