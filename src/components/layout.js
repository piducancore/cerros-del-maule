/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Map from "./map"

export default props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        px: 3,
      }}
    >
      <Map />
      <header
        sx={{
          position: "sticky",
          top: 0,
          width: "100%",
        }}
      >
        <Styled.h4>{title}</Styled.h4>
      </header>
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        {props.children}
      </main>
    </div>
  )
}
