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
    {
      resolve: `gatsby-theme-andy`,
      options: {
        notesDirectory: `content/general-conference/`,
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
  ],
};
