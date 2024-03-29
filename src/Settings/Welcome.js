import React from "react";

import { AppContext } from "../App/AppProvider";

export default function Welcome() {
  const [pageState] = React.useContext(AppContext);
  return (
    <div>
      <h1>
        {pageState.firstVisit
          ? "Welcome to CryptoDash please select your favorite coins to begin."
          : ""}
      </h1>
    </div>
  );
}
