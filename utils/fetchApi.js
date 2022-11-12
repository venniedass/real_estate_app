import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'





export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'a9affa5d40mshc84a0328f865079p1b4b18jsn07e4c10234a3',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }

    })

    return data;
}