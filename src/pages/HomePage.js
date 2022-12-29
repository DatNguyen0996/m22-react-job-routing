import React, { useState, useEffect, createContext } from "react";
import PageBar from "../components/PageBar";
import JobList from "../components/JobList";
import PageSelect from "../components/PageSelect";
import { Routes, Route } from "react-router-dom";
import NewLogIn from "../components/NewLogIn";

export const pageContext = createContext({});

function HomePage({ jobList, dataError, isLoaded }) {
  const datalogin = { username: "DatNguyen", password: "12345" };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [islogined, setIslogined] = useState(false);

  useEffect(() => {
    if (username === datalogin.username && password === datalogin.password) {
      setIslogined(true);
    } else {
      setIslogined(false);
    }
  }, [username, password, datalogin.username, datalogin.password]);

  const [page, setPage] = useState(1);
  const handlePageSelect = (pages) => {
    setPage(pages);
  };

  const handlePageSelectByID = (pages) => {
    setPage(pages);
  };

  const [jobSearch, setJobSearch] = React.useState("");
  const handleSearch = (value) => {
    setJobSearch(value);
  };

  const [startEnd, setStartEnd] = useState(1);
  const handlePage = (page) => {
    setStartEnd(page);
    console.log(startEnd);
  };

  let filteredJob;
  if (jobSearch) {
    filteredJob = jobList.filter((job) =>
      job.title.toLowerCase().includes(jobSearch.toLowerCase())
    );
  } else {
    filteredJob = jobList;
  }

  const [numberOfPage, setNumberOfPage] = useState(0);

  useEffect(() => {
    filteredJob.length / 5 > Math.floor(filteredJob.length / 5)
      ? setNumberOfPage(Math.floor(filteredJob.length / 5) + 1)
      : setNumberOfPage(filteredJob.length / 5);
  }, [filteredJob.length]);

  return (
    <div>
      <pageContext.Provider
        value={{ handlePageSelect, page, handlePageSelectByID }}
      >
        <PageBar
          handleSearch={handleSearch}
          islogined={islogined}
          setIslogined={setIslogined}
          setUsername={setUsername}
          setPassword={setPassword}
          datalogin={datalogin.username}
        />
        <Routes>
          <Route
            path="/"
            element={
              dataError ? (
                <div className="error">ERROR: can't connect to server</div>
              ) : isLoaded ? (
                <>
                  <JobList
                    jobList={filteredJob}
                    islogined={islogined}
                    setIslogined={setIslogined}
                  />
                  <PageSelect
                    handlePage={handlePage}
                    numberOfPage={numberOfPage}
                  />
                </>
              ) : (
                <div>Loading...</div>
              )
            }
          />

          <Route
            path="/:id"
            element={
              dataError ? (
                <div className="error">ERROR: can't connect to server</div>
              ) : isLoaded ? (
                <>
                  <JobList
                    jobList={filteredJob}
                    islogined={islogined}
                    setIslogined={setIslogined}
                  />
                  <PageSelect
                    handlePage={handlePage}
                    numberOfPage={numberOfPage}
                  />
                </>
              ) : (
                <div>Loading...</div>
              )
            }
          />
          <Route
            path="/login"
            element={
              <>
                <NewLogIn
                  setUsername={setUsername}
                  setPassword={setPassword}
                  islogined={islogined}
                />
              </>
            }
          />
        </Routes>
      </pageContext.Provider>
    </div>
  );
}

export default HomePage;
