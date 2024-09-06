import React, { useEffect, useState } from "react";
import Jobcontainer from "./Jobcontainer";
import Searchjob from "./Searchjob";

const Joblist = () => {
  const API_URL = "http://localhost:3500/jobs";
  const [jobs, setJobs] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(
            "Unfortunately there's no job data available at the moment"
          );
        const listJobs = await response.json();

        console.log(listJobs);
        setJobs(listJobs);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchJobs())();
    }, 2000);
  }, []);

  return (
    <main>
      <section id="job-listings" class="container">
        <Searchjob search={search} setSearch={setSearch} />
        <h1>Job Listings</h1>
        <div id="job-listings-container">
          {isLoading && <p>Please wait while the data is getting loaded</p>}
          {fetchError && (
            <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
          )}
          {!fetchError && !isLoading && (
            <Jobcontainer
              jobs={jobs.filter((job) =>
                job.title.toLowerCase().includes(search.toLowerCase())
              )}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default Joblist;
