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
  accessToken: "f95fa2675a8aded169fca122c941c508c43cd3257abb34062449803d1e589bd893a2ac0c27d48bfcd54f6844e0a8535cba901bfa5876572282d542809874e69bffad81a3dc52259fa04a0f9fb78b1fde5821c00ef374294a9d9fe504ba13f46bea009b1c31eaef21ecac013340178b55e9394ab7c5b447f17f7546ab6cbf90b4",
  // collectionTypes: ["product"],
  collectionTypes: [{
    singularName: "product",
    queryParams: {
      populate: "*"
    }
  }],
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