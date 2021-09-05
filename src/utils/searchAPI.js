import axios from "axios";

export const searchAPI = (searchForMovie, searchTerm) => {
  if(searchTerm.length === 0) return []
  return axios.get(`https://swapi.dev/api/${searchForMovie?'films':'people'}/?search=${searchTerm}`).then((res) => res.data.results)
}