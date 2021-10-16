import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Navbar />
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
