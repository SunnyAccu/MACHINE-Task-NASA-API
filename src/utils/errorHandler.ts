// errorHandler.ts
import { AxiosError } from 'axios';
import { Response } from 'express';

export const handleApiError = (error: AxiosError, res: Response): void => {
  let errorMessage = 'Internal Server Error';

  if (error.response) {
    if (error.response.status === 403) {
      errorMessage = 'Invalid API key. Please provide a valid API key.';
    } else if (error.response.status === 404) {
      errorMessage = 'NASA API URL not found. Please check the URL.';
    } else {
      errorMessage = `Request failed with status ${error.response.status}`;
    }
  } else if (error.message) {
    errorMessage = error.message;
  }

  res.status(500).json({
    success: false,
    message: errorMessage,
  });
};
