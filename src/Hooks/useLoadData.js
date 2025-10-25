import axios from "axios";
import React, { useEffect, useState } from "react";

const useLoadData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/treeData.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => {
        setLoading(false);
      });


  }, []);
  return { data, setData, error, setError, loading, setLoading };
};

export default useLoadData;
