import axios from 'axios';
const API_KEY = 'a17633d6c2b94b708e1555be8f56b098';
const BASE_URL = 'https://api.themoviedb.org/3';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`
export class MoviesService{

    static getMovies(){

        return axios(withBaseUrl('/movie/popular'));

    }


}