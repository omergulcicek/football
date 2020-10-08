import React from "react"
import RadarChart from "react-svg-radar-chart"
import "react-svg-radar-chart/build/css/index.css"

function Chart({skills, position}) {
  const data = skills
  const pos = position
  
  let captions
  pos !== "GK"
  ? captions = {
    defending: "Defans",
    physical: "Fizik",
    speed: "Hız",
    vision: "Vizyon",
    attacking: "Atak",
    passing: "Pas",
    heading: "Hava",
    mental: "Zihinsel",
  }
  : captions = {
    shotStopping: "Şut Karşılama",
    physical: "Fizik",
    speed: "Hız",
    mental: "Zihinsel",
    communication: "İletişim",
    offensive: "Ofansif",
    heading: "Hava",
    distribution: "Dağıtım",
  }
  
  const defaultOptions = {
    size: 200,
    scales: 20,
    captionMargin: 10,
    zoomDistance: 1.3,
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontSize: 12,
      fontFamily: 'Inter'
    })
  }
  
  return (
    <RadarChart captions={captions} data={data} options={defaultOptions} />
  );
}

export default Chart