import { useEffect, useState } from 'react';
import axios from 'axios';
// Utilizing morningstar api through a proxy; fixed CORS issue

const useAxios = (param, version = 'v2') => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  axios.defaults.baseURL = `https://thingproxy.freeboard.io/fetch/https://www.morningstar.com/api/${version}/`;

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const app_key = 'Nrc2ElgzRkaTE43D5vA7mrWj2WpSBR35fvmaqfte';
      const url = `https://thingproxy.freeboard.io/fetch/https://www.morningstar.com/api/${version}/${param}`;
      const result = await axios.get(url, {
        headers: {
          'X-Api-Key': app_key,
          'Access-Control-Allow-Origin': '*',
        },
      });
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, []);

  return {
    response,
    loading,
    error,
  };
};

export default useAxios;
