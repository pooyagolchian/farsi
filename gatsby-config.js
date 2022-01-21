module.exports = {
  pathPrefix: `/farsi`,
  siteMetadata: {
    title: `پویا گلچیان`,
    author: `پویا گلچیان`,
    description: `پویا گلچیان - برنامه‌نویس و مهندس نرم‌افزار، مشاور تیم‌های فنی نرم‌افزاری`,
    siteUrl: `https://www.pooyagolchian.com/farsi/`,
    social: {
      twitter: `pooyagolchian`,
      github: `pooyagolchian`,
      linkedin: `pooyagolchian`,
      dribbble: `pooyagolchian`,
      english: `https://pooyagolchian.com/`,
      virgool: `https://virgool.io/@pooyagolchian`,
      telegram: `https://t.me/icoder`,
    },
  },
  plugins: [
    `gatsby-theme-overreacted-toggle`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Sahel"],
          urls: ["/farsi/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-114457345-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pooya Golchian farsi blog`,
        short_name: `Pooya Golchian`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#26c9e6`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
        theme_color_in_head: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
