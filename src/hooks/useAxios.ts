import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState, useEffect, useRef, useMemo } from "react";

type useAxiosProps = {
  url: string;
  params?: object;
};

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const useAxios = <T>({ url, params }: useAxiosProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | unknown | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setloading(true);
      const res: AxiosResponse<T> = await instance.get(url, { params });
      setResponse(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  const sendData = () => {
    fetchData();
  };

  return { response, error, loading, sendData };
};

export default useAxios;
