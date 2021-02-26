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
    data.allMdx.nodes.map(story => {
      const parentFolder = story.slug.split("/")
      return {
        ...story,
        parentFolder: parentFolder.length > 1 ? parentFolder[0] : "/",
      }
    }),
    "parentFolder"
  )

  Object.keys(stories).map(story =>
    createPage({
      path: story,
      component: require.resolve("./src/templates/story.js"),
      context: stories[story].map(chapter => removeEmpty(chapter)),
    })
  )
}
