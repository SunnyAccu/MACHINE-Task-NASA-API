import axios from 'axios';
import APOD from '../model/apodModel';

export const fetchAndSaveAPOD = async (): Promise<string> => {
  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: process.env.api_key,
      },
    });
    const apodData = response.data;
    await APOD.create({
      date: apodData.date,
      title: apodData.title,
      explanation: apodData.explanation,
      url: apodData.url,
    });
    return 'APOD data saved to the database.';
  } catch (error) {
    return 'Error fetching or saving APOD data.';
  }
};
