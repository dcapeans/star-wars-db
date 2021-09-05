import { DebounceInput } from "react-debounce-input";
import ResultContainer from '../SearchBar/ResultContainer'
import { BiCameraMovie } from 'react-icons/bi';
import { IoPeopleSharp } from 'react-icons/io5';
import { searchAPI } from '../../utils/searchAPI'
import { useState } from "react";

import './searchBar.scss'

export default function SearchBar(){
  const [searchForMovie, setSearchForMovie] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [resultsFound, setResultsFound] = useState([])

  const toggleSearchType = () => {
    setSearchForMovie(!searchForMovie)
    resetSearchBar()
  }

  const resetSearchBar = () => {
    setResultsFound([])
    setInputValue("")
  }

  return(
    <div className="search-container">
      <form onSubmit={e => e.preventDefault()}>
        <DebounceInput
          className="search-bar" 
          type="search"
          minLength={3}
          value={inputValue}
          debounceTimeout={300} 
          placeholder={searchForMovie ? "Search for movies" : "Search for characters"}
          onChange={async (e) => {
            setResultsFound(await searchAPI(searchForMovie, e.target.value))
            setInputValue(e.target.value)
          }}
        />

        <span className="toggle-search-button" onClick={toggleSearchType} style={searchForMovie ? {backgroundColor: "red"} : {backgroundColor: "green"}}>{searchForMovie ? <BiCameraMovie/> : <IoPeopleSharp/>}</span>
      </form>
      
      <ResultContainer resultsFound={resultsFound} />
    </div>
  )
}