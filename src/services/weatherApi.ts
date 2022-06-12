import axios from 'axios';

const KEY = '3bf01bc214d0479d90b183714221206';

export const getclimate = async (city: string): Promise<any> => {
    const URL = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}`;
    try {
        const response = await axios.get(URL); 
        return response.data;
    } catch (error) {
      throw new Error('Erro na API');
    }  
}