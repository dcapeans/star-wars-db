import Loader from "react-loader-spinner"
import { Link } from "react-router-dom"

export default function ResultContainer({resultsFound, isLoading, searchForMovie}){
  return (
    <ul className="result-container" style={resultsFound.length === 0 ? {display: "none"} : {display: "block"}}>
      {isLoading && <Loader className="loader" type="ThreeDots" color="#00BFFF" />}
      {resultsFound && !isLoading && resultsFound.map((item, i) => {
        return (<Link key={i} to={searchForMovie ? `movie/${item.url.slice(-2, -1)}` : `character/${item.url.slice(-2, -1)}`}>
          <li>{item.name || item.title}</li>
        </Link>)
      })}
    </ul>
  )
}