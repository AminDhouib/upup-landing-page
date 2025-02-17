import React from "react";
import { ToastContainer } from "react-toastify";
import { useColorMode } from "@docusaurus/theme-common";

export default function Toast() {
  const { colorMode } = useColorMode();

  return (
    <ToastContainer
      limit={3}
      theme={colorMode === "dark" ? "dark" : "light"}
      position="top-right"
      progressClassName="h-0"
      hideProgressBar
      newestOnTop
    />
  );
}
