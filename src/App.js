import Item from "./comp/Item"
import players from "./players"

export default function App() {
  const allItem = []

  players.filter(e => e.team !== "Icons").sort((a, b) => (a.rating > b.rating) ? 1 : -1).reverse().forEach(e => allItem.push(<Item obj={e} />))
  
  return (
    <>
      {allItem}
    </>
  );
}
