module.exports = {
  siteMetadata: {
    title: `Burak Alp KARA`,
    name: `Burak Alp`,
    siteUrl: `https://burakalpkara.com`,
    description: `A developer currently living in Istanbul. Working at Macellan.`,
    hero: {
      heading: `I explain with words and code.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/burakalpk`
      },
      {
        name: `github`,
        url: `https://github.com/Bur0`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/burakalpkara.com`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/burakalpkara`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {}
    }
  ]
}
