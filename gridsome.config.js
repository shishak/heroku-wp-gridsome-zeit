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
        baseUrl: "https://wp-news-api.herokuapp.com/", // required
        apiBase: 'wp-json',
        typeName: "WordPress" // GraphQL schema name (Optional)
      }
    }
  ]
};
