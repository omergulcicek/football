import Chart from "./Chart"

export default function Item({obj}) {
  const { fullname, rating, position } = obj


  return (
    <article>
      <div>
      <strong>{fullname} ({rating}) / {position}</strong>
      </div>
      <Chart obj={obj} />
    </article>
  )
}