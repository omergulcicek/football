import React, {Component} from "react"
import MiniCard from "./MiniCard"

import './../Match.css'
 
export default class Match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gk : "",
      df : "",
      md : "",
      st : "",
      st2 : ""
    }
  }
  
  componentDidMount() {
    fetch(`http://localhost:3001/players?position=Kaleci`)
    .then(res => res.json())
    .then(
      r => {
        let arr = []
        r.map(e => arr.push(e.id))

        this.setState({
          gk: arr[Math.ceil(Math.random() * arr.length)]
        })
      }
    )

    fetch(`http://localhost:3001/players?position=Defans`)
    .then(res => res.json())
    .then(
      r => {
        let arr = []
        r.map(e => arr.push(e.id))

        this.setState({
          df: arr[Math.ceil(Math.random() * arr.length)]
        })
      }
    )

    fetch(`http://localhost:3001/players?position=Orta%20Saha`)
    .then(res => res.json())
    .then(
      r => {
        let arr = []
        r.map(e => arr.push(e.id))

        this.setState({
          md: arr[Math.ceil(Math.random() * arr.length)]
        })
      }
    )

    fetch(`http://localhost:3001/players?position=Forvet`)
    .then(res => res.json())
    .then(
      r => {
        let arr = []
        r.map(e => arr.push(e.id))

        let id = arr[Math.ceil(Math.random() * arr.length)]

        let filtered = arr.filter(function(value, index){ return value !== id})

        let id2 = filtered[Math.ceil(Math.random() * filtered.length)]

        this.setState({
          st: id,
          st2: id2
        })
      }
    )
  }

  render() {
    const { gk, df, md, st, st2 } = this.state
    
    return (
      <div className="match">
        <MiniCard playerId={gk} />
        <MiniCard playerId={df} />
        <MiniCard playerId={md} />
        <MiniCard playerId={st} />
        <MiniCard playerId={st2} />
      </div>
    );
  }
}