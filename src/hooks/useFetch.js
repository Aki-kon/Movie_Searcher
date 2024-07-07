import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const Fetching = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTc1NjMwYmE4Mzk1NDMwYTI4N2U5MzZlMjhlMTliZCIsIm5iZiI6MTcyMDIxNjUzMC43MzUyMTEsInN1YiI6IjY2ODg2YTIxYWFmMTQ1NjhlMzVlNWU3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgQtcag6wsHjae_r8T-rwAKNALWCEeyQD1PBuBLN7i8",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (url) {
      Fetching();
    }
  }, [url]);
  return { data, isLoading };
};

export default useFetch;
