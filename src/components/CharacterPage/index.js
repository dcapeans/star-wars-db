import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { searchCharacter, searchMovie } from "../../utils/searchAPI";
import Logo from "../Logo";

import './characterPage.scss'

export default function CharacterPage(){
  const { id } = useParams()
  const [characterData, setCharacterData] = useState(null)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getCharacterData(){
      const url = `https://swapi.dev/api/people/${id}`
      setCharacterData(await searchCharacter(url))
    }
    getCharacterData()
  }, [id])

  useEffect(() => {
    async function getMovies(){
      if(characterData) {
          const firstMovie = await searchCharacter(characterData.films[0])
          const secondMovie = await searchCharacter(characterData.films[1])
          const thirdMovie = await searchCharacter(characterData.films[2])
          setMovies([...movies, firstMovie, secondMovie, thirdMovie])
      }
    }
    getMovies()
    // eslint-disable-next-line
  }, [characterData])


  if(movies.length === 0 || !characterData){
    return (
      <div className="loader">
        <Loader type="Rings" color="#e1b000" height={200} width={200} />
        <p>Buscando coordenadas...</p>
      </div>
    )
  }

  return (
    <div className="container">
      <Logo />
      {characterData && 
          <div className="character-info">
              <div>
                <span className="info-title">Name:</span>
                <p className="info-data">{characterData.name}</p>
              </div>
              <div>
                <span className="info-title">Birth Year:</span>
                <p className="info-data">{characterData.birth_year}</p>
              </div>
              <div>
                <span className="info-title">Height: </span>
                <p className="info-data">{characterData.height}</p>
              </div>
              <div>
                <span className="info-title">Weigth: </span>
                <p className="info-data">{characterData.mass}</p>
              </div>
              <div>
                <span className="info-title">Movies: </span>
                {movies.map((m, i) => (
                  <p key={i}><Link to={`/movie/${m.url.slice(-2, -1)}`} className="info-data">{m.title}</Link></p>
                ))}
              </div>
          </div>
        }
    </div>
  )
}