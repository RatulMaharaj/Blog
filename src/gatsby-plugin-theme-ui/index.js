import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  initialColorMode: `light`,
  colors: {
    ...novelaTheme.colors,
    accent: `#3B8EA5`,
    modes: {
      ...novelaTheme.colors.modes,
      dark: {
        ...novelaTheme.colors.modes.dark,
        accent: `#8F5CFF`,
        background:`#121212`,
        gradient:
        "linear-gradient(180deg, #121212 0%, #1f1f1f 100%)",
        card: `#1f1f1f`,
      },
    },
    prism: {
      ...novelaTheme.colors.prism,
      background: `#292c34`,
      comment: `#797979`,
      string: `#ffc64b`,
      var: `#b3bac5`,
      number: `#ff8438`,
      constant: `#b3bac5`,
      keyword: `#ff4a5f`,
      boolean: `#ae81ff`,
      function: `#5F8DC3`,
      parameter: `#F9965D`,
      className: `#ffcf74`,
      attrName: `#bf87ba`,
      attrValue: `#ffe44b`,
      punctuation: `#797979`,
    },
  },
  fonts:{
    ...novelaTheme.fonts,
    serif: "Saira, OpenSans, Helvetica, Georgia, Arial, sans-serif",
    sansSerif: "Roboto, Raleway, Arial, sans-serif;"
  },
};
