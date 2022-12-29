import React, { useEffect, useState } from "react";
import apiService from "./app/apiService";
import HomePage from "./pages/HomePage";

function App() {
  const [job, setJob] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const featchData = async () => {
      try {
        const response = await apiService.get("/jobs");
        setJob(response.data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    featchData();
  }, []);

  return <div>{isLoaded ? <HomePage jobList={job} /> : <p>Loading...</p>}</div>;
}

export default App;
