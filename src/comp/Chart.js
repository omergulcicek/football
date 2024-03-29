
import RadarChart from 'react-svg-radar-chart'
import 'react-svg-radar-chart/build/css/index.css'

const defaultOptions = {
  size: 600,
  axes: true,
  scales: 5,
  captions: true,
  captionMargin: 24,
  zoomDistance: 1.45,
  captionProps: () => ({
    textAnchor: 'middle',
    fontSize: 14,
    fontFamily: 'Inter, sans-serif'
  })
};

export default function App({obj}) {
  const infos = [
    {
      data: {
        defense: "",
        physical: "",
        pace: "",
        vision: "",
        attacking: "",
        ballControl: "",
        heading: ""
      },
      meta: { color: '' }
    }
  ];

  let captions = {};

  if (obj.position == "GK") {
    infos[0].data.diving = obj.skills.diving / 100
    infos[0].data.handling = obj.skills.handling / 100
    infos[0].data.kicking = obj.skills.kicking / 100
    infos[0].data.reflexes = obj.skills.reflexes / 100
    infos[0].data.speed = obj.skills.speed / 100
    infos[0].data.positioning = obj.skills.positioning / 100
    infos[0].data.aerial = 0.85
    infos[0].data.communication = 0.45

    captions = {
      handling: 'Shot Stopping',
      diving: 'Diving',
      speed: "Speed",
      reflexes: 'Reflexes',
      kicking: 'Kicking',
      communication: 'Communication',
      aerial: 'Aerial',
      positioning: 'Positioning'
    }
  }
  else if (obj.position == "CB" || obj.position == "CDM") {
    infos[0].data.defense = obj.skills.defense.index / 100
    infos[0].data.physical = obj.skills.physical.index / 100
    infos[0].data.pace = obj.skills.pace.index / 100
    infos[0].data.vision = obj.skills.passing.vision / 100
    infos[0].data.attacking = obj.skills.attacking.index / 100
    infos[0].data.ballControl = obj.skills.dribbling.ballControl / 100
    infos[0].data.aerial = obj.skills.defense.heading / 100
    infos[0].data.defAwareness = obj.skills.defense.defAwareness / 100

    captions = {
      defense: 'Defending',
      physical: 'Physical',
      pace: 'Speed',
      vision: 'Vision',
      attacking: "Attacking",
      ballControl: 'Technical',
      aerial: 'Aerial',
      defAwareness: "Awareness"
    }
  }
  else if (obj.position == "LB" || obj.position == "RB" || obj.position == "LWB" || obj.position == "RWB") {
    infos[0].data.defense = obj.skills.defense.index / 100
    infos[0].data.physical = obj.skills.physical.index / 100
    infos[0].data.pace = obj.skills.pace.index / 100
    infos[0].data.vision = obj.skills.passing.vision / 100
    infos[0].data.ballControl = obj.skills.dribbling.ballControl / 100
    infos[0].data.aerial = obj.skills.defense.heading / 100
    infos[0].data.attacking = obj.skills.attacking.index / 100
    infos[0].data.defAwareness = obj.skills.defense.defAwareness / 100

    captions = {
      defense: "Defending",
      physical: 'Physical',
      pace: 'Speed',
      vision: 'Vision',
      attacking: "Attacking",
      ballControl: 'Technical',
      aerial: 'Aerial',
      defAwareness: "Awareness"
    }
  }
  else if (obj.position == "CM" || obj.position == "CAM") {
    infos[0].data.defense = obj.skills.defense.index / 100
    infos[0].data.physical = obj.skills.physical.index / 100
    infos[0].data.pace = obj.skills.pace.index / 100
    infos[0].data.vision = obj.skills.passing.vision / 100
    infos[0].data.attacking = obj.skills.attacking.index / 100
    infos[0].data.ballControl = obj.skills.dribbling.ballControl / 100
    infos[0].data.aerial = obj.skills.defense.heading / 100
    infos[0].data.shortPassing = obj.skills.passing.shortPassing / 100

    captions = {
      defense: 'Defending',
      physical: 'Physical',
      pace: 'Speed',
      vision: 'Vision',
      attacking: "Attacking",
      ballControl: 'Technical',
      aerial: 'Aerial',
      shortPassing: "Passing",
    }
  }
  else if (obj.position == "RM" || obj.position == "LM" || obj.position == "RW" || obj.position == "LW" || obj.position == "ST" || obj.position == "CF") {
    infos[0].data.defense = obj.skills.defense.index / 100
    infos[0].data.physical = obj.skills.physical.index / 100
    infos[0].data.pace = obj.skills.pace.index / 100
    infos[0].data.vision = obj.skills.passing.vision / 100
    infos[0].data.attacking = obj.skills.attacking.index / 100
    infos[0].data.ballControl = obj.skills.dribbling.ballControl / 100
    infos[0].data.aerial = obj.skills.defense.heading / 100
    infos[0].data.positioning = obj.skills.attacking.positioning / 100

    captions = {
      defense: 'Defending',
      physical: 'Physical',
      pace: 'Speed',
      vision: 'Vision',
      attacking: "Attacking",
      ballControl: 'Technical',
      aerial: 'Aerial',
      positioning: "Positioning"
    }
  }

  switch (obj.position) {
    case "GK": infos[0].meta.color = "#ffc107"; break;
    case "CB":
    case "LWB": 
    case "RWB": 
    case "LB": 
    case "RB": infos[0].meta.color = "#4caf50"; break;
    case "CDM":
    case "CM":
    case "CAM": infos[0].meta.color = "#2196f3"; break;
    case "LM":
    case "RM":
    case "LW": 
    case "RW":
    case "ST": 
    case "CF": infos[0].meta.color = "#f44336"; break;
  
    default:
      break;
  }

  return (
    <RadarChart
      captions={captions}
      data={infos}
      options={defaultOptions}
      size={350}
    />
  )
}