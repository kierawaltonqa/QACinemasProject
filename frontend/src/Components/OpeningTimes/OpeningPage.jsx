import React from "react";

import Times from "./Times";

const OpeningPage = () => {
  return (
    <div>
        <h1 className="goldenHours" style={{ marginTop: "20px" }}>
        OpeningTimes
      </h1>
      <Times/>
    </div>
  );
};

export default OpeningPage;
