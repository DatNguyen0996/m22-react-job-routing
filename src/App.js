import React, { useEffect, useState } from "react";
import apiService from "./app/apiService";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const [job, setJob] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataError, setDataError] = useState(false);

  useEffect(() => {
    const featchData = async () => {
      try {
        const response = await apiService.get("/jobs");
        setJob(response.data);
        setIsLoaded(true);
        setDataError(false);
      } catch (error) {
        setDataError(true);
      }
    };
    featchData();
  }, []);

  // return <div>{isLoaded ? <HomePage jobList={job} /> : <p>Loading...</p>}</div>;
  return (
    <>
      <HomePage jobList={job} dataError={dataError} isLoaded={isLoaded} />
    </>
  );
}

export default App;
