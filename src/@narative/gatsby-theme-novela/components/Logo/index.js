import React from "react";
import { useColorMode } from "theme-ui";

export default function Logo() {
    const [ColorMode] = useColorMode();

    if (ColorMode === "dark") {
    return (
      <p
        style={{
          color: `#fafafa`,
          fontFamily: `Radicalis`,
          fontSize: `1.5em`,
          whiteSpace: `nowrap`,
        }}
      >
        Ratul Maharaj
      </p>
    );
  } else {
    return (
      <p
        style={{
          color: `#000`,
          fontFamily: `Radicalis`,
          fontSize: `1.5em`,
          whiteSpace: `nowrap`,
        }}
      >
        Ratul Maharaj
      </p>
    );
  }
}
