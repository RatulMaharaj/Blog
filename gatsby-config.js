module.exports = {
  siteMetadata: {
    title: `Ratul Maharaj`,
    name: `Ratul Maharaj`,
    siteUrl: `https://ratulmaharaj.com`,
    description: `The personal blog of Ratul Maharaj.`,
    hero: {
      heading: `Welcome to my blog. I write code and explain a few things here.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/RatulMaharaj`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/ratulmaharaj`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ratulmaharaj`,
      },
      {
        name: `github`,
        url: `https://github.com/RatulMaharaj`,
      },
      {
        name: `mailto`,
        url: `mailto:blog@ratulmaharaj.com`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160728827-1",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Radicalis", "Raleway", "Roboto", "RobotoSlab", "OpenSans", "Saira"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ratul Maharaj`,
        short_name: `Ratul Maharaj`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
