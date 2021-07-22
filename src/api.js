import { KEY, LISTID } from './secret';
const baseUrl = `https://api.themoviedb.org/3/list/${LISTID}?api_key=${KEY}&language=en-US`;
const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}`;
const upcomming =`https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`

export async function getListToSlider() {
    try {
        const response = await fetch(upcomming);
        const list = await response.json();
        console.log("upcomming", list.results);
        return list;

    } catch (error) {
        throw error;
    }
}


export async function getList() {
    try {
        const response = await fetch(trending);
        const list = await response.json();
        console.log(list.results);
        return list;

    } catch (error) {
        throw error;
    }
}

export async function getMovieDetail(id) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
        const item = await response.json();
        return item;
    } catch (error) {
        throw error;
    }
}
// const response = await fetch(`https://api.themoviedb.org/3/search/${name}?api_key=${KEY}&language=en-US&page=1&include_adult=false`)
export async function searchMovie(name) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
        const item = await response.json();
        console.log(item);
        return item;
    } catch (error) {
        console.log(error);
        throw error;
    }
}