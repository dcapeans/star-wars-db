import axios from "axios";

export const searchAPI = (searchForMovie, searchTerm) => {
  if(searchTerm.length === 0) return []
  return axios.get(`https://swapi.dev/api/${searchForMovie ? 'films' : 'people'}/?search=${searchTerm}`)
  .then((res) => res.data.results)
  .catch((err) => console.log(err.response.status + ": " + err.response.data.detail))
}

export const searchCharacter = async (characterUrl) => {
  return await axios.get(characterUrl)
  .then(res => res.data)
  .catch((err) => console.log(err.response.status + ": " + err.response.data.detail));
}

export const searchMovieById = async (movieId) => {
  return await axios.get(`https://swapi.dev/api/films/${movieId}`)
  .then(res => res.data)
  .catch((err) => console.log(err.response.status + ": " + err.response.data.detail))
}

export const searchMovie = async (movieUrl) => {
  return await axios.get(movieUrl)
  .then(res => res.data)
  .catch((err) => console.log(err.response.status + ": " + err.response.data.detail))
}