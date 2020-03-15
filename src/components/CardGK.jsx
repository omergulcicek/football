import React, {Component} from "react";
import Rating from "./Rating";

import './../Card.css';

export default class CardGK extends Component {
  render() {
    const {
      shotStopping,
      offensive,
      distribution,
      communication,
      physical,
      speed,
      heading,
      mental,
      special
    } = this.props.skills[0].data;

    let { name, legend, country, team, picture, position } = this.props;
    
    return (
      <div className={legend ? "card legend" : "card"}>
        <header>
          <span className="rating">
            <Rating 
              shotStopping={shotStopping}
              physical={physical}
              speed={speed}
              distribution={distribution}
              offensive={offensive}
              heading={heading}
              mental={mental}
              communication={communication}
              special={special}
            />
          </span>
          <span className="country">
            <img src={`https://omergulcicek.com/img/country/${country.toLowerCase()}.png`} alt={country} width="35" />
          </span>
          <span className="team">
            <img src={`https://omergulcicek.com/img/team/${team || "Legend"}.png`} alt={team} width="35" />

          </span>
          <span className={"position text-" + position.toLowerCase().replace(" ", "")}>
            {position}
          </span>
        </header>

        <main>
          <img src={`https://omergulcicek.com/img/player/${picture}.png`} alt={name} width="35" />
          <h1>{name}</h1>
        </main>

        <footer>
          <table>
            <tbody>
              <tr>
                <td>{Math.round(shotStopping * 100)}</td>
                <th>Karşılama</th>

                <td>{Math.round(distribution * 100)}</td>
                <th>Dağıtım</th>
              </tr>
              <tr>
                <td>{Math.round(heading * 100)}</td>
                <th>Hava</th>

                <td>{Math.round(speed * 100)}</td>
                <th>Hız</th>
              </tr>
              <tr>
                <td>{Math.round(offensive * 100)}</td>
                <th>Ofansif</th>

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