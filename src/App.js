import React, { useState } from "react"

import Item from "./comp/Item"
import players from "./players"

export default function App() {
  const [search, setSearch] = useState("")
  const allItem = []

  search !== ""
    ? players.filter(e => e.name.indexOf(search.toLocaleLowerCase()) > -1 || e.team.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1 || e.country.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1).sort((a, b) => (a.rating < b.rating) ? 1 : -1).forEach(e => allItem.push(<Item obj={e} />))
    
    : players.filter(e => e.team !== "Icons").sort((a, b) => (a.rating < b.rating) ? 1 : -1).forEach(e => allItem.push(<Item obj={e} />))
  
  return (
    <>
      <div>
        <input type="text" placeholder="Oyuncu, takım yada ülke ara" value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {allItem}
    </>
  );
}
