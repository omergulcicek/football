import Item from "./comp/Item"
import players from "./players"

export default function App() {
  const allItem = []

  players.filter(e => e.country == "Turkey").sort((a, b) => (a.rating > b.rating) ? 1 : -1).reverse().forEach(e => !e.legend && allItem.push(<Item obj={e} />))
  
  return (
    <>
      {allItem}
    </>
  );
}
