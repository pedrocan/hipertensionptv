/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Layout = ({children}) => {
  
  return (
    <>
     <body>

      <div class="wrapper">
        {children}
      </div>

     </body>
    </>
  )
}


export default Layout
