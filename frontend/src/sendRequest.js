import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=96bec36d4f85ba88c632fc574d7af148',
    params: {page: '1'},
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmJlYzM2ZDRmODViYTg4YzYzMmZjNTc0ZDdhZjE0OCIsInN1YiI6IjY0ZTRmYjgxYzNjODkxMDEwMDdiMmZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b3BKdJSU72dfpGfUgi_OeHO2vqSdDLa51J71_QClVdg'
    }
};

export const sendRequest = () => {
    axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
        return response.data
    })
    .catch(function (error) {
        console.error(error);
        return error
    });
}