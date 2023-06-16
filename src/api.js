import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMoviePopular = async () => {
    const moviePopular = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return moviePopular.data.results
}
export const getMovieNowPlaying = async () => {
    const movieNowplaying = await axios.get(`${baseUrl}/movie/now_playing?page=1&api_key=${apiKey}`)
    return movieNowplaying.data.results
}

export const getMovieUpcoming = async () => {
    const movieUpcoming = await axios.get(`${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`)
    return movieUpcoming.data.results
}

export const getMovieTopRated = async () => {
    const movieTopRated = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`)
    return movieTopRated.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&&api_key=${apiKey}`)
    return search.data
}