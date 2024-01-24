import axios from 'axios';
import APOD from '../model/apodModel';
import { Request, Response } from 'express';

export const fetchAndSaveAPOD = async (req: Request, res: Response): Promise<void> => {
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

    res.status(200).json({
      success: true,
      message: 'APOD data saved to the database.',
      data: apodData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
