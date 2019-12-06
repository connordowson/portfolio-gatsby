const fs = require("fs");
const path = require("path");

// query for blog posts
exports.createPages = async({actions, graphql, reporter}) => {

    const { createPage } = actions;

    // Graphql query to get blog post data
    const blogPostResult = await graphql(`
      query  {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

    blogPostResult.data.allContentfulBlogPost.edges.forEach(edge => {

      const path = `/blog/${edge.node.slug}`;

      createPage({
        path,
        component: require.resolve("./src/templates/blogPost.js"),
        context: {id: edge.node.id}

      })
    })

    // Graphql query to get album blog post data
    const albumBlogPostResult = await graphql(`
      query  {
        allContentfulAlbumBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

    albumBlogPostResult.data.allContentfulAlbumBlogPost.edges.forEach(edge => {

      const path = `/blog/${edge.node.slug}`;

      console.log(path);

      createPage({
        path,
        component: require.resolve("./src/templates/albumBlogPost.js"),
        context: {id: edge.node.id}

      })
    })

}