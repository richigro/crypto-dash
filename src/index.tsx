import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "components/pages/App/index.js";
import { ModalProvider } from "context/modalContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ModalProvider>
      <App />
    </ModalProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("root")
);
