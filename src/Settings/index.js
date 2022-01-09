import React from "react";

import ConfirmButton from "./ConfirmButton";
import Welcome from "./Welcome";
import Page from "../Shared/Page";
import CoinGrid from "../components/organisms/CoinList/CoinList";
import Search from "./Search";

export default function () {
  return (
    <Page name="settings">
      <Welcome />
      {/* <CoinGrid topSection /> */}
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  );
}
