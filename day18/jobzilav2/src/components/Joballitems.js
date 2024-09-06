import React from "react";
import Jobitems from "./Jobitems";

const Joballitems = ({ jobs }) => {
  return (
    <>
      {jobs.map((job) => (
        <Jobitems key={job.id} job={job} />
      ))}
    </>
  );
};

export default Joballitems;
