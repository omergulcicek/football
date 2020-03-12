import React, {Component, Fragment} from "react";
 
export default class Rating extends Component {
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
      special,
      shotStopping,
      communication,
      offensive,
      distribution
    } = this.props

    let totalPower = 0;

    if(shotStopping) {
      totalPower
        = Math.ceil(
        ((shotStopping * 400)
        + (physical * 50)
        + (speed * 30)
        + (communication * 50)
        + (offensive * 120)
        + (distribution * 150)
        + (heading * 350)
        + (mental * 100)
        + (special * 100))
      / 12)
    }
    else if(attacking > defending) {
      totalPower
      = Math.ceil(
      ((defending * 2)
      + (physical * 65)
      + (speed * 85)
      + (vision * 100)
      + (attacking *  120)
      + (technical * 100)
      + (heading * 50)
      + (mental * 100)
      + (flair * 140)
      + (special * 25))
      / 7)
    }
    else {
      totalPower
      = Math.ceil(
      ((defending * 200)
      + (physical * 100)
      + (speed * 85)
      + (vision * 20)
      + (attacking * 5)
      + (technical * 40)
      + (heading * 150)
      + (mental * 150)
      + (special * 25))
      /7)
    }

    return (
      <Fragment>
        {totalPower}
      </Fragment>
    );
  }
}