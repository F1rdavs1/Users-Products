import { useState, useEffect } from "react";

const useFetch = (link) => {
  const [data, setData] = useState(null);
  const [upload, setUpload] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(link)
        .then((res) => {
          if (!res) {
            throw new Error(`Error: ${res.status}`);
          }
          return res.json();
        })
        .then((result) => {
          setData(result);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setUpload(false);
        });
    };
    fetchData();
  }, [link]);

  return { data, upload, error };
};

export default useFetch;
