import React from "react";
import ConfirmButton from "./ConfirmButton";
import Welcome from "./Welcome";
import Page from "../Shared/Page";
export default function() {
  return <Page name='settings'>
    <Welcome/>
    <ConfirmButton/>
  </Page>
}