import Chart from "./Chart"

export default function Item({obj}) {
  const { fullname, name, team, country, rating, position } = obj

  return (
    <article>
      <div>
        <p>
          <small>{name}</small>
        </p>
        
        <figure>
          <img src={require(`../img/player/${name}.png`).default} alt={name} width="240" height="240" />
        </figure>

        <figure>
          <img src={require(`../img/team/${team}.png`).default} alt={team} width="80" height="80" />
        </figure>

        <figure>
          <img src={require(`../img/country/${country.toLowerCase()}.png`).default} alt={country} height="32" />
        </figure>

        <strong>{fullname} ({rating}) / {position}</strong>
      </div>
      <Chart obj={obj} />
    </article>
  )
}