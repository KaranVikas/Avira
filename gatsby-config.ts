import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `avira-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components"]
};

export default config;

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: "http://127.0.0.1:1337",
  accessToken: "4b62372b28e5338b1ba5762ac51b1e616c90f9fa53033f99699af18ebab39e87d77a1d03e5d01a825b8e904de248d26c6013e4f156c7352664bd7aa5414cc0e81c7a282e44639a0c399e844c3fdead30ec50ffbf991056ce69c9493f5f1b9649d204ca0a5e5280be160ce454617ed2c7d705ddf353aa3a39a3f9ae82697b92c5",
  collectionTypes: ["avira-collection"],
  // collectionTypes: [{
  //   singularName: "avira-collection",
  //   queryParams: {
  //     populate: "*"
  //   }
  // }],
  singleTypes: [],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "https://your-site-domain/",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};