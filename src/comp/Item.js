import Chart from "./Chart"

export default function Item({obj}) {
  const { fullname, name, birthday, height, team, country, rating, position } = obj

  return (
    <article name={fullname} position={position}>
      <h1 className="name" dangerouslySetInnerHTML={{__html: redesignName(fullname)}}></h1>

      <div className="country">
        <figure>
          <img src={require(`../img/country/${country.toLowerCase()}.png`).default} alt={country} height="32" />
        </figure>

        <span>{country}</span>
      </div>


      <div className="info">
        <div>
          <span>AGE: {birthday && new Date().getFullYear() - birthday.split("/")[2]}</span>
          <span>{redesingDate(birthday)}</span>
        </div>

        <div>
          <span>{position}</span>
          <span>Position</span>
        </div>

        <div>
          <span>{height}</span>
          <span>Height</span>
        </div>
      </div>
      

      <div className="images">
        <figure>
          <img src={require(`../img/team/${team}.png`).default} alt={team} width="146" height="146" />
        </figure>
        
        <figure>
          <img src={require(`../img/player/${name}.png`).default} alt={name} width="240" height="240" />
        </figure>
      </div>


      <div className="graph">
        <Chart obj={obj} />
      </div>

      <span className="rating">{rating}</span>
    </article>
  )
}

const redesignName = (n) => {
  const a = n.split(" ")
  let r = ""

  a.forEach((e, i) => {
    if(i == 0)
      r += e + "</br>"
    else
      r += " " + e
  })
  return r
}

const redesingDate = (d) => {
  if(!d) { return "" }

  const a = d.split("/")
  let m = ""
  switch (a[1]) {
    case "01": m = "January"; break;
    case "02": m = "February"; break;
    case "03": m = "March"; break;
    case "04": m = "April"; break;
    case "05": m = "May"; break;
    case "06": m = "June"; break;
    case "07": m = "July"; break;
    case "08": m = "August"; break;
    case "09": m = "September"; break;
    case "10": m = "October"; break;
    case "11": m = "November"; break;
    case "12": m = "December"; break;
    default: break;
  }

  return `${m} ${a[0]}, ${a[2]}`
}