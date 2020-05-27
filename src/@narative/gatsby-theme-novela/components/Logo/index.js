import React from "react";
import { useColorMode } from "theme-ui";

export default function Logo() {
    const [ColorMode] = useColorMode();

    if (ColorMode === "dark") {
    return (
      <p
        style={{
          color: `#fafafa`,
          fontSize: `1.5em`,
          fontWeight: `bold`,
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
          fontSize: `1.5em`,
          fontWeight: `bold`,
          whiteSpace: `nowrap`,
        }}
      >
        Ratul Maharaj
      </p>
    );
  }
}
