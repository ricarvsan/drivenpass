import axios from 'axios';
import { requestError } from '@/erros';

async function get(url: string) {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    const { status, statusText } = error.response;
    throw requestError(status, statusText);
  }
}

export const request = {
  get,
};