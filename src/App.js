import Item from "./comp/Item"
import players from "./players"

export default function App() {
  const allItem = []

  players.filter((e,i) => e.team !== "Icons").sort((a, b) => (a.position < b.position) ? 1 : -1).reverse().forEach(e => allItem.push(<Item obj={e} />))
  
  return (
    <>
      {allItem}
    </>
  );
}
