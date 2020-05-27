import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    accent: "#5fa8aa",
    modes: {
      ...novelaTheme.colors.modes,
      dark: {
        ...novelaTheme.colors.modes.dark,
        accent: "#c25353",

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
    serif: "'Merriweather', Lato,'Helvetica Neue', Helvetica, Georgia, Serif",
    
  },
};
