module.exports = {
  siteMetadata: {
    title: `@gill_kyle's notes`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-andy`,
      options: {
        hideDoubleBrackets: true,
        mdxOtherwiseConfigured: true,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [`gatsby-remark-embedder`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Notes | Kyle Gill',
        short_name: 'Notes',
        start_url: '/',
        background_color: '#E6F1FF',
        theme_color: '#FCD34D',
        display: 'minimal-ui',
        icon: 'src/img/favicon.png',
      },
    },
  ],
};
