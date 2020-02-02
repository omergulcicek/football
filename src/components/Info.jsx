import React, {Component} from "react";
 
export default class Info extends Component {
  render() {
    const {age, position, country, team} = this.props;

    return (
      <div className="info">
        <dl>
          <dt>Piyasa Değeri</dt>
          <dd>€156M</dd>

          <dt>Yaş</dt>
          <dd>{age}</dd>

          <dt>Mevki</dt>
          <dd>{position}</dd>

          <dt>Ülke</dt>
          <dd>{country}</dd>

          <dt>Takım</dt>
          <dd>{(team === "") ? "Efsane" : team}</dd>
        </dl>
      </div>
    );
  }
}