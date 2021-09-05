import dayjs from "dayjs"
import { useState, useEffect } from "react"
import Loader from "react-loader-spinner"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { searchMovieById, searchCharacter } from "../../utils/searchAPI"
import Logo from "../Logo"
import './moviePage.scss'

export default function MoviePage(){
  const { id } = useParams()
  const [movieData, setMovieData] = useState(null)
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    async function getMovieData(){
      setMovieData(await searchMovieById(id))
    }
    getMovieData()
  }, [id])

  useEffect(() => {
    async function getCharacters(){
      if(movieData) {
          const firstCharacter = await searchCharacter(movieData.characters[0])
          const secondCharacter = await searchCharacter(movieData.characters[1])
          const thirdCharacter = await searchCharacter(movieData.characters[2])
          setCharacters([...characters, firstCharacter, secondCharacter, thirdCharacter])
      }
    }
    getCharacters()
  }, [movieData])

  if(characters.length === 0 || !movieData){
    return (
      <div className="loader">
        <Loader type="Rings" color="#e1b000" height={200} width={200} />
        <p>Buscando coordenadas...</p>
      </div>
    )
  }

  return (
    <div className="movie-page-container">
      <Logo />
      <div className="info-container">
        <div className="crawl">
          <p>{movieData && movieData.opening_crawl}</p>
        </div>
        {movieData && characters && 
          <div className="info">
              <div>
                <span className="info-title">Movie title:</span>
                <p className="info-data">Episode {movieData.episode_id} : {movieData.title}</p>
              </div>
              <div>
                <span className="info-title">Release Date:</span>
                <p className="info-data">{dayjs(movieData.release_date).format('MMM DD, YYYY')}</p>
              </div>
              <div>
                <span className="info-title">Director: </span>
                <p className="info-data">{movieData.director}</p>
              </div>
              <div>
                <span className="info-title">Producers: </span>
                <p className="info-data">{movieData.producer}</p>
              </div>
              <div>
                <span className="info-title">Characters: </span>
                <p><Link to={`character/${characters[0].url.slice(-2, -1)}`} className="info-data">{characters[0].name}</Link></p>
                <p><Link to={`character/${characters[1].url.slice(-2, -1)}`} className="info-data">{characters[1].name}</Link></p>
                <p><Link to={`character/${characters[2].url.slice(-2, -1)}`} className="info-data">{characters[2].name}</Link></p>
              </div>
          </div>
        }
      </div>
    </div>
  )
}