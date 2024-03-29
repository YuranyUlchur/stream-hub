import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '876d0650d754148bec386c2a98c11caf';

// Service for fetching movie genres
export const ApiServicesGenre = {
    fetchData: async () => {
        try {
            const response = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    }
};

// Service for fetching movies based on genre
export const ApiServicesMovie = {
    fetchData: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/discover/movie?sort_by=popularity.desc&with_genres=${id}&api_key=${API_KEY}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    }
};

// Service for fetching movie details
export const ApiServicesDetails = {
    fetchData: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching movies:', error); 
            throw error;
        }
    }
};

// Service for fetching movie trailers
export const ApiServicesTrailer = {
    fetchData: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}`);
            return response.data.results[0];
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error; 
        }
    }
};
