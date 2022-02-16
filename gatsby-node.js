const { groupBy } = require("lodash/collection");

// function removeEmpty(obj) {
//   return Object.fromEntries(
//     Object.entries(obj)
//       .filter(([_, v]) => v != null)
//       .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v])
//   )
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          slug
          body
          rawBody
          frontmatter {
            latitude
            longitude
            zoom
            pitch
            bearing
          }
        }
      }
    }
  `);

  const { nodes } = data.allMdx;

  const nodesWithPath = nodes.map((story) => {
    const path = story.slug.split("/").length > 1 ? story.slug.split("/")[0] : "/";
    return { ...story, path };
  });

  const stories = groupBy(nodesWithPath, "path");

  Object.keys(stories).map((path) =>
    createPage({
      path,
      component: require.resolve("./src/templates/story.js"),
      context: stories[path] /* .map(chapter => removeEmpty(chapter)) */,
    })
  );
};
