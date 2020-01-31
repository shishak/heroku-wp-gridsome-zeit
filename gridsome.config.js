siteName: "Gridsome",
  module.exports = {
  siteDescription: "A WordPress starter for Gridsome",

  templates: {
    WordPressCategory: "/category/:slug", // adds route for "category" post type (Optional)
    WordPressPost: "/:year/:month/:day/:slug", //adds route for "post" post type (Optional)
    WordPressPostTag: "/tag/:slug" // adds route for "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "http://34.90.22.150/index.php?rest_route=", // required
        typeName: "WordPress" // GraphQL schema name (Optional)
      }
    }
  ]
};
