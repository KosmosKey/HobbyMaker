import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./Loading.scss";

export const Loading = () => {
  return (
    <div className="Loading__">
      <LinearProgress className="Loading__SpinnerBar" />
    </div>
  );
};
