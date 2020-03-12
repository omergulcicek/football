import React, {Component} from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
 
export default class GraphGK extends Component {
  render() {
    const {skills} = this.props;

    const captions = {
      shotStopping: "Şut Karşılama",
      physical: "Fizik",
      speed: "Hız",
      mental: "Zihinsel",
      communication: "İletişim",
      offensive: "Ofansif",
      heading: "Hava",
      distribution: "Dağıtım",
    };
    
    const defaultOptions = {
      size: 200,
      scales: 20,
      captionMargin: 10,
      zoomDistance: 1.3,
      captionProps: () => ({
        className: 'caption',
        textAnchor: 'middle',
        fontSize: 12,
        fontFamily: 'Ubuntu'
      })
    };

    const data = [];
    data.push(skills);

    return (
      <div className="graph">
        <RadarChart captions={captions} data={data[0]} options={defaultOptions} />
      </div>
    );
  }
}