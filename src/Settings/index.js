import React from "react";

import ConfirmButton from "./ConfirmButton";
import Welcome from "./Welcome";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

export default function () {
  return (
    <Page name="settings">
      <Welcome />
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}
