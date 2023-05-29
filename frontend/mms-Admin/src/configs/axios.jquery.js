import Cookies from 'js-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';
import { userCookie } from './app';

const axiosBaseQuery = (
  { baseUrl } = { baseUrl: '' }) => async ({ url, method, data, params }) => {
  try {
    const result = await axios({
      url: baseUrl + url,
      method,
      data,
      params,
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });
    return { data: result.data };
  } catch (axiosError) {
    const rest = axiosError.response?.data;
    if (rest?.message && rest.message === 'Invalid token') {
      Cookies.remove(userCookie);
      window.location.reload();
    }
    toast(rest?.message || axiosError.message, { type: 'error' });
    return {
      error: {
        status: axiosError.response?.status,
        data: axiosError.response?.data || axiosError.message,
      },
    };
  }
};

export default axiosBaseQuery;
