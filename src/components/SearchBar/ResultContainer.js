import { Link } from "react-router-dom"

export default function ResultContainer({resultsFound}){
  return (
    <ul className="result-container" style={resultsFound.length === 0 ? {display: "none"} : {display: "block"}}>
      {resultsFound && resultsFound.map((item, i) => (
        <Link key={i} to="/">
          <li>{item.name || item.title}</li>
        </Link>
      ))}
    </ul>
  )
}