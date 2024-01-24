import axios, { AxiosError } from 'axios';
import APOD from '../model/apodModel';
import { Request, Response } from 'express';
import { handleApiError } from './../utils/errorHandler';

export const fetchAndSaveAPOD = async (req: Request, res: Response): Promise<void> => {
  try {
    const apiKey = process.env.api_key;

    if (!apiKey) {
      res.status(403).json({
        success: false,
        message: 'API key is missing',
      });
      return;
    }

    const apiUrl = 'https://api.nasa.gov/planetary/apod';

    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
      },
    });

    const apodData = response.data;

    if (!apodData || !apodData.date || !apodData.title || !apodData.explanation || !apodData.url) {
      throw new Error('Invalid response from NASA API. Missing required properties.');
    }

    const result = await APOD.create({
      date: apodData.date,
      title: apodData.title,
      explanation: apodData.explanation,
      url: apodData.url,
    });

    res.status(200).json({
      success: true,
      message: 'APOD data saved to the database.',
      data: result,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleApiError(error as AxiosError, res);
    } else if (error.message) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  }
};
