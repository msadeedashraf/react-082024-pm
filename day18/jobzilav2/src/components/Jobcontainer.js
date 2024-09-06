import React from "react";
import Joballitems from "./Joballitems";

const Jobcontainer = ({ jobs }) => {
  //console.log(jobs);
  return (
    <>
      {jobs.length ? (
        <Joballitems jobs={jobs} />
      ) : (
        <p style={{ color: "orange" }}>No jobs found</p>
      )}
    </>
  );
};

export default Jobcontainer;
