const _ = require("lodash/collection")

function removeEmpty(obj) {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => v != null)
      .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v])
  )
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
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
  `)

  const stories = _.groupBy(
    data.allMdx.nodes.map(story => ({
      ...story,
      relativePath: story.slug.split("/")[0],
    })),
    "relativePath"
  )

  Object.keys(stories).map(story => {
    createPage({
      path: story,
      component: require.resolve("./src/templates/story.js"),
      context: stories[story].map(chapter => removeEmpty(chapter)),
    })
  })
}
